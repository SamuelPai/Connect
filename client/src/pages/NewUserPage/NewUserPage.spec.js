import React from 'react';
import { shallow } from 'enzyme';
import { NewUser } from '.';

describe('NewUser Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NewUser />
    );
  });

  it('should render NewUser', () => {
    expect(wrapper).toBeDefined();
  });
});
