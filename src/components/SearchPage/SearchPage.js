
import React, {Component} from 'react';
import "./SearchPage.css";
import {withRouter} from "react-router-dom";
class SearchPage extends Component{
  constructor(props){
    super(props);
    console.log(this.props.location.state.data);
    let caretTags = this.props.location.state.data.caretTags;
    let userTags = this.props.location.state.data.userTags;
    this.state = {
      classList: "SearchPage",
      tweeps: this.props.location.state.data.tweeps,
      users: this.props.location.state.data.users,
      caretTags:this.parseTags(caretTags),
      userTags: this.parseTags(userTags)
    };
    console.log(this.state.caretTags);
  }

  componentDidMount(){}



  parseTags=(tags)=>{
    let newTags = tags.map(val=>{
      let tag = val.tweeps;
      return tag;
    })
    return newTags;
  }


  componentDidUpdate(props){
    console.log(props);
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

    let caretTags = this.state.caretTags.map((val,key)=>{
      return (
        <div className={"CaretResult"}>
          <div className={"UserLink"} name={val.authorHandle} onClick={this.goToUserPage}>{val.authorHandle}</div>
          <div> | </div>
          <div>{val.tweepContent}</div>
       </div>)
    })
    let userTags = this.state.userTags.map((val,key)=>{
      return (
        <div className={"CaretResult"}>
          <div className={"UserLink"} name={val.authorHandle} onClick={this.goToUserPage}>{val.authorHandle}</div>
          <div>|</div>
          <div>{val.tweepContent}</div>
       </div>)
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
        <div className={"CaretReults"}>
          <h4>CaretTags</h4>
          {caretTags}
        </div>
        <div className={"CaretReults"}>
          <h4>userTags</h4>
          {userTags}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPage);
