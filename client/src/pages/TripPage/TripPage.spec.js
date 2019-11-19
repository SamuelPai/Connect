import React from 'react';
import { shallow } from 'enzyme';
import { Trip } from '.';

describe('Trip Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Trip />
    );
  });

  it('should render Trip', () => {
    expect(wrapper).toBeDefined();
  });
});
