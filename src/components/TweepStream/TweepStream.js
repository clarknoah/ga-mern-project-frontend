import React, { Component } from "react";
import "./TweepStream.css";
import CreateTweep from "../CreateTweep/CreateTweep";
import ReadTweep from "../ReadTweep/ReadTweep";
import Api from "../../Api";
import {withRouter} from "react-router-dom";
let api = new Api();


class TweepStream extends Component{
  constructor(props){
    super(props);
    let tweeps = this.sortByDate(props.tweeps);

    console.log(window.location.href.toString().match("user"));
    this.state = {
      classList: "TweepStream",
      tweeps: tweeps,
      user: props.user,
      create:true
    };
  }


  componentDidMount() {
    if(window.location.href.toString().match("user")){
      console.log("contains it");
      this.setState({
        create:false
      })
    }
  }
  sortByDate = (arr)=>{
    arr = arr.sort((a,b)=>{
       a = new Date(a.timestamp);
       b = new Date(b.timestamp);
      return b - a;
    })
    return arr;
  }

  tweepCreated=()=>{
    console.log("The Tweep was created");
    let handle = this.state.user.handle;
    api.readTweeps(handle)
      .then(res=>{
        console.log(res);
        let tweeps = this.sortByDate(res.data);
        this.setState({
          tweeps:tweeps
        })
      })
  }

  tweepDeleted=(tweepId)=>{
    console.log("tweepDeleted");
    let tweeps = this.state.tweeps.filter((tweep)=>{
      return tweep._id!==tweepId;
    })
    console.log(tweeps);
    this.setState({
      tweeps:tweeps
    })
  }

  componentDidUpdate() {}

  componentWillUnmount() {}


  render(){
    console.log("Rendering Tweep STream");
    let tweeps =  this.state.tweeps.map((val)=>{
      return <ReadTweep delete={this.tweepDeleted} key={val._id} user={this.state.user} tweep={val} />
    });
    let create = this.state.create ? <CreateTweep create={this.state.create} user={this.state.user} tweepCreated={this.tweepCreated}/> : <div></div>;
    return (
      <div className={this.state.classList}>
        <div className={"createTweepContainer"}>
         {create}
        </div>

        <div className={"readTweepsContainer"}>{tweeps}</div>
      </div>
    );
  }
}

export default TweepStream;
