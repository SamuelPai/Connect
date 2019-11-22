import React from 'react';
import { shallow } from 'enzyme';
import { MyTripPage } from '.';

describe('MyTripPage Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MyTripPage />
    );
  });

  it('should render MyTripPage', () => {
    expect(wrapper).toBeDefined();
  });
});
