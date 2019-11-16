import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '.';

describe('Login Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Login />
    );
  });

  it('should render Login', () => {
    expect(wrapper).toBeDefined();
  });
});
