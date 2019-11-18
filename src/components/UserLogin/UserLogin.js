import Api from "../../Api.js";
import React, {Component} from 'react';
import "./UserLogin.css";
import { withRouter } from 'react-router-dom';


let api = new Api();


class UserLogin extends Component{
  constructor(props){
    super(props);
    this.state = {
      classList: "UserLogin",
      handle:''
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  updateHandle = (evt)=>{
    this.setState({
      handle:evt.target.value
    })
  }

  login = () => {
    api.loginUser(this.state.handle)
      .then(res=>{
        console.log(res);
        this.goToProfile(this.state.handle);
      })
  }

  goToProfile = (handle)=>{
    console.log("Clicked");
    this.props.history.push(`/user/${handle}`);
  }

  render(){
    return(
      <div className={this.state.classList}>
        <input onChange={this.updateHandle} value={this.state.handle}
          placeholder="Tweeper Handle"
          ></input>
        <button
          onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default withRouter(UserLogin);
