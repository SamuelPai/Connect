import React from 'react';
import { Activities } from './Activities.component';
import { ActivitiesPropTypes } from './Activities.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ActivitiesStory = () =>

const ActivitiesStory = storiesOf('Components/Activities', module);
ActivitiesStory.addDecorator(withKnobs);
ActivitiesStory.add('VideoPlayer', () => {
    const props =
    return (
        <Activities />;
    );
});
