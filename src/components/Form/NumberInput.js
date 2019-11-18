import React, {Component} from 'react';
import Icon from "../Icon/Icon";

class NumberInput extends Component {
  constructor(props){
    super();
    this.state = {
      count:props.value,
      min:props.min,
      max:props.max,
      step:props.step
    };

  }

  incrementUp=()=>{
    let currentVal = this.state.count;
    let belowMax = this.state.max > currentVal;
    if(belowMax){
      this.setState({count:currentVal+this.state.step})
    }
  }

  incrementDown=()=>{
    let currentVal = this.state.count;
    let aboveMin = this.state.min < currentVal;
    if(aboveMin){
      this.setState({count:currentVal-this.state.step})
    }
  }

  getCurrentState=()=>{
    return this.state.count;
  }

  render(){
    return(
      <div className={"number-input"}>
        <div  className={"nothing"} onClick={this.incrementDown}>
        <Icon icon="minus-sign"/>
        </div>
        <div>{this.state.count}</div>
        <div className={"nothing"} onClick={this.incrementUp}>
        <Icon icon="plus-sign"/>
        </div>
      </div>
    );
  }
}

export default NumberInput;
