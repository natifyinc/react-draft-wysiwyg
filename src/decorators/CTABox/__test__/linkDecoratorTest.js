/* @flow */

import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import { convertFromHTML, ContentState } from 'draft-js';
import getCTABoxDecorator from '..';

describe('CTABoxDecorator test suite', () => {
  const CTABoxDecorator = getCTABoxDecorator({ showOpenOptionOnHover: true });
  const contentBlocks = convertFromHTML('<div>test</div>');
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const entityKey = contentState
    .createEntity('CTA_BOX', 'MUTABLE', { title: 'title', url: 'url' })
    .getLastCreatedEntityKey();

  it('should have a div when rendered', () => {
    const CTABox = CTABoxDecorator.component;
    expect(mount(<CTABox entityKey={entityKey} contentState={contentState}>CTABox</CTABox>).childAt(0).type()).to.equal('span');
  });

  it('should have state initialized correctly', () => {
    const CTABox = CTABoxDecorator.component;
    const control = shallow(<CTABox entityKey={entityKey} contentState={contentState}>CTABox</CTABox>);
    assert.isNotTrue(control.state().showPopOver);
  });

  it('should have 1 child element by default', () => {
    const CTABox = CTABoxDecorator.component;
    const control = shallow(<CTABox entityKey={entityKey} contentState={contentState}>CTABox</CTABox>);
    expect(control.children().length).to.equal(1);
  });

  it('should have 2 child element when showPopOver is true', () => {
    const CTABox = CTABoxDecorator.component;
    const control = mount(<CTABox entityKey={entityKey} contentState={contentState}>CTABox</CTABox>);
    control.setState({ showPopOver: true });
    expect(control.childAt(0).children().length).to.equal(2);
  });
});
