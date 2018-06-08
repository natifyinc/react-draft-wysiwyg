/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Option from '../../../components/Option';
import Spinner from '../../../components/Spinner';
import './styles.css';

class LayoutComponent extends Component {
  static propTypes: Object = {
    expanded: PropTypes.bool,
    onExpandEvent: PropTypes.func,
    doCollapse: PropTypes.func,
    onChange: PropTypes.func,
    config: PropTypes.object,
    translations: PropTypes.object,
  };

  state: Object = {
    imgSrc: '',
    dragEnter: false,
    uploadHighlighted: this.props.config.uploadEnabled && !!this.props.config.uploadCallback,
    showImageLoading: false,
    height: this.props.config.defaultSize.height,
    width: this.props.config.defaultSize.width,
    alt: '',
    linkUrl: '',
  };

  componentWillReceiveProps(props: Object): void {
    if (this.props.expanded && !props.expanded) {
      this.setState({
        imgSrc: '',
        dragEnter: false,
        uploadHighlighted: this.props.config.uploadEnabled && !!this.props.config.uploadCallback,
        showImageLoading: false,
        height: this.props.config.defaultSize.height,
        width: this.props.config.defaultSize.width,
        alt: '',
        linkUrl: '',
      });
    } else if (props.config.uploadCallback !== this.props.config.uploadCallback ||
      props.config.uploadEnabled !== this.props.config.uploadEnabled) {
      this.setState({
        uploadHighlighted: props.config.uploadEnabled && !!props.config.uploadCallback,
      });
    }
  }

  onDragEnter: Function = (event: Object): void => {
    this.stopPropagation(event);
    this.setState({
      dragEnter: true,
    });
  };

  onImageDrop: Function = (event: Object): void => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      dragEnter: false,
    });

    // Check if property name is files or items
    // IE uses 'files' instead of 'items'
    let data;
    let dataIsItems;
    if (event.dataTransfer.items) {
      data = event.dataTransfer.items;
      dataIsItems = true;
    } else {
      data = event.dataTransfer.files;
      dataIsItems = false;
    }
    for (let i = 0; i < data.length; i += 1) {
      if ((!dataIsItems || data[i].kind === 'file') && data[i].type.match('^image/')) {
        const file = dataIsItems ? data[i].getAsFile() : data[i];
        this.uploadImage(file);
      }
    }
  };

  showImageUploadOption: Function = (): void => {
    this.setState({
      uploadHighlighted: true,
    });
  };

  addImageFromState: Function = (): void => {
    const { imgSrc, alt, linkUrl } = this.state;
    let { height, width } = this.state;
    const { onChange } = this.props;
    if (!isNaN(height)) {
      height += 'px';
    }
    if (!isNaN(width)) {
      width += 'px';
    }
    onChange(imgSrc, height, width, alt, linkUrl);
  };

  showImageURLOption: Function = (): void => {
    this.setState({
      uploadHighlighted: false,
    });
  };

  toggleShowImageLoading: Function = (): void => {
    const showImageLoading = !this.state.showImageLoading;
    this.setState({
      showImageLoading,
    });
  };

  updateValue: Function = (event: Object): void => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
  };

  selectImage: Function = (event: Object): void => {
    if (event.target.files && event.target.files.length > 0) {
      this.uploadImage(event.target.files[0]);
    }
  };

  uploadImage: Function = (file: Object): void => {
    this.toggleShowImageLoading();
    const { uploadCallback } = this.props.config;
    uploadCallback(file)
      .then(({ data }) => {
        this.setState({
          showImageLoading: false,
          dragEnter: false,
          imgSrc: data.link || data.url,
        });
        this.fileUpload = false;
      }).catch(() => {
        this.setState({
          showImageLoading: false,
          dragEnter: false,
        });
      });
  };

  fileUploadClick = (event) => {
    this.fileUpload = true;
    event.stopPropagation();
  }

  stopPropagation: Function = (event: Object): void => {
    if (!this.fileUpload) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.fileUpload = false;
    }
  };

  renderAddImageModal(): Object {
    const {
      imgSrc,
      uploadHighlighted,
      showImageLoading,
      dragEnter,
      height,
      width,
      alt,
      linkUrl,
    } = this.state;
    const {
      config: {
        popupClassName,
        uploadCallback,
        uploadEnabled,
        urlEnabled,
        previewImage,
        inputAccept,
        alt: altConf,
      },
      doCollapse,
      translations,
    } = this.props;

    return (
      <div
        className={classNames('rdw-ctaimage-modal', popupClassName)}
        onClick={this.stopPropagation}
      >
        <h5>{translations['components.controls.ctaImage.headline']}</h5>
        <div className="rdw-ctaimage-modal-header">
          {uploadEnabled && uploadCallback &&
            <span
              onClick={this.showImageUploadOption}
              className="rdw-ctaimage-modal-header-option"
            >
              {translations['components.controls.ctaImage.fileUpload']}
              <span
                className={classNames(
                  'rdw-ctaimage-modal-header-label',
                  { 'rdw-ctaimage-modal-header-label-highlighted': uploadHighlighted },
                )}
              />
            </span>}
          { urlEnabled &&
            <span
              onClick={this.showImageURLOption}
              className="rdw-ctaimage-modal-header-option"
            >
              {translations['components.controls.ctaImage.byURL']}
              <span
                className={classNames(
                  'rdw-ctaimage-modal-header-label',
                  { 'rdw-ctaimage-modal-header-label-highlighted': !uploadHighlighted },
                )}
              />
            </span>}
        </div>
        {
          uploadHighlighted ?
            <div onClick={this.fileUploadClick}>
              <div
                onDragEnter={this.onDragEnter}
                onDragOver={this.stopPropagation}
                onDrop={this.onImageDrop}
                className={classNames(
                  'rdw-ctaimage-modal-upload-option',
                  { 'rdw-ctaimage-modal-upload-option-highlighted': dragEnter })}
              >
                <label
                  htmlFor="file"
                  className="rdw-ctaimage-modal-upload-option-label"
                >
                  { previewImage && imgSrc
                    ? <img
                      src={imgSrc}
                      alt={imgSrc}
                      className="rdw-ctaimage-modal-upload-option-ctaimage-preview"
                    />
                    : imgSrc || translations['components.controls.ctaImage.dropFileText']}
                </label>
              </div>
              <input
                type="file"
                id="file"
                accept={inputAccept}
                onChange={this.selectImage}
                className="rdw-ctaimage-modal-upload-option-input"
              />
            </div> :
            <div className="rdw-ctaimage-modal-url-section">
              <input
                className="rdw-ctaimage-modal-url-input"
                placeholder={translations['components.controls.ctaImage.enterlink']}
                name="imgSrc"
                onChange={this.updateValue}
                onBlur={this.updateValue}
                value={imgSrc}
                placeholder="https://example.com/img.jpg"
              />
              <span className="rdw-ctaimage-mandatory-sign">*</span>
            </div>
        }
        <div className="rdw-ctaimage-modal-link">
          &#8597;&nbsp;
          <input
            onChange={this.updateValue}
            onBlur={this.updateValue}
            value={linkUrl}
            name="linkUrl"
            className="rdw-ctaimage-modal-link-input"
            placeholder="Link"
          />
          <span className="rdw-ctaimage-mandatory-sign">*</span>
        </div>
        {altConf.present &&
        <div className="rdw-ctaimage-modal-size">
          <span className="rdw-ctaimage-modal-alt-lbl">Alt Text</span>
          <input
            onChange={this.updateValue}
            onBlur={this.updateValue}
            value={alt}
            name="alt"
            className="rdw-ctaimage-modal-alt-input"
            placeholder="alt"
          />
          <span className="rdw-ctaimage-mandatory-sign">{altConf.mandatory && '*'}</span>
        </div>}
        <div className="rdw-ctaimage-modal-size">
          &#8597;&nbsp;
          <input
            onChange={this.updateValue}
            onBlur={this.updateValue}
            value={height}
            name="height"
            className="rdw-ctaimage-modal-size-input"
            placeholder="Height"
          />
          <span className="rdw-ctaimage-mandatory-sign">*</span>
          &nbsp;&#8596;&nbsp;
          <input
            onChange={this.updateValue}
            onBlur={this.updateValue}
            value={width}
            name="width"
            className="rdw-ctaimage-modal-size-input"
            placeholder="Width"
          />
          <span className="rdw-ctaimage-mandatory-sign">*</span>
        </div>
        <span className="rdw-ctaimage-modal-btn-section">
          <button
            className="rdw-ctaimage-modal-btn"
            onClick={this.addImageFromState}
            disabled={!imgSrc || !height || !width || (altConf.mandatory && !alt) || !linkUrl}
          >
            {translations['generic.add']}
          </button>
          <button
            className="rdw-ctaimage-modal-btn"
            onClick={doCollapse}
          >
            {translations['generic.cancel']}
          </button>
        </span>
        {showImageLoading ?
          <div className="rdw-ctaimage-modal-spinner">
            <Spinner />
          </div> :
          undefined}
      </div>
    );
  }

  render(): Object {
    const {
      config: { icon, className, title },
      expanded,
      onExpandEvent,
      translations,
    } = this.props;
    return (
      <div
        className="rdw-ctaimage-wrapper"
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-label="rdw-ctaimage-control"
      >
        <Option
          className={classNames(className)}
          value="unordered-list-item"
          onClick={onExpandEvent}
          title={title || translations['components.controls.ctaImage.image']}
        >
          <img
            src={icon}
            alt=""
          />
        </Option>
        {expanded ? this.renderAddImageModal() : undefined}
      </div>
    );
  }
}

export default LayoutComponent;
