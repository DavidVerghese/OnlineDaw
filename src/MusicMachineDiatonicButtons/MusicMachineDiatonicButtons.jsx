import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';
import { useState } from "react";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const [showInstrumentZero, setShowInstrumentZero] = useState(false);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);
 
  const [showInstrumentArray, setShowInstrumentArray] = useState([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]);
  const instrumentZeroOnClick = function () { setShowInstrumentZero(!showInstrumentZero); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]); console.log(showInstrumentArray) };
  const instrumentOneOnClick = function () { setShowInstrumentOne(!showInstrumentOne); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]); console.log(showInstrumentArray) };
  const instrumentTwoOnClick = function () { setShowInstrumentTwo(!showInstrumentTwo); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]); console.log(showInstrumentArray) };
  const instrumentThreeOnClick = function () { setShowInstrumentThree(!showInstrumentThree); setShowInstrumentArray([showInstrumentZero,showInstrumentOne, showInstrumentTwo, showInstrumentThree]);console.log(showInstrumentArray)};
 
  

  return <div>
    <div id="instrument-buttons">
      <button onClick={instrumentZeroOnClick}>instrument1</button>
    <button onClick={instrumentOneOnClick}>instrument2</button>
    <button onClick={instrumentTwoOnClick}>instrument3</button>
    <button onClick={instrumentThreeOnClick}>instrument4</button>
    </div>
    
    {instruments.map((index, key) => {
      return <div>
        { showInstrumentArray[key] ? <MusicMachineDiatonicButtonGrids instrumentname={ instruments[key]}/> : null }
      </div>  
    })}
    </div>
}
export default MusicMachineDiatonicButtons