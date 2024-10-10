import React from "react";

function  Button (props) {
  return (
    <button className="btn btn-success but rounded-0" type="button" onClick={props.onClick}>
      {props.value}
    </button>
    
  );
};

export default Button;
