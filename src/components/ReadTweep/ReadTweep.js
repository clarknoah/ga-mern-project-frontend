
import React, {Component} from 'react';
import "./ReadTweep.css";
import ReadComment from "../ReadComment/ReadComment";
import CreateComment from "../CreateComment/CreateComment";

class ReadTweep extends Component{
  constructor(props){
    super();
    console.log(props);
    let tweep = props.tweep;
    let date = new Date(tweep.timestamp);
    tweep.timestamp = this.formatDate(date);
    this.state = {
      classList: "ReadTweep",
      tweep:props.tweep,
      user: props.user
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
    let comments = this.state.tweep.comments.map(val=>{
      return <ReadComment key={val._id} data={val}/>
    })
    return(
      <div className={this.state.classList}>
        <div className="tweepHeader">
          <h6>{this.state.user.handle}| {`${this.state.tweep.timestamp} `}</h6>
        </div>
        <p>{this.state.tweep.tweepContent}</p>
        {comments}
        <CreateComment />
      </div>
    );
  }
}

export default ReadTweep;
