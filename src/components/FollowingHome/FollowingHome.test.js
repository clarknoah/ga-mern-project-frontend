
import React from 'react'
import { shallow } from 'enzyme'

import FollowingHome from './FollowingHome.js'

// We will describe a block of tests
describe('FollowingHome component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    let props = {"history":{"length":50,"action":"PUSH","location":{"pathname":"/user/Annie","state":{"following":[],"_id":"5dd753b405e81d4acec66bb9","firstName":"Ana","lastName":"Martins","handle":"Annie","password":"123","__v":0},"search":"","hash":"","key":"4mvavu"}},"location":{"pathname":"/user/Annie","state":{"following":[],"_id":"5dd753b405e81d4acec66bb9","firstName":"Ana","lastName":"Martins","handle":"Annie","password":"123","__v":0},"search":"","hash":"","key":"4mvavu"},"match":{"path":"/user/:handle","url":"/user/Annie","isExact":true,"params":{"handle":"Annie"}}};
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<FollowingHome {...props}/>)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
