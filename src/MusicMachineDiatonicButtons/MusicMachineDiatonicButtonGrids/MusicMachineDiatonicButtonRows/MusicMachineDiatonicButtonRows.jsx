import Button from '../../../Buttons/Button.jsx';
import './MusicMachineDiatonicButtonRows.css';
import { useRef,useState } from "react";
import * as Tone from "tone";

function MusicMachineDiatonicButtonRows(props) {
  const rowRef = useRef(null);
  const [bpmValue, setBpmValue] = useState(60);
  const [stepNumber, setStepNumber] = useState(0);

  if (rowRef.current){
    const rowRefVar = rowRef.current;
  }
  const instrumentSound = new Tone.Player(props.instrumentSound).toDestination();
  Tone.Transport.bpm.value = bpmValue;

  return (
    <div id="row-parent-div">
      <div className={props.instrumentDivNames !== 'drumscheckboxes' ? "note-name-div":"note-name-div-drums"}>
        <p id={props.instrumentDivNames !== 'drumscheckboxes' ? "note-name":"note-name-drums"}>{props.noteName}</p>
      </div>
    <div ref={rowRef} className={`${props.instrument}${props.rowId}buttons-row`}>
      { props.array.map((index, key) => {
        return <Button scaleQuality={props.scaleQuality} key={key} noteName={props.noteName} stepNumber={stepNumber} button={index} instrumentSound = {props.instrumentSound} instrumentDivNames={props.instrumentDivNames}/>
      })}
    </div></div>
    
    )
}
export default MusicMachineDiatonicButtonRows