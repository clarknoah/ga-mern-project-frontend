import Api from "../../Api.js";
import React, { Component } from "react";
import "./UserLogin.css";
import { withRouter } from "react-router-dom";
import Utils from "../../utilities.js";

let api = new Api();

class UserLogin extends Component {
  constructor(props) {
    super(props);
    let activeUser = localStorage.getItem("activeUser");
    console.log(activeUser);
    let userLoggedIn = activeUser!== null;
    this.state = {
      classList: "UserLogin",
      handle: "",
      loggedIn: userLoggedIn,
      password: ""
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("Login is Updating");
    this.updateLogin();

  }

  componentWillUnmount() {}

  updateLogin=()=>{
    let user = Utils.getActiveUser();
    if(user&&this.state.loggedIn===false){
      this.setState({
        loggedIn: true
      });
    }
  }


  updateValue = evt => {
    let name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    });
  };

  login = () => {
    api
      .loginUser(this.state.handle, this.state.password)
      .then(res => {
        if (res.data[0] !== undefined) {
          Utils.setActiveUser(res.data[0].handle);
          console.log(res.data[0]);
          this.goToProfile(res.data[0]);
          Utils.setFollowing(res.data[0].following)
          this.setState({
            loggedIn: true
          });
        } else {
          alert("Bad data");
        }
      })
      .catch(err => {
        console.log("Something went wrong");
      });
  };


  unsetFollowing=()=>{
    localStorage.removeItem("following")
  }

  logout = () => {
    localStorage.removeItem('activeUser');
    Utils.unsetFollowing();
    this.setState({
      loggedIn: false
    });
    this.goToRoot();
  };

  goToProfile = props => {
    console.log("Clicked");
    this.props.history.push({
      pathname: `/home`,
      state: { data: props }
    });
  };

  goToRoot = () => {
    console.log("Clicked");
    this.props.history.push({
      pathname: `/`
    });
  };

  render() {
    let activeUser = localStorage.getItem('activeUser');
    let notLoggedIn = (
      <div className="login-info-with-button">
        <div className="login-info">
          <input
            name="handle"
            onChange={this.updateValue}
            value={this.state.handle}
            placeholder="Tweeper Handle"
            className="login-input"
          ></input>
          <input
            name="password"
            type="password"
            onChange={this.updateValue}
            value={this.state.password}
            placeholder="Tweeper Password"
            className="login-input"
          ></input>
        </div>
        <button onClick={this.login} className="login-button">
          Log in
        </button>
      </div>
    );
    let loggedIn = (
      <div className="login-info-with-button">
        <div className="login-info">
          <p className="logged-in-as">Logged In as {activeUser}</p>
        </div>
        <button onClick={this.logout} className="login-button">
          Log out
        </button>
      </div>
    );
    return (
      <div className={this.state.classList}>
        {this.state.loggedIn ? loggedIn : notLoggedIn}
      </div>
    );
  }
}

export default withRouter(UserLogin);
