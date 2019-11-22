import React, {Component} from 'react';
import "./Home.css";
import CreateUser from "../CreateUser/CreateUser";
import {withRouter} from "react-router-dom";
import Api from "../../Api";
const api = new Api();
class Home extends Component{
  constructor(props){
    super();
    console.log(props);
    let currentUser = localStorage
    this.state = {
      classList: "Home",
      showCreateUser:false

    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  showCreateUser=()=>{
    this.setState({
      showCreateUser:true
    })
  }

  routeToHome=()=>{
    let activeUser = localStorage.getItem('activeUser');
    if(activeUser!==null){
      api.readUser(activeUser)
        .then(res=>{
          console.log(res.data[0]);
          this.props.history.push({
            pathname: `/home`,
            state: {data:res.data[0]}
          })
        })
    }
  }


  render(){
    this.routeToHome();
    return(
      <div className={this.state.classList}>

        {this.state.showCreateUser === false ? (
          <div className="welcome-home">
            <h1>Welcome to Tweeper!</h1>
            <button
              className="big-red-button first-button"
              onClick={this.showCreateUser}
            >
              Create User
            </button>
          </div>
        ) : (
          <div/>
        )}


      </div>
    );
  }
}

export default withRouter(Home);
