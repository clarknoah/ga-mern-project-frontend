
import React, {Component} from 'react';
import "./SearchPage.css";
import {withRouter} from "react-router-dom";
class SearchPage extends Component{
  constructor(props){
    super(props);
    console.log(this.props.location);
    this.state = {
      classList: "SearchPage",
      tweeps: this.props.location.state.data.tweeps,
      users: this.props.location.state.data.users

    };
  }

  componentDidMount(){}

  componentDidUpdate(props){
    console.log(props);
    this.setState({
      tweeps: props.location.state.data.tweeps,
      users: props.location.state.data.users
    })
  }

  componentWillUnmount(){}

  goToUserPage=(evt)=>{
    let name = evt.target.innerText;
    console.log(evt.target.getAttribute("name"));
    let key = evt.target.getAttribute("name");
    console.log(this.state.users[key]);
    this.props.history.push({
      pathname:`/user/${name}`,
      state: this.state.users[key]
    })
  }

  render(){
    let users = this.state.users.map((val,key)=>{
      return <div name={key}
      onClick={this.goToUserPage}
      className={"UserLink"}>
        {val.handle}
      </div>
    })

    return(

      <div className={this.state.classList}>
        <div className={"UserReults"}>
          <h4>Users</h4>
          {users}
        </div>
        <div className={"UserReults"}>
          <h4>Tweeps</h4>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPage);
