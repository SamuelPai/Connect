import React from 'react';
import { shallow } from 'enzyme';
import { CreateActivity } from '.';

describe('CreateActivity Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CreateActivity />
    );
  });

  it('should render CreateActivity', () => {
    expect(wrapper).toBeDefined();
  });
});
