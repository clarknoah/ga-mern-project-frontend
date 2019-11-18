---
to: src/components/<%= name %>/<%= name %>.js
---

import React, {Component} from 'react';
import "./<%= name %>.css";

class <%= name %> extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "<%= name %>"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        <%= name %>
      </div>
    );
  }
}

export default <%= name %>;
