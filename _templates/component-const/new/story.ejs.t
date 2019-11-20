---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= name %> from './<%= name %>';


storiesOf('<%= name %>', module)
    .add('<%= name %>', () => <<%= name %>


    />)
