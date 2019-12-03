import React from 'react';
import { LogOn } from './LogOn.component';
import { LogOnPropTypes } from './LogOn.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const LogOnStory = () =>

const LogOnStory = storiesOf('Components/LogOn', module);
LogOnStory.addDecorator(withKnobs);
LogOnStory.add('VideoPlayer', () => {
    const props =
    return (
        <LogOn />;
    );
});
