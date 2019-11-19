
import React from 'react'
import { shallow } from 'enzyme'

import CreateComment from './CreateComment.js'

// We will describe a block of tests
describe('CreateComment component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<CreateComment />)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
