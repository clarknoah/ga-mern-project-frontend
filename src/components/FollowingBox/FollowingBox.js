
import React, { Component } from 'react';
import "./FollowingBox.css";
import { withRouter } from "react-router-dom";
import Api from "../../Api.js";

let api = new Api();


class FollowingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: `FollowingBox`,
      following: props.following
    }
  }
  goToUser = (evt) => {
    let handle = evt.target.getAttribute('handle');
    api.readUser(handle)
      .then(result => {
        let data = result.data[0];
        console.log(this.props);
        let path = this.props.location.pathname;
        console.log(path);
        if (path.includes('user')) {
          this.props.updatePage(result.data[0]);
        } else {
          this.props.history.push({
            pathname: "/user/" + handle,
            state: result.data[0]
          })
        }

      })
  }

  render() {
    let following = this.state.following.map(val => {
      return <div key={val} onClick={this.goToUser} handle={val}
        className={"FollowingUser"}>@{val}</div>
    })
    return (
      <div className={this.state.classList}>
        <h4 className="following-heading">Following:</h4>
        {following}
      </div>
    );
  }
}


export default withRouter(FollowingBox);
