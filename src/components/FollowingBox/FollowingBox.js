
import React from 'react';
import "./FollowingBox.css";
import {withRouter} from "react-router-dom";
import Api from "../../Api.js";

let api = new Api();

const FollowingBox = (props) => {
  let classList = `FollowingBox`;
  console.log(props);

  let following = props.following.map(val=>{
      return <div onClick={()=>{
        api.readUser(val)
          .then(result=>{
            console.log(result);
            let data = result.data[0];
            
            props.history.push({
              pathname:"/user/"+val,
              state:result.data[0]
            })
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
