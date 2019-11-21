
import React from 'react';
import "./FollowingBox.css";
import {withRouter} from "react-router-dom";


const FollowingBox = (props) => {
  let classList = `FollowingBox`;
  console.log(props);

  let following = props.following.map(val=>{
      return <div onClick={()=>{
        props.history.push({
          pathname:"/user/"+val
        })
      }} className={"FollowingUser"}>{val}</div>
  })

  return(
    <div className={classList}>
      <h4>Following:</h4>
      {following}
    </div>
  );
}

export default withRouter(FollowingBox);
