/* @flow */

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import {
  EditorState,
  convertFromHTML,
  ContentState,
} from 'draft-js';

import CTABoxControl from '..';
import Option from '../../../components/Option';
import defaultToolbar from '../../../config/defaultToolbar';
import ModalHandler from '../../../event-handler/modals';
import localeTranslations from '../../../i18n';

describe('CTABoxControl test suite', () => {
  const contentBlocks = convertFromHTML('<div>test</div>');
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  it('should have a div when rendered', () => {
    expect(mount(
      <CTABoxControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.ctaBox}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    ).html().startsWith('<div')).to.equal(true);
  });

  it('should have 2 child elements by default', () => {
    const control = mount(
      <CTABoxControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.ctaBox}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    );
    expect(control.find(Option).length).to.equal(2);
  });

  it('should have no value for state variable ctaBox default', () => {
    const control = mount(
      <CTABoxControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.ctaBox}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    );
    const state = control.state();
    assert.isNotTrue(state.expanded);
    assert.equal(state.link, undefined);
  });

  it('should convert links starting with www to start with http://', () => {
    const onChange = spy();
    const control = mount(
      <CTABoxControl
        config={defaultToolbar.ctaBox}
        onChange={onChange}
        editorState={editorState}
        translations={localeTranslations.en}
        modalHandler={new ModalHandler()}
      />,
    );
    control.setState({ expanded: true });
    const buttons = control.find('.rdw-option-wrapper');
    buttons.first().simulate('click');
    const inputs = control.find('.rdw-ctabox-modal-input');
    inputs.last().simulate('change', { target: { name: 'buttonText', value: 'the google' } });
    inputs.first().simulate('change', { target: { name: 'boxText', value: 'is evil' } });
    const addButton = control.find('.rdw-ctabox-modal-btn').first();
    addButton.simulate('click');
    const lastCall = contentState.getLastCreatedEntityKey();
    assert.equal(contentState.getEntity(lastCall).getData().url, 'http://www.google.com');
  });
});
