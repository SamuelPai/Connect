import React from 'react';
import { shallow } from 'enzyme';
import { ReactRouterDetails } from '.';

describe('ReactRouterDetails Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ReactRouterDetails />
    );
  });

  it('should render ReactRouterDetails', () => {
    expect(wrapper).toBeDefined();
  });
});
