import React, { Component } from 'react';
import PropTypes from 'prop-types';
import openCTABox from '../../../images/openCtaBox.svg';
import './styles.css';

function findCTABoxEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'CTA_BOX'
      );
    },
    callback,
  );
}

function getCTABoxComponent(config) {
  const showOpenOptionOnHover = config.showOpenOptionOnHover;
  return class CTABox extends Component {
    static propTypes = {
      entityKey: PropTypes.string.isRequired,
      children: PropTypes.array,
      contentState: PropTypes.object,
    };

    state: Object = {
      showPopOver: false,
    };

    openCTABox: Function = () => {
      const { entityKey, contentState } = this.props;
      const { url } = contentState.getEntity(entityKey).getData();
      const ctaBoxTab = window.open(url, 'blank'); // eslint-disable-line no-undef
      // ctaBoxTab can be null when the window failed to open.
      if (ctaBoxTab) {
        ctaBoxTab.focus();
      }
    };

    render() {
      const { children, entityKey, contentState } = this.props;
      const { ctaTitle, ctaText, ctaButtonText, url, targetOption } = contentState.getEntity(entityKey).getData();
      const { showPopOver } = this.state;
      return (
        <div
          className="rdw-ctabox-decorator-wrapper"
        >
          <h3>{ctaTitle}</h3>
          <p>{ctaText}</p>
          <a href={url} target={targetOption}>{ctaButtonText}</a>
          {showPopOver && showOpenOptionOnHover ?
            <img
              src={openCTABox}
              alt=""
              onClick={this.openCTABox}
              className="rdw-ctabox-decorator-icon"
            />
            : undefined
          }
        </div>
      );
    }
  };
}

export default config => ({
  strategy: findCTABoxEntities,
  component: getCTABoxComponent(config),
});
