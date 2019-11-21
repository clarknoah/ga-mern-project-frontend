
import React, {Component} from 'react';
import "./ReadTweep.css";
import ReadComment from "../ReadComment/ReadComment";
import CreateComment from "../CreateComment/CreateComment";
import Api from "../../Api";
import {withRouter} from "react-router-dom";
let api = new Api();
class ReadTweep extends Component{
  constructor(props){
    super(props);
    let tweep = props.tweep;
    let date = new Date(tweep.timestamp);
    tweep.timestamp = this.formatDate(date);
    let comments = this.sortByDate(tweep.comments);
    let currentUser = localStorage.getItem("activeUser")
    this.state = {
      classList: "ReadTweep",
      tweep:props.tweep,
      user: props.user,
      comments:comments,
      key:props.keys,
      author: currentUser === props.tweep.authorHandle
    };
  }

sortByDate = (arr)=>{
  arr = arr.sort((a,b)=>{
     a = new Date(a.timestamp);
     b = new Date(b.timestamp);
    return b - a;
  })
  return arr;
}

formatDate=(date)=>{
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

  commentCreated=()=>{
    console.log("The Comment was created");
    let handle = this.state.user.handle;
    let tweepId = this.state.tweep._id;
    api.readTweep(handle, tweepId)
      .then(res=>{
        console.log("New Comments", res);
        let comments = this.sortByDate(res.data.comments);
        this.setState({
          comments:comments
        })
      })
  }

  updateTweep=()=>{

  }

  deleteTweep=()=>{

    let handle = this.state.tweep.authorHandle;
    let tweepId = this.state.tweep._id;
    let currentUser = localStorage.getItems("activeUser");


    api.deleteTweep(handle, tweepId)
      .then(res=>{
        console.log(res);
        this.props.delete(tweepId)
      })
  }


  componentDidMount(){}

  componentDidUpdate(){
    console.log("Read Tweep Updated");
  }

  componentWillUnmount(){}

  render(){
    let comments = this.state.comments.map(val=>{
      return <ReadComment key={val._id} data={val}/>
    })
    return(
      <div className={this.state.classList}>
        <div className="tweepHeader">
          <h6>{this.state.user.handle}| {`${this.state.tweep.timestamp} `}</h6>
        </div>
        <p>{this.state.tweep.tweepContent}</p>
        {this.state.author ? <button onClick={this.deleteTweep} >Delete</button> : <div/> }

        {comments}
        <CreateComment
          commentCreated={this.commentCreated}
          user={this.state.user}
          tweep={this.state.tweep} />
      </div>
    );
  }
}

export default withRouter(ReadTweep);
