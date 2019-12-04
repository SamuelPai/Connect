import React from 'react';
import { shallow } from 'enzyme';
import { SpecificTripInfo } from '.';

describe('SpecificTripInfo Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SpecificTripInfo />
    );
  });

  it('should render SpecificTripInfo', () => {
    expect(wrapper).toBeDefined();
  });
});
