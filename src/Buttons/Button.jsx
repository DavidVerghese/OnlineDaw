import React from "react";
import "./Button.css";
import * as Tone from "tone";
import { useRef,useState } from "react";



function Button (props) {
  const checkBoxRef = useRef(null);
  return (
    <div>
      <div id=
        {(checkBoxRef.current === props.notePlaying) ? props.instrumentDivNames+'selected' : props.instrumentDivNames }
      >
      <input ref={checkBoxRef} type="checkbox" value={props.button} id={`r${props.button}`} />
      <label className="select-button" htmlFor={`r${props.button}`}></label>
      </div></div>
  );
};

export default Button;
