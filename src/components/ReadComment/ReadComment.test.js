
import React from 'react'
import { shallow } from 'enzyme'

import ReadComment from './ReadComment.js'

// We will describe a block of tests
describe('ReadComment component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    let tweepId = `5dd753c005e81d4acec66bba`;
    let key = `5dd7da706473487a19f2282b`;
    let data = {"_id":"5dd7da706473487a19f2282b","commentContent":"ojoj","timestamp":"22 November 2019","authorHandle":"okGuy"};

    const component = shallow(<ReadComment
      tweepId={tweepId}
      key={key}
      data={data}
      />)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
