import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';
import { useState } from "react";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const [showInstrumentZero, setShowInstrumentZero] = useState(false);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);
 

  const instrumentZeroOnClick = function (e) { e.preventDefault();setShowInstrumentZero(!showInstrumentZero); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]) };
  const instrumentOneOnClick = function (e) { e.preventDefault(); setShowInstrumentOne(!showInstrumentOne); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]) };
  const instrumentTwoOnClick = function (e) { e.preventDefault(); setShowInstrumentTwo(!showInstrumentTwo); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]) };
  const instrumentThreeOnClick = function (e) { e.preventDefault(); setShowInstrumentThree(!showInstrumentThree); setShowInstrumentArray([showInstrumentZero,showInstrumentOne, showInstrumentTwo, showInstrumentThree])};
  const [showInstrumentArray, setShowInstrumentArray] = useState([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]);

  return <div>
    <div id="instrument-buttons">
    <button className={showInstrumentZero ? "selected" : null }onClick={instrumentZeroOnClick}>instrument1 <span className={showInstrumentZero ? "selectedlightzero" : "nonselectedlightzero" }></span> </button>
    <button className={showInstrumentOne ? "selected" : null } onClick={instrumentOneOnClick}>instrument2 <span className={showInstrumentOne ? "selectedlightone" : "nonselectedlightone" }></span></button>
    <button className={showInstrumentTwo ? "selected" : null } onClick={instrumentTwoOnClick}>instrument3 <span className={showInstrumentTwo ? "selectedlighttwo" : "nonselectedlighttwo" }></span></button>
    <button className={showInstrumentThree ? "selected" : null } onClick={instrumentThreeOnClick}>instrument4 <span className={showInstrumentThree ? "selectedlightthree" : "nonselectedlightthree" }></span></button>
    <button onClick={function (e) { e.preventDefault(); console.log(showInstrumentArray) }}>Array</button>
    </div>
    
    {showInstrumentArray[0] ? <MusicMachineDiatonicButtonGrids instrumentname={instruments[0]} /> : null}
    {showInstrumentArray[1] ? <MusicMachineDiatonicButtonGrids instrumentname={instruments[1]} /> : null}
    {showInstrumentArray[2] ? <MusicMachineDiatonicButtonGrids instrumentname={instruments[2]} /> : null}
    { showInstrumentArray[3] ? <MusicMachineDiatonicButtonGrids instrumentname={ instruments[3]}/> : null }
    </div>
}
export default MusicMachineDiatonicButtons