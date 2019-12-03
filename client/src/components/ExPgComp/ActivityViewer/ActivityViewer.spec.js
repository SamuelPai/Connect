import React from 'react';
import { shallow } from 'enzyme';
import { ActivityViewer } from '.';

describe('ActivityViewer Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ActivityViewer />
    );
  });

  it('should render ActivityViewer', () => {
    expect(wrapper).toBeDefined();
  });
});
