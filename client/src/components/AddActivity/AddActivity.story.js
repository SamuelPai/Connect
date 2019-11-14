import React from 'react';
import { AddActivity } from './AddActivity.component';
import { AddActivityPropTypes } from './AddActivity.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const AddActivityStory = () =>

const AddActivityStory = storiesOf('Components/AddActivity', module);
AddActivityStory.addDecorator(withKnobs);
AddActivityStory.add('VideoPlayer', () => {
    const props =
    return (
        <AddActivity />;
    );
});
