import React, { Component } from "react";
import "./ProfileHome.css";
import Api from "../../Api";
import UserInfo from "../UserInfo/UserInfo.js";
import TweepStream from "../TweepStream/TweepStream";
import FollowingBox from "../FollowingBox/FollowingBox";
import {withRouter} from "react-router-dom";
let api = new Api();

class ProfileHome extends Component {
  constructor(props) {
    super(props);
    
    let user = props.location.state.data;
    let tweeps = user.tweeps;
    delete user.tweeps;

    console.log(user);
    this.state = {
      classList: "ProfileHome",
      handle: user.handle,
      userInfo: user,
      tweeps: tweeps
    };
  }

  componentDidMount() {
    console.log("ProfileHome Mounted");
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={this.state.classList}>
        <div className="profile-left-side">
          {/* <div className="profile-picture"></div> */}
          <div id="UserInfoContainer" className={"UserInfoContainer"}>
            <UserInfo {...this.state.userInfo} />
          </div>
          <div id="FollowingContainer" className={"FollowingContainer"}>
            <FollowingBox following={this.state.userInfo.following} />
          </div>
        </div>
        <div id="TweepStreamContainer" className={"TweepStreamContainer"}>
          <TweepStream user={this.state.userInfo} tweeps={this.state.tweeps} />
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileHome);
