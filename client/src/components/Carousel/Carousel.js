import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';



const items = [
  {
    src: '/images/join.jpg' ,
    altText: 'Events to Plan',
    caption: 'Events to plan',
    header: 'Events ',
    key: '1' 
    
  },
  {
    src:'/images/explore.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: '/images/connect.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;




export default Example;