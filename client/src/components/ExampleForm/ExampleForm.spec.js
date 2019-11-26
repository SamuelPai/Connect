import React from 'react';
import { shallow } from 'enzyme';
import { ExampleForm } from '.';

describe('ExampleForm Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ExampleForm />
    );
  });

  it('should render ExampleForm', () => {
    expect(wrapper).toBeDefined();
  });
});
