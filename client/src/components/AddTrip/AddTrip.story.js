import React from 'react';
import { AddTrip } from './AddTrip.component';
import { AddTripPropTypes } from './AddTrip.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const AddTripStory = () =>

const AddTripStory = storiesOf('Components/AddTrip', module);
AddTripStory.addDecorator(withKnobs);
AddTripStory.add('VideoPlayer', () => {
    const props =
    return (
        <AddTrip />;
    );
});
