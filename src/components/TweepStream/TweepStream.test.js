
import React from 'react'
import { shallow } from 'enzyme'

import TweepStream from './TweepStream.js'


// We will describe a block of tests
describe('TweepStream component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    let userInfo = {"following":[],"_id":"5dd753b405e81d4acec66bb9","firstName":"Ana","lastName":"Martins","handle":"Annie","password":"123","__v":0}
    let tweeps = [{"caretTags":["^butts"],"userTags":[],"comments":[{"_id":"5dd7da706473487a19f2282b","commentContent":"ojoj","timestamp":"22 November 2019","authorHandle":"okGuy"},{"_id":"5dd7da6d6473487a19f2282a","commentContent":"wow","timestamp":"22 November 2019","authorHandle":"okGuy"},{"_id":"5dd7542305e81d4acec66bbd","commentContent":"Are you single and free? Lets meet up some time, Can I DM you? ^lust","timestamp":"21 November 2019","authorHandle":"okGuy"},{"_id":"5dd7540b05e81d4acec66bbc","commentContent":"Hey Annie, I love your Tweeps! I love ^tweeper ^tweeperLove","timestamp":"21 November 2019","authorHandle":"okGuy"},{"_id":"5dd753c805e81d4acec66bbb","commentContent":"hehe, my first comment!","timestamp":"21 November 2019","authorHandle":null}],"_id":"5dd753c005e81d4acec66bba","tweepContent":"I like big ^butts","timestamp":"21 November 2019","authorHandle":"Annie"}];
    const component = shallow(<TweepStream user={userInfo} tweeps={tweeps}/>)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
