
import React, {Component} from 'react';
import "./FollowButton.css";
import Api from "../../Api";

let api = new Api();

class FollowButton extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "FollowButton"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        FollowButton
      </div>
    );
  }
}

export default FollowButton;
