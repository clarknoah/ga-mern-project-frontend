
import React, {Component} from 'react';
import "./TweepStream.css";
import CreateTweep from "../CreateTweep/CreateTweep";
import ReadTweep from "../ReadTweep/ReadTweep";




class TweepStream extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "TweepStream",
      tweeps: props.tweeps,
      user: props.user
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    let tweeps =  this.state.tweeps.map(val=>{
      return <ReadTweep key={val._id} user={this.state.user} tweep={val}/>
    });
    return(
      <div className={this.state.classList}>
        <div className={"createTweepContainer"}>
          <CreateTweep/>
        </div>

        <div className={"readTweepsContainer"}>
          {tweeps}
        </div>
      </div>
    );
  }
}

export default TweepStream;
