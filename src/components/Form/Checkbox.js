import React, {Component} from 'react';
import Icon from '../Icon/Icon';

import "./Form.css";


class Checkbox extends Component {
  constructor(props){
    super();
    this.state = {
      checked:props.checked,
      color: props.color,
      classes:this.setClass(props.checked,props.color)

    }
  }

  setClass = (checked,color) =>{
    let isChecked = checked === true;
    if(isChecked){
      return `checkbox checkbox-${color} checkbox-${color}-checked`
    }else {
      return `checkbox checkbox-${color}`;
    }
  }

  toggle=()=>{
    let newState = !this.state.checked;
    console.log(1, !newState);
    this.setState({
      checked:newState,
      classes:this.setClass(newState,this.state.color)
    });
    console.log(2, this.state.checked);

  }

  render(){
    console.log("rendering");
    return (
      <div className={this.state.classes} onClick={this.toggle}>
        <Icon icon="checkmark"/>
      </div>
    );
  }

}


export default Checkbox;
