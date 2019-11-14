import React from 'react';
import { shallow } from 'enzyme';
import { UserHome } from '.';

describe('UserHome Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <UserHome />
    );
  });

  it('should render UserHome', () => {
    expect(wrapper).toBeDefined();
  });
});
