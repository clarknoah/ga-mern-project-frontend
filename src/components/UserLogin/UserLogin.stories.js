import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BrowserRouter as Router
} from "react-router-dom"
import UserLogin from './UserLogin';


storiesOf('UserLogin', module)
    .add('UserLogin', () => <Router><UserLogin


    /></Router>)
