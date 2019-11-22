
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

  shouldComponentUpdate(props){
    // let pastUser = this.state.handle;
    // let newUser = props.location.state.handle;
    // console.log(pastUser, newUser);
    // if(pastUser!==newUser){
    //   this.updateUserState(props);
    // }
    return true;
  }

  updateUserState=(props)=>{
    console.log(props);
    let user = props;
    this.props.history.push({
      pathname:"/user/"+user.handle,
      state:props
    })

  }

  componentDidUpdate(props){
    console.log(props.location.state.handle,this.state.handle);
    let notSameUser = props.location.state.handle !== this.state.handle;
    if(notSameUser){
      let user = props.location.state;
      this.setState({
        handle:user.handle,
        userInfo: user,
        tweeps: user.tweeps
      })
    }
  }



  componentWillUnmount(){}

  render(){

    return(
      <div className={this.state.classList}>
      <div id="UserInfoContainer" className={"UserInfoContainer"}>
        <UserInfo {...this.state.userInfo}/>
      </div>
      <div id="FollowingContainer" className={"FollowingContainer"}>
        <FollowingBox updatePage={this.updateUserState} following={this.state.userInfo.following}/>
      </div>
      <div id="TweepStreamContainer" className={"TweepStreamContainer"}>
        <TweepStream user={this.state.userInfo} tweeps={this.state.tweeps}/>
      </div>
      </div>
    );
  }
}

export default FollowingHome;
