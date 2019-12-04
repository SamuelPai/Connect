import React from 'react';
import { shallow } from 'enzyme';
import { LogOn } from '.';

describe('LogOn Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LogOn />
    );
  });

  it('should render LogOn', () => {
    expect(wrapper).toBeDefined();
  });
});
