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
      loggedIn: false,
      password:""
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  updateValue = evt => {
    let name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    });
  };

  login = () => {
    api.loginUser(this.state.handle,this.state.password)
    .then(res => {
      if(res.data[0]!==undefined){
        console.log(res.data[0]);
        this.goToProfile(res.data[0]);
        this.setState({
          loggedIn: true
        });
      }else{
        alert("Bad data");
      }
    })
    .catch(err=>{
      console.log("Something went wrong");
    })
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
        <button onClick={this.login} className="login-button">
          Log in
        </button>
      </div>
    );
    let loggedIn = (
      <div>
        <p>Logged In as {this.state.handle}</p>
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
