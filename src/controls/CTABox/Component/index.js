/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { stopPropagation } from '../../../utils/common';
import { getFirstIcon } from '../../../utils/toolbar';
import Option from '../../../components/Option';
import { Dropdown, DropdownOption } from '../../../components/Dropdown';
import './styles.css';

class LayoutComponent extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    doExpand: PropTypes.func,
    doCollapse: PropTypes.func,
    onExpandEvent: PropTypes.func,
    config: PropTypes.object,
    onChange: PropTypes.func,
    currentState: PropTypes.object,
    translations: PropTypes.object,
  };

  state: Object = {
    showModal: false,
    boxTitle: '',
    boxText: '',
    ctaTargetLink: '',
    buttonText: '',
    ctaTargetLinkOption: this.props.config.defaultTargetOption,
  };

  componentWillReceiveProps(props) {
    if (this.props.expanded && !props.expanded) {
      this.setState({
        showModal: false,
        boxTitle: '',
        boxText: '',
        ctaTargetLink: '',
        buttonText: '',
        ctaTargetLinkOption: this.props.config.defaultTargetOption,
      });
    }
  }

  addCTABox: Function = (): void => {
    const { onChange } = this.props;
    const { boxTitle, boxText, buttonText, ctaTargetLink, ctaTargetLinkOption } = this.state;
    onChange('ctaBox', boxTitle, boxText, buttonText, ctaTargetLink, ctaTargetLinkOption);
  };

  updateValue: Function = (event: Object): void => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
  };

  updateTargetOption: Function = (event: Object): void => {
    this.setState({
      ctaTargetLinkOption: event.target.checked ? '_blank' : '_self',
    });
  };

  hideModal: Function = (): void => {
    this.setState({
      showModal: false,
    });
  };

  signalExpandShowModal = () => {
    const { onExpandEvent, currentState: { ctaBox, selectionText } } = this.props;
    const { ctaTargetLinkOption } = this.state;
    onExpandEvent();
    this.setState({
      showModal: true,
      boxTitle: (ctaBox && ctaBox.boxTitle) || '',
      boxText: (ctaBox && ctaBox.boxText) || '',
      ctaTargetLink: (ctaBox && ctaBox.ctaTargetLink) || '',
      ctaTargetLinkOption: (ctaBox && ctaBox.targetOption) || ctaTargetLinkOption,
      buttonText: (ctaBox && ctaBox.buttonText) || '',
    });
  }

  forceExpandAndShowModal: Function = (): void => {
    const { doExpand, currentState: { ctaBox, selectionText } } = this.props;
    const { ctaTargetLinkOption } = this.state;
    doExpand();
    this.setState({
      showModal: true,
      boxTitle: (ctaBox && ctaBox.boxTitle) || '',
      boxText: (ctaBox && ctaBox.boxText) || '',
      ctaTargetLink: ctaBox && ctaBox.target,
      ctaTargetLinkOption: (ctaBox && ctaBox.targetOption) || ctaTargetLinkOption,
      buttonText: (ctaBox && ctaBox.buttonText) || '',
    });
  }

  renderAddCTABoxModal() {
    const { config: { popupClassName }, doCollapse, translations } = this.props;
    const { buttonText, ctaTargetLink, ctaTargetLinkOption, boxTitle, boxText } = this.state;
    return (
      <div
        className={classNames('rdw-ctabox-modal', popupClassName)}
        onClick={stopPropagation}
      >
        <h5>{translations['components.controls.ctaBox.headline']}</h5>
        <label className="rdw-ctabox-modal-label" htmlFor="boxTitle">
          {translations['components.controls.ctaBox.boxTitle']}
        </label>
        <input
          id="boxTitle"
          className="rdw-ctabox-modal-input"
          onChange={this.updateValue}
          onBlur={this.updateValue}
          name="boxTitle"
          value={boxTitle}
        />
        <label className="rdw-ctabox-modal-label" htmlFor="boxText">
          {translations['components.controls.ctaBox.boxText']}
        </label>
        <input
          id="boxText"
          className="rdw-ctabox-modal-input"
          onChange={this.updateValue}
          onBlur={this.updateValue}
          name="boxText"
          value={boxText}
        />
        <label className="rdw-ctabox-modal-label" htmlFor="buttonText">
          {translations['components.controls.ctaBox.buttonText']}
        </label>
        <input
          id="buttonText"
          className="rdw-ctabox-modal-input"
          onChange={this.updateValue}
          onBlur={this.updateValue}
          name="buttonText"
          value={buttonText}
        />
        <label className="rdw-ctabox-modal-label" htmlFor="ctaTargetLink">
          {translations['components.controls.ctaBox.ctaTargetLink']}
        </label>
        <input
          id="ctaTargetLink"
          className="rdw-ctabox-modal-input"
          onChange={this.updateValue}
          onBlur={this.updateValue}
          name="ctaTargetLink"
          value={ctaTargetLink}
        />
        <span className="rdw-ctabox-modal-buttonsection">
          <button
            className="rdw-ctabox-modal-btn"
            onClick={this.addCTABox}
            disabled={!ctaTargetLink || !buttonText}
          >
            {translations['generic.add']}
          </button>
          <button
            className="rdw-ctabox-modal-btn"
            onClick={doCollapse}
          >
            {translations['generic.cancel']}
          </button>
        </span>
      </div>
    );
  }

  renderInFlatList(): Object {
    const {
      config: { options, link, className },
      currentState,
      expanded,
      translations,
    } = this.props;
    const { showModal } = this.state;
    return (
      <div className={classNames('rdw-ctabox-wrapper', className)} aria-label="rdw-ctabox-control">
        {options.indexOf('link') >= 0 && <Option
          value="unordered-list-item"
          className={classNames(link.className)}
          onClick={this.signalExpandShowModal}
          aria-haspopup="true"
          aria-expanded={showModal}
          title={link.title || translations['components.controls.ctaBox.link']}
        >
          <img
            src={link.icon}
            alt=""
          />
        </Option>}
        {expanded && showModal ? this.renderAddCTABoxModal() : undefined}
      </div>
    );
  }

  renderInDropDown(): Object {
    const {
      expanded,
      onExpandEvent,
      doCollapse,
      doExpand,
      onChange,
      config,
      currentState,
      translations,
    } = this.props;
    const { options, link, className, dropdownClassName, title } = config;
    const { showModal } = this.state;
    return (
      <div
        className="rdw-ctabox-wrapper"
        aria-haspopup="true"
        aria-label="rdw-ctabox-control"
        aria-expanded={expanded}
        title={title}
      >
        <Dropdown
          className={classNames('rdw-ctabox-dropdown', className)}
          optionWrapperClassName={classNames(dropdownClassName)}
          onChange={onChange}
          expanded={expanded && !showModal}
          doExpand={doExpand}
          doCollapse={doCollapse}
          onExpandEvent={onExpandEvent}
        >
          <img
            src={getFirstIcon(config)}
            alt=""
          />
          {options.indexOf('link') >= 0 && <DropdownOption
            onClick={this.forceExpandAndShowModal}
            className={classNames('rdw-ctabox-dropdownoption', link.className)}
            title={link.title || translations['components.controls.ctaBox.link']}
          >
            <img
              src={link.icon}
              alt=""
            />
          </DropdownOption>}
        </Dropdown>
        {expanded && showModal ? this.renderAddCTABoxModal() : undefined}
      </div>
    );
  }

  render(): Object {
    const { config: { inDropdown } } = this.props;
    if (inDropdown) {
      return this.renderInDropDown();
    }
    return this.renderInFlatList();
  }
}

export default LayoutComponent;
