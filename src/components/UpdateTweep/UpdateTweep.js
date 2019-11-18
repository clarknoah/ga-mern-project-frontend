
import React, {Component} from 'react';
import "./UpdateTweep.css";

class UpdateTweep extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "UpdateTweep"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        UpdateTweep
      </div>
    );
  }
}

export default UpdateTweep;
