
import React, {Component} from 'react';
import "./UpdateComment.css";

class UpdateComment extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "UpdateComment"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        UpdateComment
      </div>
    );
  }
}

export default UpdateComment;
