
import React, {Component} from 'react';
import "./ReadComment.css";

class ReadComment extends Component{
  constructor(props){
    super(props);
    let comment = props.data;
    comment.timestamp = this.formatDate(new Date(comment.timestamp));
    this.state = {
      classList: "ReadComment",
      comment: comment
    };
  }
  formatDate=(date)=>{
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        <div><h6>{this.state.comment.authorId}| {`${this.state.comment.timestamp} `}</h6></div>
        {this.state.comment.commentContent}
      </div>
    );
  }
}

export default ReadComment;
