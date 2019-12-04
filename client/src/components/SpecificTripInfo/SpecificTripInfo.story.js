import React from 'react';
import { SpecificTripInfo } from './SpecificTripInfo.component';
import { SpecificTripInfoPropTypes } from './SpecificTripInfo.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const SpecificTripInfoStory = () =>

const SpecificTripInfoStory = storiesOf('Components/SpecificTripInfo', module);
SpecificTripInfoStory.addDecorator(withKnobs);
SpecificTripInfoStory.add('VideoPlayer', () => {
    const props =
    return (
        <SpecificTripInfo />;
    );
});
