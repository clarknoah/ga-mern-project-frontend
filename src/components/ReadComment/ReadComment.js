
import React, {Component} from 'react';
import "./ReadComment.css";

class ReadComment extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "ReadComment"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        ReadComment
      </div>
    );
  }
}

export default ReadComment;
