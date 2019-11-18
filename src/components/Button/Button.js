import React from 'react';
import "./Button.js"
import "./Button.css";
import "./cart.svg";
import "./heart.png";
import Icon from "../Icon/Icon"
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    console.log(props);
    // Declare a classList variable and set it to an empty string
    let classList = props.className !== undefined ? props.className: "";

    // Create an array of all of the story/component types you want to be
    // included in your component library
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    let innerHTML;
    // Add a conditional statement that checks for the type and updates the
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.large) {
        classList += ` button-large` // Note the spacing here since we are adding to the string!
    }

    if (props.outline) {
        classList += ` ${props.type}-button-outline` // Note the spacing here since we are adding to the string!
    }

    if (props.inline) {
        classList += ` ${props.type}-button-inline` // Note the spacing here since we are adding to the string!
    }

    if (props.large){
      classList += ` button-large`;
    }

    if (props.icon){
      classList += ` contains-icon`;
      if(props.label==="" || props.label===undefined){
        innerHTML= <div className={'flex-button'}><Icon icon={props.icon}/></div>;
      }else{
        innerHTML= <div className={'flex-button'}><Icon icon={props.icon}/><span>{props.label}</span></div>;
      }
    }else{
      innerHTML = props.label;
    }

    if (props.round){
      classList += ` button-round`;
    }


    // Give the button's class a value of classList
    return <button className={classList}>
    {innerHTML}
    </button>
}
export default Button;
