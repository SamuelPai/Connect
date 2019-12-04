import React from 'react';
import { TripSelector } from './TripSelector.component';
import { TripSelectorPropTypes } from './TripSelector.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const TripSelectorStory = () =>

const TripSelectorStory = storiesOf('Components/TripSelector', module);
TripSelectorStory.addDecorator(withKnobs);
TripSelectorStory.add('VideoPlayer', () => {
    const props =
    return (
        <TripSelector />;
    );
});
