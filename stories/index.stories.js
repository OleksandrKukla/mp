import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import Button from '../src/components/Button';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
  .add('with text', withInfo('Default view')(() => (
            <Button title="With text"/>
  )))
  .add('Outline', withInfo('Default view')(() => (
        <Button title="Outline button" type="outline"/>
  )))
  .add('Secondary', withInfo('Default view')(() => (
        <Button title="Outline button" type="secondary"/>
  )))
  .add('Small', withInfo('Default view')(() => (
        <Button title="Outline button" size="small"/>
  )))
  .add('click action', withInfo('Default view')(() => (
        <Button title="Click action" onClick={action('clicked')}/>
  )));
