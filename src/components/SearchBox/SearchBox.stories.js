import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from './SearchBox';

import {
  BrowserRouter as Router
} from "react-router-dom"

storiesOf('SearchBox', module)
    .add('SearchBox', () => <Router><SearchBox


    /></Router>)
