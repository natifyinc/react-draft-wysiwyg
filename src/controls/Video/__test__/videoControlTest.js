/* @flow */

import React from 'react';
import {
  EditorState,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';

import VideoControl from '..';
import defaultToolbar from '../../../config/defaultToolbar';
import ModalHandler from '../../../event-handler/modals';
import localeTranslations from '../../../i18n';

describe('VideoControl test suite', () => {
  const contentBlocks = convertFromHTML('<div>test</div>');
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  it('should have a div when rendered', () => {
    expect(mount(
      <VideoControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.video}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    ).html().startsWith('<div')).to.equal(true);
  });

  it('should have 1 child element by default', () => {
    const control = mount(
      <VideoControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.video}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    );
    expect(control.children().length).to.equal(1);
  });

  it.skip('should set signalExpanded to true when option is clicked', () => {
    const control = mount(
      <VideoControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.video}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    );
    const videoControl = control.find('VideoControl');
    assert.isNotTrue(videoControl.node.signalExpanded);
    control.find('Option').simulate('click');
    assert.isTrue(videoControl.node.signalExpanded);
  });
});
