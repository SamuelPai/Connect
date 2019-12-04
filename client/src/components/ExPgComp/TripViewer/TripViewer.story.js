import React from 'react';
import { TripViewer } from './TripViewer.component';
import { TripViewerPropTypes } from './TripViewer.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const TripViewerStory = () =>

const TripViewerStory = storiesOf('Components/TripViewer', module);
TripViewerStory.addDecorator(withKnobs);
TripViewerStory.add('VideoPlayer', () => {
    const props =
    return (
        <TripViewer />;
    );
});
