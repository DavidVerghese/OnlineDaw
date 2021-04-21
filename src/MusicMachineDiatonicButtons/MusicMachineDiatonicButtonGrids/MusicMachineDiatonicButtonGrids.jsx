import MusicMachineDiatonicButtonRows from './MusicMachineDiatonicButtonRows/MusicMachineDiatonicButtonRows.jsx';
import './MusicMachineDiatonicButtonGrids.css';
import { useRef, useState } from "react";

function MusicMachineDiatonicButtonGrids(props) {
  const rowArrayNames = ["zero", "one", "two", "three", "four", "five", "six", "seven","eight","nine","ten","eleven","twelve"];

  const buttonNames = [];
  const numbers0to31 = [];
  for (let i = 0; i < 32; i++){
    numbers0to31.push(i);
  };
  const lettersAtoH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  lettersAtoH.map((index1) => {
    const array0 = [];
    numbers0to31.map((index2) => {
      array0.push(`${index1}${index2}`);
    });
    buttonNames.push(array0);
  });
  
  const arrayOfColumnArrayInstrumentNames = [];
  buttonNames.map((index2,key)=>{
    const array=[];
    index2.map((index3)=>{
      let newItem = `${index3}${props.instrumentname}`;
      array.push(newItem);
      arrayOfColumnArrayInstrumentNames[key]=array;
    });
  });
  
  const gridRef = useRef();

  return <div className="grid-parent-div">
    
    <div className={props.display}>
      
      <div ref={gridRef} id={`${props.instrumentname}buttongrid-id`}>
        <div className="grid-beat-numbers">
         <div className="beat-number-div"><p>1</p></div><div className="beat-number-div"><p>2</p></div><div className="beat-number-div"><p>3</p></div><div className="beat-number-div"><p>4</p></div><div className="beat-number-div"><p>5</p></div><div className="beat-number-div"><p>6</p></div><div className="beat-number-div"><p>7</p></div><div className="beat-number-div"><p>8</p></div><div className="beat-number-div"><p>9</p></div><div className="beat-number-div"><p>10</p></div><div className="beat-number-div"><p>11</p></div><div className="beat-number-div"><p>12</p></div><div className="beat-number-div"><p>13</p></div><div className="beat-number-div"><p>14</p></div><div className="beat-number-div"><p>15</p></div><div className="beat-number-div"><p>16</p></div>
      </div>
        <div id="hi-guys" >{props.rowArray.map((index, key) => {
          return <MusicMachineDiatonicButtonRows
            noteName={props.noteName[key]}
            instrumentsArray={props.instrumentsArray}
            instrument={props.instrumentname}
            gridRef={gridRef}
            rowId={rowArrayNames[key]}
            key={key}
            array={arrayOfColumnArrayInstrumentNames[key]}
            instrumentSound={props.instrumentSounds[key]}
            instrumentDivNames={props.instrumentDivNames}
            scaleQuality={props.scaleDegreeQualities[key]}
          />
    })}</div>
    </div>
    
  </div></div>
  
}
export default MusicMachineDiatonicButtonGrids