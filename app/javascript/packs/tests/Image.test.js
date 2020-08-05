import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../components/Image';

Enzyme.configure({ adapter: new Adapter() });

describe('Image', () => {
  it('works', () => {
    expect(2 + 2).toEqual(4);
  });
});
