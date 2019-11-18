
import React, {Component} from 'react';
import "./ProfileHome.css";
import Api from '../../Api';
let api = new Api();
class ProfileHome extends Component{
  constructor(props){
    console.log(props);
    super(props);
    console.log(props);
    this.state = {
      classList: "ProfileHome",
      handle: props.match.params.handle
    };
    api.readUser(props.match.params.handle)
      .then(
        res=>{
          console.log(res);
        }
      )
  }

  componentDidMount(){
    console.log("ProfileHome Mounted");
  }

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        ProfileHome
      </div>
    );
  }
}

export default ProfileHome;
