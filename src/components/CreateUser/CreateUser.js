
import React, {Component} from 'react';
import "./CreateUser.css";
import Input from "../Form/Form.js";
import Api from "../../Api.js";
import { withRouter } from 'react-router-dom';

let api = new Api();

class CreateUser extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "CreateUser",
      firstName:'',
      lastName:'',
      handle:''

    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  updateFirstName = (evt) =>{
    this.setState({
      firstName:evt.target.value
    })
  }

  updateLastName = (evt) =>{
    this.setState({
      lastName:evt.target.value
    })
  }

  updateHandle = (evt) =>{
    this.setState({
      handle:evt.target.value
    })
  }

  submitUser = (evt)=>{
    evt.preventDefault();
    let user = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      handle:this.state.handle,
    };

    api.createUser(user)
      .then(res=>{
        console.log(res);
      })

  }

  

  render(){
    return(
      <div className={this.state.classList}>
        <h1>Create A Profile!</h1>
        <form>
        <label>First Name</label>
        <input
          onChange={this.updateFirstName}
          value={this.state.firstName}
          placeholder="First Name"></input>
        <label>Last Name</label>
          <input
            onChange={this.updateLastName}
            value={this.state.lastName}
            placeholder="First Name"></input>
        <label>Handle</label>
          <input
            onChange={this.updateHandle}
            value={this.state.handle}
            placeholder="Handle"></input>
            <button onClick={this.submitUser}>Submit User</button>
            <button onClick={this.submitUser}>Submit User</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateUser);
