/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichUtils, EditorState, Modifier } from 'draft-js';
import {
  getSelectionText,
  getEntityRange,
  getSelectionEntity,
} from 'draftjs-utils';
import linkifyIt from 'linkify-it';

import LayoutComponent from './Component';

const linkify = linkifyIt();

class CTABox extends Component {
  static propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    modalHandler: PropTypes.object,
    config: PropTypes.object,
    translations: PropTypes.object,
  };

  state: Object = {
    expanded: false,
    link: undefined,
    selectionText: undefined,
  };

  componentWillMount(): void {
    const { editorState, modalHandler } = this.props;
    if (editorState) {
      this.setState({
        currentEntity: getSelectionEntity(editorState),
      });
    }
    modalHandler.registerCallBack(this.expandCollapse);
  }

  componentWillReceiveProps(properties: Object): void {
    const newState = {};
    if (properties.editorState &&
      this.props.editorState !== properties.editorState) {
      newState.currentEntity = getSelectionEntity(properties.editorState);
    }
    this.setState(newState);
  }

  componentWillUnmount(): void {
    const { modalHandler } = this.props;
    modalHandler.deregisterCallBack(this.expandCollapse);
  }

  onExpandEvent: Function = (): void => {
    this.signalExpanded = !this.state.expanded;
  };

  onChange = (action, boxTitle, boxText, buttonText, target, targetOption) => {
    if (action === 'ctaBox') {
      const links = linkify.match(target);
      const linkifiedTarget = links && links[0] ? links[0].url : '';
      this.addCTABox(boxTitle, boxText, buttonText, linkifiedTarget, targetOption);
    }
  }

  getCurrentValues = () => {
    const { editorState } = this.props;
    const { currentEntity } = this.state;
    const contentState = editorState.getCurrentContent();
    const currentValues = {};
    if (currentEntity && (contentState.getEntity(currentEntity).get('type') === 'CTA_BOX')) {
      currentValues.ctaBox = {};
      const entityRange = currentEntity && getEntityRange(editorState, currentEntity);
      currentValues.ctaBox.ctaTargetLink = currentEntity && contentState.getEntity(currentEntity).get('data').url;
      currentValues.ctaBox.ctaTargetLinkOption = currentEntity && contentState.getEntity(currentEntity).get('data').targetOption;
      currentValues.ctaBox.buttonText = (entityRange && entityRange.text);
      currentValues.ctaBox.boxTitle = currentEntity && contentState.getEntity(currentEntity).get('data').ctaTitle;
      currentValues.ctaBox.boxText = currentEntity && contentState.getEntity(currentEntity).get('data').ctaText;

    }
    currentValues.selectionText = getSelectionText(editorState);
    return currentValues;
  }

  doExpand: Function = (): void => {
    this.setState({
      expanded: true,
    });
  };

  expandCollapse: Function = (): void => {
    this.setState({
      expanded: this.signalExpanded,
    });
    this.signalExpanded = false;
  }

  doCollapse: Function = (): void => {
    this.setState({
      expanded: false,
    });
  };

  addCTABox: Function = (boxTitle, boxText, buttonText, ctaTargetLink, ctaTargetLinkOption): void => {
    const { editorState, onChange } = this.props;
    const { currentEntity } = this.state;
    let selection = editorState.getSelection();

    if (currentEntity) {
      const entityRange = getEntityRange(editorState, currentEntity);
      selection = selection.merge({
        anchorOffset: entityRange.start,
        focusOffset: entityRange.end,
      });
    }
    const entityKey = editorState
      .getCurrentContent()
      .createEntity('CTA_BOX', 'MUTABLE', { ctaTitle: boxTitle, ctaText: boxText, ctaButtonText: buttonText, url: ctaTargetLink, targetOption: ctaTargetLinkOption })
      .getLastCreatedEntityKey();

    let contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      selection,
      `${buttonText}`,
      editorState.getCurrentInlineStyle(),
      entityKey,
    );
    let newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

    // insert a blank space after ctaBox
    selection = newEditorState.getSelection().merge({
      anchorOffset: selection.get('anchorOffset') + buttonText.length,
      focusOffset: selection.get('anchorOffset') + buttonText.length,
    });
    newEditorState = EditorState.acceptSelection(newEditorState, selection);
    contentState = Modifier.insertText(
      newEditorState.getCurrentContent(),
      selection,
      ' ',
      newEditorState.getCurrentInlineStyle(),
      undefined,
    );
    onChange(EditorState.push(newEditorState, contentState, 'insert-characters'));
    this.doCollapse();
  };

  render(): Object {
    const { config, translations } = this.props;
    const { expanded } = this.state;
    const { ctaBox, selectionText } = this.getCurrentValues();
    const CTABoxComponent = config.component || LayoutComponent;
    return (
      <CTABoxComponent
        config={config}
        translations={translations}
        expanded={expanded}
        onExpandEvent={this.onExpandEvent}
        doExpand={this.doExpand}
        doCollapse={this.doCollapse}
        currentState={{
          ctaBox,
          selectionText,
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default CTABox;

// todo refct
// 1. better action names here
// 2. align update signatue
// 3. align current value signature
