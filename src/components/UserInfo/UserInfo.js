import React from "react";
import "./UserInfo.css";

const UserInfo = props => {
  let classList = `UserInfo`;

  return (
    <div className={classList}>
      <h3>
        {props.firstName} {props.lastName}
      </h3>
      <h5>@{props.handle}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default UserInfo;
