import React, {Component} from 'react';
import Input from './Form';

class InputWithButton extends Component {
  constructor(props){
    super();
    console.log(props);
    this.state = {
      props: props,
      classes:`input-with-button-button input-${props.size}`
    }
  }

  getSize=()=>{

  }

  render(){
    return (
      <div className={"input-with-button"}>
        <Input
          placeholder={this.state.props.placeholder}
          size={this.state.props.size}
          />
        <div className={this.state.classes}>
          <div className={"button-text"}>
            {this.state.props.buttonText}
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithButton;
