import React from 'react';
import { storiesOf } from '@storybook/react';
import UserInfo from "./UserInfo";

let obj = {"following":[],"_id":"5dd737c31ba96e46b586a56c","firstName":"Jenna","lastName":"Dean","handle":"goodGuy","password":"123","description":"I'm the incarnation of happiness and joy","__v":0}

storiesOf('UserInfo', module)
    .add('UserInfo', () => {
      return <UserInfo {...obj}/>
    })
