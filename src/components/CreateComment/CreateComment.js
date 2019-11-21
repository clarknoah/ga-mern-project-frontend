
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
      newComment:"",
      user:props.user,
      tweep:props.tweep,
      authorHandle:props.authorHandle
    };
  }

  componentDidMount(){}

  componentDidUpdate(){
    console.log("Create Comment Updated");
  }

  componentWillUnmount(){}

  updateValue=(evt)=>{
    this.setState({
      newComment: evt.target.value
    })
  }

  submitComment=(evt)=>{
    let activeUser = localStorage.getItem('activeUser');
    console.log(activeUser);
    let comment = {
      commentContent: this.state.newComment,
      timestamp: new Date(),
      authorHandle:activeUser
    }
    let handle = this.state.user.handle;
    let tweep = this.state.tweep._id;
    console.log("Submitting Comment");
    api.createComment(handle,tweep, comment)
      .then(res=>{
        this.props.commentCreated();
        console.log("Comment Created");
        this.setState({
          newComment:""
        });
      })
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
