
import React, {Component} from 'react';
import "./TweepStream.css";

class TweepStream extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "TweepStream"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        TweepStream
      </div>
    );
  }
}

export default TweepStream;
