import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../components/Image';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('Image', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Image
          place={'Mexico'}
          image={'image_url'}
          description={'some cool description'}
        />
      </Wrapper>
    );
  });

  it('works', () => {
    expect(2 + 2).toEqual(4);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Has a div with a background image', () => {
    console.log(wrapper.find('.image-div'));
    expect(wrapper.find('.image-div').prop('style')).toHaveProperty(
      'background',
      'url(image_url) center center no-repeat'
    );
  });

  it('Displays the name', () => {
    expect(wrapper.find('.destination-name').text()).toEqual('Mexico');
  });

  it('Displays the description', () => {
    expect(wrapper.find('.country-description').text()).toEqual(
      'some cool description'
    );
  });
});
