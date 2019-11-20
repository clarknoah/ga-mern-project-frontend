
import React, {Component} from 'react';
import "./CreateComment.css";
import Api from "../../Api.js";

const api = new Api ();

class CreateComment extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "CreateComment",
      newComment:""
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
    console.log("Submitting Comment");
  }



  render(){
    return(
      <div className={this.state.classList}>
        Add Comment
        <textarea
        value={this.state.newComment}
        onChange={this.updateValue}
        ></textarea>
        <button onClick={this.submitComment}>Submit</button>
      </div>
    );
  }
}

export default CreateComment;
