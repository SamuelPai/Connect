import React from 'react';
import { shallow } from 'enzyme';
import { TripSelector } from '.';

describe('TripSelector Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TripSelector />
    );
  });

  it('should render TripSelector', () => {
    expect(wrapper).toBeDefined();
  });
});
