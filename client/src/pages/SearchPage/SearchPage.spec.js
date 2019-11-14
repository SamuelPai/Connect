import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '.';

describe('Search Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Search />
    );
  });

  it('should render Search', () => {
    expect(wrapper).toBeDefined();
  });
});
