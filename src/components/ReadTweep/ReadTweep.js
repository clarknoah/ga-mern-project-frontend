
import React, {Component} from 'react';
import "./ReadTweep.css";

class ReadTweep extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "ReadTweep"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        ReadTweep
      </div>
    );
  }
}

export default ReadTweep;
