import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from '../pages/Register';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('Register', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Register />
      </Wrapper>
    );
  });

  it('works', () => {
    expect(2 + 2).toEqual(4);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Has a non empty form', () => {
    expect(wrapper.find('form').children()).not.toBeNull();
  });

  it('Asks for the name', () => {
    expect(wrapper.find('input').at(0).prop('placeholder')).toEqual(
      'Enter your name'
    );
  });

  it('Asks for the email', () => {
    expect(wrapper.find('input').at(1).prop('placeholder')).toEqual(
      'Enter your email'
    );
  });

  it('Asks for the password', () => {
    expect(wrapper.find('input').at(2).prop('placeholder')).toEqual(
      'Enter your password'
    );
  });

  it('Asks for the password confirmation', () => {
    expect(wrapper.find('input').at(2).prop('placeholder')).toEqual(
      'Confirm your Password'
    );
  });
});
