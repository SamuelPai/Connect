import React from 'react';
import { shallow } from 'enzyme';
import { Exp } from '.';

describe('Exp Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Exp />
    );
  });

  it('should render Exp', () => {
    expect(wrapper).toBeDefined();
  });
});
