import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddForm from '../components/AddForm';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('AddForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <AddForm form={null} />
      </Wrapper>
    );
  });

  it('works', () => {
    expect(2 + 2).toEqual(4);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Has an empty form', () => {
    expect(wrapper.find('form').children()).toHaveLength(0);
  });
});

describe('AddForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <AddForm form={'country'} />
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

  it('Asks for the country name', () => {
    expect(wrapper.find('input').first().prop('placeholder')).toEqual(
      'Please provide the name of the Country'
    );
  });

  it('Asks for the city name', () => {
    expect(wrapper.find('input').at(1).prop('placeholder')).toEqual(
      'Enter the city name'
    );
  });

  it('Asks for the city URL', () => {
    expect(wrapper.find('input').at(2).prop('placeholder')).toEqual(
      'Enter the URL for an image of this city'
    );
  });
});
