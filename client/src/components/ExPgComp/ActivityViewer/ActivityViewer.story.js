import React from 'react';
import { ActivityViewer } from './ActivityViewer.component';
import { ActivityViewerPropTypes } from './ActivityViewer.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ActivityViewerStory = () =>

const ActivityViewerStory = storiesOf('Components/ActivityViewer', module);
ActivityViewerStory.addDecorator(withKnobs);
ActivityViewerStory.add('VideoPlayer', () => {
    const props =
    return (
        <ActivityViewer />;
    );
});
