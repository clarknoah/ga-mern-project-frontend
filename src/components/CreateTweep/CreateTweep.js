
import React, {Component} from 'react';
import "./CreateTweep.css";
import Api from "../../Api.js";

const api = new Api ();

class CreateTweep extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "CreateTweep",
      newTweep:""
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  updateValue=(evt)=>{
    this.setState({
      newTweep: evt.target.value
    })
  }

  submitTweep=(evt)=>{
    console.log("Submitting Tweep");
    this.setState({
      newTweep:""
    })
  }



  render(){
    return(
      <div className={this.state.classList}>
        Create a new Tweep!
        <textarea
        value={this.state.newTweep}
        onChange={this.updateValue}
        ></textarea>
        <button onClick={this.submitTweep}>Submit</button>
      </div>
    );
  }
}

export default CreateTweep;
