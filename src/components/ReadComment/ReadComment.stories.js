import React from 'react';
import { storiesOf } from '@storybook/react';

import ReadComment from './ReadComment';
localStorage.setItem('activeUser', "Frankie")
let obj = {"classList":"ReadTweep","tweep":{"caretTags":null,"userTags":["@okGuy"],"comments":[],"_id":"5dd758ea8516f7711b0c5bf1","tweepContent":"@okGuy , how are you!","timestamp":new Date(),"authorHandle":"okGuy"},"user":{"following":["goodGuy","Annie"],"_id":"5dd737c31ba96e46b586a565","firstName":"Noah","lastName":"Clark","password":"123","handle":"okGuy","description":"I love coding!","__v":0},"comments":[],"author":true};
storiesOf('ReadComment', module)
    .add('ReadComment', () => <ReadComment
    data={obj}
    tweepId={"234532gfdg"}
    key={"asdfasfd"}

    />)
