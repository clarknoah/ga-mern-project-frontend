import React, { Component } from "react";
import "./CreateUser.css";
import Input from "../Form/Form.js";
import Api from "../../Api.js";
import { withRouter } from "react-router-dom";
import Utils from "../../utilities.js";
let api = new Api();

class CreateUser extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      classList: "CreateUser",
      firstName: "",
      lastName: "",
      handle: "",
      password: ""
    };
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  updateValue = evt => {
    let name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    });
  };

  submitUser = evt => {
    evt.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      handle: this.state.handle,
      password: this.state.password
    };

    api.createUser(user).then(res => {
      console.log(res.data);
      Utils.setActiveUser(res.data.handle);
      Utils.setFollowing(res.data.following);
      this.props.history.push({
        pathname: `/home`,
        state: { data: res.data }
      })
    });
  };

  render() {
    return (
      <div className={this.state.classList}>
        <h1 className="create-profile-header">Create A Profile!</h1>
        <hr></hr>
        <form className={"UserForm"}>
          <div className="full-name">
            <label>
              {/* First Name */}
              <input
                name="firstName"
                onChange={this.updateValue}
                value={this.state.firstName}
                placeholder="First Name"
                className="input"
              ></input>
            </label>
            <label>
              {/* Last Name */}
              <input
                name="lastName"
                onChange={this.updateValue}
                value={this.state.lastName}
                placeholder="Last Name"
                className="input"
              ></input>
            </label>
          </div>
          <label>
            {/* Handle */}
            <input
              name="handle"
              onChange={this.updateValue}
              value={this.state.handle}
              placeholder="Handle"
              placeholder="Handle"
              className="input"
            ></input>
          </label>
          <label>
            {/* Password */}
            <input
              name="password"
              type="password"
              onChange={this.updateValue}
              value={this.state.password}
              placeholder="Password"
              className="input"
            ></input>
          </label>
          <button onClick={this.submitUser} className="submit-user-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateUser);
