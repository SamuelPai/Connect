import React from 'react';
import { Example } from './Example.component';
import { ExamplePropTypes } from './Example.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ExampleStory = () =>

const ExampleStory = storiesOf('Components/Example', module);
ExampleStory.addDecorator(withKnobs);
ExampleStory.add('VideoPlayer', () => {
    const props =
    return (
        <Example />;
    );
});
