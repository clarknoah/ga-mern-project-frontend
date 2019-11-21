import React, { Component } from "react";
import "./ReadTweep.css";
import ReadComment from "../ReadComment/ReadComment";
import CreateComment from "../CreateComment/CreateComment";
import Api from "../../Api";
import {withRouter} from "react-router-dom";
let api = new Api();
<<<<<<< HEAD
class ReadTweep extends Component{
  constructor(props){
    super(props);
=======
class ReadTweep extends Component {
  constructor(props) {
    super();
>>>>>>> c25f7a8a18c1bb0c74883b5ecf041232c835432b
    let tweep = props.tweep;
    let date = new Date(tweep.timestamp);
    tweep.timestamp = this.formatDate(date);
    let comments = this.sortByDate(tweep.comments);
    let currentUser = localStorage.getItem("activeUser")
    this.state = {
      classList: "ReadTweep",
      tweep: props.tweep,
      user: props.user,
      comments:comments,
      author: currentUser === props.tweep.authorHandle
    };
  }

  sortByDate = arr => {
    arr = arr.sort((a, b) => {
      a = new Date(a.timestamp);
      b = new Date(b.timestamp);
      return b - a;
    });
    return arr;
  };

  formatDate = date => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  };

  commentCreated = () => {
    console.log("The Comment was created");
    let handle = this.state.user.handle;
    let tweepId = this.state.tweep._id;
<<<<<<< HEAD
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
=======
    api.readTweep(handle, tweepId).then(res => {
      console.log("New Comments", res);
      let comments = this.sortByDate(res.data.comments);
      this.setState({
        comments: comments
      });
    });
  };
>>>>>>> c25f7a8a18c1bb0c74883b5ecf041232c835432b

  updateTweep = () => {};

  componentDidMount() {}

  componentDidUpdate() {
    console.log("Read Tweep Updated");
  }

  componentWillUnmount() {}

  render() {
    let comments = this.state.comments.map(val => {
      return <ReadComment key={val._id} data={val} />;
    });
    return (
      <div className={this.state.classList}>
        <div className="tweepHeader">
          <h6 className="handle-info">
            {this.state.user.handle}| {`${this.state.tweep.timestamp} `}
          </h6>
        </div>
<<<<<<< HEAD
        <p>{this.state.tweep.tweepContent}</p>
        {this.state.author ? <button onClick={this.deleteTweep} >Delete</button> : <div/> }

=======
        <p className="tweep-content">{this.state.tweep.tweepContent}</p>
>>>>>>> c25f7a8a18c1bb0c74883b5ecf041232c835432b
        {comments}
        <CreateComment
          commentCreated={this.commentCreated}
          user={this.state.user}
          tweep={this.state.tweep}
        />
      </div>
    );
  }
}

export default withRouter(ReadTweep);
