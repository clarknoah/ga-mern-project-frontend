import React from 'react';
import './Form.css';



const Input = (props) => {
  let value = "";
  let classList = '';
  let placeholder = props.placeholder ? props.placeholder : props.label;
  if(props.size){
    classList += ` input-${props.size}`;
  }

  if(!props.placeholder){

  }

  let updateValue = (evt)=>{
    value = evt.target.value;
  };
  console.log(value);
  return (
    <div>
    <div className="input-label">{props.label}</div>
    <input onChange={updateValue} value={value} className={classList} placeholder={placeholder} label={props.label} />
    </div>
  )
}



export default Input;
