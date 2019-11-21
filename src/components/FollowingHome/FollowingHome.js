
import React, {Component} from 'react';
import "./FollowingHome.css";
import Api from '../../Api';
import UserInfo from '../UserInfo/UserInfo.js';
import TweepStream from '../TweepStream/TweepStream';
import FollowingBox from '../FollowingBox/FollowingBox';

let api = new Api();


class FollowingHome extends Component{
  constructor(props){
    super(props);
    console.log(props);
    let user = props.location.state;
    let tweeps = user.tweeps;
    delete user.tweeps;

    console.log(user);
    this.state = {
      classList: "FollowingHome",
      handle:user.handle,
      userInfo:user,
      tweeps: tweeps
    };
  }

  componentDidMount(){
    console.log("FollowingHome Mounted");

  }

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
      <div id="UserInfoContainer" className={"UserInfoContainer"}>
        <UserInfo {...this.state.userInfo}/>
      </div>
      <div id="FollowingContainer" className={"FollowingContainer"}>
        <FollowingBox following={this.state.userInfo.following}/>
      </div>
      <div id="TweepStreamContainer" className={"TweepStreamContainer"}>
        <TweepStream user={this.state.userInfo} tweeps={this.state.tweeps}/>
      </div>
      </div>
    );
  }
}

export default FollowingHome;
