
import React, {Component} from 'react';
import "./CreateTweep.css";

class CreateTweep extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "CreateTweep"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        CreateTweep
      </div>
    );
  }
}

export default CreateTweep;
