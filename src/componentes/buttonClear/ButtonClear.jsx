import React from "react";
import '../../sheet-styles/Clear.css';

const ButtonClear = (props) => (
  <div 
    className='button-clear' 
    onClick={props.manejarClear}>
      {props.children}
  </div>
);

export default ButtonClear;