import React, { Component } from "react";
import "./CreateTweep.css";
import Api from "../../Api.js";

const api = new Api();

class CreateTweep extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      classList: "CreateTweep",
      newTweep: "",
      user: props.user
    };
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  updateValue = evt => {
    this.setState({
      newTweep: evt.target.value
    });
  };

  submitTweep = evt => {
    console.log("Submitting Tweep");
    let handle = this.state.user.handle;
    let tweep = {
      tweepContent: this.state.newTweep,
      timestamp: new Date(),
      authorHandle: this.state.user.handle
    };
    api.createTweep(handle, tweep).then(res => {
      this.props.tweepCreated();
      console.log("Tweep Created");
      this.setState({
        newTweep: ""
      });
    });
  };

  render() {
    return (
      <div className={this.state.classList}>
        <div className="create-tweep">
          Create a new Tweep!
          <textarea
            rows="5"
            cols="50"
            value={this.state.newTweep}
            onChange={this.updateValue}
          ></textarea>
          <button onClick={this.submitTweep} className="submit-tweep-button">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CreateTweep;
