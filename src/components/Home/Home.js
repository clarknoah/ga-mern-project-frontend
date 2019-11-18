
import React, {Component} from 'react';
import "./Home.css";

class Home extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "Home"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        Home
      </div>
    );
  }
}

export default Home;
