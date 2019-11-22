import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BrowserRouter as Router
} from "react-router-dom"
import FollowingBox from './FollowingBox';

 let following = ["okGuy","hotRod","Squish","juicyPunch"];

storiesOf('FollowingBox', module)
    .add('FollowingBox', () =><Router> <FollowingBox following={following}


    /></Router>)
