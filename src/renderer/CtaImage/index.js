import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import classNames from 'classnames';
import Option from '../../components/Option';
import './styles.css';

const getCtaImageComponent = config => class CtaImage extends Component {
  static propTypes: Object = {
    block: PropTypes.object,
    contentState: PropTypes.object,
  };

  state: Object = {
    hovered: false,
  };

  setEntityAlignmentLeft: Function = (): void => {
    this.setEntityAlignment('left');
  };

  setEntityAlignmentRight: Function = (): void => {
    this.setEntityAlignment('right');
  };

  setEntityAlignmentCenter: Function = (): void => {
    this.setEntityAlignment('none');
  };

  setEntityAlignment: Function = (alignment): void => {
    const { block, contentState } = this.props;
    const entityKey = block.getEntityAt(0);
    contentState.mergeEntityData(
      entityKey,
      { alignment },
    );
    config.onChange(EditorState.push(config.getEditorState(), contentState, 'change-block-data'));
    this.setState({
      dummy: true,
    });
  };

  toggleHovered: Function = (): void => {
    const hovered = !this.state.hovered;
    this.setState({
      hovered,
    });
  };

  renderAlignmentOptions(alignment): Object {
    return (
      <div
        className={classNames(
          'rdw-ctaimage-alignment-options-popup',
          {
            'rdw-ctaimage-alignment-options-popup-right': alignment === 'right',
          },
        )}
      >
        <Option
          onClick={this.setEntityAlignmentLeft}
          className="rdw-ctaimage-alignment-option"
        >
          L
        </Option>
        <Option
          onClick={this.setEntityAlignmentCenter}
          className="rdw-ctaimage-alignment-option"
        >
          C
        </Option>
        <Option
          onClick={this.setEntityAlignmentRight}
          className="rdw-ctaimage-alignment-option"
        >
          R
        </Option>
      </div>
    );
  }

  render(): Object {
    const { block, contentState } = this.props;
    const { hovered } = this.state;
    const { isReadOnly, isCtaImageAlignmentEnabled } = config;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, alignment, height, width, alt, linkUrl } = entity.getData();
    return (
      <span
        onMouseEnter={this.toggleHovered}
        onMouseLeave={this.toggleHovered}
        className={classNames(
          'rdw-ctaimage-alignment',
          {
            'rdw-ctaimage-left': alignment === 'left',
            'rdw-ctaimage-right': alignment === 'right',
            'rdw-ctaimage-center': !alignment || alignment === 'none',
          },
        )}
      >
        <span className="rdw-ctaimage-imagewrapper">
          <a
            href={linkUrl}
          >
            <img
              src={src}
              alt={alt}
              style={{
                height,
                width,
              }}
            />
          </a>
          {
              !isReadOnly() && hovered && isCtaImageAlignmentEnabled() ?
                this.renderAlignmentOptions(alignment)
                :
                undefined
            }
        </span>
      </span>
    );
  }
};

export default getCtaImageComponent;
