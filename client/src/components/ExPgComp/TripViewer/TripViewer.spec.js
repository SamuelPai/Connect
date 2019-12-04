import React from 'react';
import { shallow } from 'enzyme';
import { TripViewer } from '.';

describe('TripViewer Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TripViewer />
    );
  });

  it('should render TripViewer', () => {
    expect(wrapper).toBeDefined();
  });
});
