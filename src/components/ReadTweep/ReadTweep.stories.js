import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BrowserRouter as Router
} from "react-router-dom"
import ReadTweep from './ReadTweep';

let data = {"classList":"ReadTweep",
"tweep":{"caretTags":["^ok","^who","^knows"],
"comments":[],"_id":"5dd7397f52616e4889494811",
"tweepContent":"^ok ^who ^knows","timestamp":new Date().toString(),"authorHandle":"okGuy"},
"user":{"following":["goodGuy"],"_id":"5dd737c31ba96e46b586a565","firstName":"Noah","lastName":"Clark","password":"123","handle":"okGuy","description":"I love coding!","__v":0},"comments":[],"author":true};

storiesOf('ReadTweep', module)
    .add('ReadTweep', () =><Router> <ReadTweep user={data.user} tweep={data.tweep}/></Router>)
