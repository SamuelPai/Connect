import React from 'react';
import { shallow } from 'enzyme';
import { Example } from '.';

describe('Example Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Example />
    );
  });

  it('should render Example', () => {
    expect(wrapper).toBeDefined();
  });
});
