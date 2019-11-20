import React, { Component } from "react";
import "./TweepStream.css";
import CreateTweep from "../CreateTweep/CreateTweep";
import ReadTweep from "../ReadTweep/ReadTweep";
import Api from "../../Api";
let api = new Api();



class TweepStream extends Component{
  constructor(props){
    super(props);
    let tweeps = this.sortByDate(props.tweeps);
    console.log(tweeps);
    this.state = {
      classList: "TweepStream",
      tweeps: tweeps,
      user: props.user
    };
  }


  componentDidMount() {}
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

  componentDidUpdate() {}

  componentWillUnmount() {}


  render(){
    let tweeps =  this.state.tweeps.map(val=>{
      return <ReadTweep key={val._id} user={this.state.user} tweep={val} />
    });
    return (
      <div className={this.state.classList}>
        <div className={"createTweepContainer"}>
          <CreateTweep user={this.state.user} tweepCreated={this.tweepCreated}/>
        </div>

        <div className={"readTweepsContainer"}>{tweeps}</div>
      </div>
    );
  }
}

export default TweepStream;
