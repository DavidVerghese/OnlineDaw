import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';
import { useState } from "react";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const [showInstrumentZero, setShowInstrumentZero] = useState(true);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);

  const [instrumentZeroDisplay, setInstrumentZeroDisplay] = useState("");
  const [instrumentOneDisplay, setInstrumentOneDisplay] = useState("");
  const [instrumentTwoDisplay, setInstrumentTwoDisplay] = useState("");
  const [instrumentThreeDisplay, setInstrumentThreeDisplay] = useState("");

  const instrumentZeroOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false);console.log("hi") };
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentZero(!showInstrumentZero);
    setShowInstrumentArray([!showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree])
  };
  const instrumentOneOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentZero) { setShowInstrumentZero(false)};
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentOne(!showInstrumentOne); setShowInstrumentArray([showInstrumentZero, !showInstrumentOne, showInstrumentTwo, showInstrumentThree])
  };
  const instrumentTwoOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false) };
    if (showInstrumentZero) { setShowInstrumentZero(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentTwo(!showInstrumentTwo); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, !showInstrumentTwo, showInstrumentThree])
  };
  const instrumentThreeOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false) };
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentZero) { setShowInstrumentZero(false) };
    setShowInstrumentThree(!showInstrumentThree); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, !showInstrumentThree])
  };
  const [showInstrumentArray, setShowInstrumentArray] = useState([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]);


  return <div id="button-parent-div">
    <div id="instrument-buttons">
    <button className={showInstrumentZero ? "selected" : null }onClick={instrumentZeroOnClick}>instrument1: {instruments[0]} <span className={showInstrumentZero ? "selectedlightzero" : "nonselectedlightzero" }></span> </button>
    <button className={showInstrumentOne ? "selected" : null } onClick={instrumentOneOnClick}>instrument2: {instruments[1]}<span className={showInstrumentOne ? "selectedlightone" : "nonselectedlightone" }></span></button>
    <button className={showInstrumentTwo ? "selected" : null } onClick={instrumentTwoOnClick}>instrument3: {instruments[2]} <span className={showInstrumentTwo ? "selectedlighttwo" : "nonselectedlighttwo" }></span></button>
    <button className={showInstrumentThree ? "selected" : null } onClick={instrumentThreeOnClick}>instrument4: {instruments[3]} <span className={showInstrumentThree ? "selectedlightthree" : "nonselectedlightthree" }></span></button>
   
    </div>

    <MusicMachineDiatonicButtonGrids display={(showInstrumentZero) ? "" : "instrument-no-show"} instrumentname={instruments[0]} />
    <MusicMachineDiatonicButtonGrids display={(showInstrumentOne) ? "" : "instrument-no-show"} instrumentname={instruments[0]} instrumentname={instruments[1]} />
    <MusicMachineDiatonicButtonGrids display={(showInstrumentTwo) ? "" : "instrument-no-show"} instrumentname={instruments[0]} instrumentname={instruments[2]} />
    <MusicMachineDiatonicButtonGrids display={(showInstrumentThree) ? "" : "instrument-no-show"} instrumentname={instruments[0]} instrumentname={instruments[3]} />
    
   
    
    </div>
}
export default MusicMachineDiatonicButtons