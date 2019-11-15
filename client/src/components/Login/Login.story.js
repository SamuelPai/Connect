import React from 'react';
import { Login } from './Login.component';
import { LoginPropTypes } from './Login.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const LoginStory = () =>

const LoginStory = storiesOf('Components/Login', module);
LoginStory.addDecorator(withKnobs);
LoginStory.add('VideoPlayer', () => {
    const props =
    return (
        <Login />;
    );
});
