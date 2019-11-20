import Api from "../../Api.js";
import React, { Component } from "react";
import "./UserLogin.css";
import { withRouter } from "react-router-dom";

let api = new Api();

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: "UserLogin",
      handle: "",
      loggedIn: false
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  updateHandle = evt => {
    this.setState({
      handle: evt.target.value
    });
  };

  login = () => {
    api.loginUser(this.state.handle).then(res => {
      console.log(res.data[0]);
      this.goToProfile(res.data[0]);
      this.setState({
        loggedIn: true
      });
    });
  };

  logout = () => {
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
    let notLoggedIn = (
      <div>
        <input
          onChange={this.updateHandle}
          value={this.state.handle}
          placeholder="Tweeper Handle"
          className="login-input"
        ></input>
        <button onClick={this.login} className="login-button">
          Log in
        </button>
      </div>
    );
    let loggedIn = (
      <div>
        <p className="logged-in-as">Logged In as {this.state.handle}</p>
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
