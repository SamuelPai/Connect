import React from 'react';
import { shallow } from 'enzyme';
import { Calendar } from '.';

describe('Calendar Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Calendar />
    );
  });

  it('should render Calendar', () => {
    expect(wrapper).toBeDefined();
  });
});
