import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from '.';

describe('Landing Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Landing />
    );
  });

  it('should render Landing', () => {
    expect(wrapper).toBeDefined();
  });
});
