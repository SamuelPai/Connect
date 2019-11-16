import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from '.';
import NavBar from '../../components/NavBar/NavBar.component';
import TheCarosel from '../../components/Landing/TheCarousel/TheCarousel.component'

describe('Landing Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
   <Landing />
   <div><NavBar />
    <TheCarosel />
    </div>
  
  });

  it('should render Landing', () => {
    expect(wrapper).toBeDefined();
  });
});
