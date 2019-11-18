
import React, {Component} from 'react';
import "./UpdateUser.css";

class UpdateUser extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "UpdateUser"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        UpdateUser
      </div>
    );
  }
}

export default UpdateUser;
