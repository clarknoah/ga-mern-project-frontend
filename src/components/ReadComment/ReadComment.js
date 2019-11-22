
import React, { Component } from 'react';
import "./ReadComment.css";
import Api from "../../Api";

const api = new Api();

class ReadComment extends Component {
  constructor(props) {
    super(props);
    let comment = props.data;
    let currentUser = localStorage.getItem('activeUser');
    comment.timestamp = this.formatDate(new Date(comment.timestamp));
    this.state = {
      classList: "ReadComment",
      comment: comment,
      currentUser: currentUser,
      author: comment.authorHandle === currentUser,
      tweepId: props.tweepId
    };
  }
  formatDate = (date) => {
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
  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  deleteComment = () => {
    let handle = this.state.comment.authorHandle;
    let commentId = this.state.comment._id;
    console.log(handle, commentId);
    api.deleteComment(handle, this.state.tweepId, commentId)
      .then(res => {
        console.log("Comment Deleted");
        this.props.delete(commentId);
      })
  }




  render() {
    return (
      <div className={this.state.classList}>
        <div>
          <h6 className="comment-header">
            {this.state.comment.authorHandle}|{" "}
            {`${this.state.comment.timestamp} `}
          </h6>
        </div>
        {this.state.comment.commentContent}
        {this.state.author ? (
          <button
            className="delete-button-comment"
            onClick={this.deleteComment}
          >
            <div className="tweep-delete-button"></div>
          </button>
        ) : (
            <div />
          )}
      </div>
    );
  }
}


export default ReadComment;
