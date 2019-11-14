import React from 'react';
import { shallow } from 'enzyme';
import { AddTrip } from '.';

describe('AddTrip Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AddTrip />
    );
  });

  it('should render AddTrip', () => {
    expect(wrapper).toBeDefined();
  });
});
