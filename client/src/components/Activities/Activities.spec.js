import React from 'react';
import { shallow } from 'enzyme';
import { Activities } from '.';

describe('Activities Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Activities />
    );
  });

  it('should render Activities', () => {
    expect(wrapper).toBeDefined();
  });
});
