import React from 'react';
import { shallow } from 'enzyme';
import { AddActivity } from '.';

describe('AddActivity Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AddActivity />
    );
  });

  it('should render AddActivity', () => {
    expect(wrapper).toBeDefined();
  });
});
