import React, { Component } from "react";
import "./UserInfo.css";
import Api from "../../Api";

const api = new Api();

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: "UserInfo",
      following: true,
      firstName: props.firstName,
      handle: props.handle,
      lastName: props.lastName,
      description: props.description,
      user: props,
      activeUser: localStorage.getItem("activeUser")
    }
  }

  alreadyFollowing = (handle) => {
    let following = localStorage.getItem('following');
    if (following !== null) {
      return following.includes(handle);
    }
  }

  followUser = () => {
    console.log("Follow");
    api.followUser(this.state.handle)
      .then(res => {
        let following = localStorage.getItem('following');
        following = following.split(',');
        following.push(this.state.handle);
        localStorage.setItem('following', following);
        this.setState({
          following: true
        })
      })
  }

  unfollowUser = () => {
    console.log("UnFollow");
    api.unfollowUser(this.state.handle)
      .then(req => {
        let following = localStorage.getItem('following');
        following = following.split(',');
        console.log(following);
        let newfollow = following.filter(val => val !== this.state.handle);
        localStorage.setItem('following', newfollow);
        this.setState({
          following: false
        })
      }
      )
  }

  render() {
    let currentUser = this.state.activeUser === this.state.handle;
    let follow = <button className="follow-button" onClick={this.followUser}>Follow</button>;
    let unfollow = <button className="follow-button" onClick={this.unfollowUser}>Unfollow</button>
    let display = this.alreadyFollowing(this.state.handle) ? unfollow : follow;
    let reallyDisplay = currentUser ? <div /> : display;
    return (
      <div className={this.state.classList}>

        <div className="user-info-box">

          <div className="handle-and-name">

            <h3 className="name-of-user">
              {this.state.firstName} {this.state.lastName}
            </h3>

            <h5 className="handle-of-user">@{this.state.handle}</h5>
          </div>

          <p className="description">{this.state.description}</p>

        </div>


        {reallyDisplay}

      </div>
    );
  }
}


export default UserInfo;
