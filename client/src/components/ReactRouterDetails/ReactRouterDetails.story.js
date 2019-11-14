import React from 'react';
import { ReactRouterDetails } from './ReactRouterDetails.component';
import { ReactRouterDetailsPropTypes } from './ReactRouterDetails.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ReactRouterDetailsStory = () =>

const ReactRouterDetailsStory = storiesOf('Components/ReactRouterDetails', module);
ReactRouterDetailsStory.addDecorator(withKnobs);
ReactRouterDetailsStory.add('VideoPlayer', () => {
    const props =
    return (
        <ReactRouterDetails />;
    );
});
