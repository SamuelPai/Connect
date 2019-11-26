import React from 'react';
import { ExampleForm } from './ExampleForm.component';
import { ExampleFormPropTypes } from './ExampleForm.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ExampleFormStory = () =>

const ExampleFormStory = storiesOf('Components/ExampleForm', module);
ExampleFormStory.addDecorator(withKnobs);
ExampleFormStory.add('VideoPlayer', () => {
    const props =
    return (
        <ExampleForm />;
    );
});
