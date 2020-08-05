import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../pages/Login';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Login />
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

  it('Asks for the email', () => {
    expect(wrapper.find('input').at(0).prop('placeholder')).toEqual(
      'Enter your email'
    );
  });

  it('Asks for the passwordL', () => {
    expect(wrapper.find('input').at(1).prop('placeholder')).toEqual(
      'Enter your password'
    );
  });
});
