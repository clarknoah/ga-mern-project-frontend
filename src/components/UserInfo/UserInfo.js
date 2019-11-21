import React, {Component} from "react";
import "./UserInfo.css";
import Api from "../../Api";

const api = new Api();

class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      classList: "UserInfo",
      following: true,
      firstName: props.firstName,
      handle: props.handle,
      lastName: props.lastName,
      description: props.description
    }
  }

  followUser=()=>{
    this.setState({
      following: true
    })
  }

  unFollowUser=()=>{
    this.setState({
      following: false
    })
  }

  render(){
    let follow = <button onClick={this.followUser}>Follow</button>;
    let unfollow  = <button onClick={this.unfollowUser}>Unfollow</button>
    let display = this.state.following ? unfollow : follow;
    return (
      <div className={this.state.classList}>

        {display}

        <h3>
          {this.state.firstName} {this.state.lastName}
        </h3>

        <h5>@{this.state.handle}</h5>

        <p>{this.state.description}</p>

      </div>
    );
}
}


export default UserInfo;
