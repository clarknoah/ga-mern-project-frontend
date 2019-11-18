import React from 'react';
import './Form.css';
import Icon from "../Icon/Icon";
import "./Select.css"

const Select = (props) => {
  let classList = "";
  let arrowClassList = "select-arrow ";
  let containerClassList = "select-container ";
  console.log(props);
  if(props.size){
    classList += ` select-${props.size}`;
    arrowClassList += ` select-arrow-${props.size}`
    containerClassList += ` select-container-${props.size}`;
    console.log(classList);
  }
  if(props.background===true){
    classList += ` select-background`;
    arrowClassList += ` select-background`;
  }
  return (
    <div className={containerClassList}>
      <select className={classList}>
        {props.items.map(val=>{
          return <option>{val}</option>
        })}
      </select>
      <div className={arrowClassList}>
        <Icon icon="arrow-down" height={4} width={4}/>
      </div>
    </div>);
}


export default Select;
