import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';
import { useState } from "react";
import * as Tone from "tone";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const [showInstrumentZero, setShowInstrumentZero] = useState(true);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);

  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
  const pipa = props.pipa;
  const drums = props.drums;
  const instrumentSounds = [pipa,woodkeys,bass,drums];
  const instrumentsArray = [bass, woodkeys, pipa, drums];
  const Tone = props.Tone;
  const [bpmValue, setBpmValue] = useState(60);
  Tone.Transport.bpm.value = bpmValue;
  const bassSound = new Tone.Player(props.sinebass[0]).toDestination();

  const instrumentZeroOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false) };
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentZero(true);
    setShowInstrumentArray([!showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree])
  };
  const instrumentOneOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentZero) { setShowInstrumentZero(false)};
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentOne(true); setShowInstrumentArray([showInstrumentZero, !showInstrumentOne, showInstrumentTwo, showInstrumentThree])
  };
  const instrumentTwoOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false) };
    if (showInstrumentZero) { setShowInstrumentZero(false) };
    if (showInstrumentThree) { setShowInstrumentThree(false) };
    setShowInstrumentTwo(true); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, !showInstrumentTwo, showInstrumentThree])
  };
  const instrumentThreeOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) { setShowInstrumentOne(false) };
    if (showInstrumentTwo) { setShowInstrumentTwo(false) };
    if (showInstrumentZero) { setShowInstrumentZero(false) };
    setShowInstrumentThree(true); setShowInstrumentArray([showInstrumentZero, showInstrumentOne, showInstrumentTwo, !showInstrumentThree])
  };
  const [showInstrumentArray, setShowInstrumentArray] = useState([showInstrumentZero, showInstrumentOne, showInstrumentTwo, showInstrumentThree]);
  function sequencer(){
    Tone.start();
    let index = 0;
    console.log();
    const rowInputs = document.querySelectorAll('.pipazerobuttons-row #checkboxes input');
    Tone.Transport.scheduleRepeat(repeat, '32n')
    console.log(rowInputs[0]);
    Tone.Transport.start();
    function repeat() {
      index++;
      let step = index % 32;
      if (rowInputs[0].checked && step === 0) {
        bassSound.start();
      }
    }
  }
  return <div id="button-parent-div">
    <div id="instrument-buttons">
    <button className={showInstrumentZero ? "selected" : null }onClick={instrumentZeroOnClick}>instrument1: {instruments[0]} <span className={showInstrumentZero ? "selectedlightzero" : "nonselectedlightzero" }></span> </button>
    <button className={showInstrumentOne ? "selected" : null } onClick={instrumentOneOnClick}>instrument2: {instruments[1]}<span className={showInstrumentOne ? "selectedlightone" : "nonselectedlightone" }></span></button>
    <button className={showInstrumentTwo ? "selected" : null } onClick={instrumentTwoOnClick}>instrument3: {instruments[2]} <span className={showInstrumentTwo ? "selectedlighttwo" : "nonselectedlighttwo" }></span></button>
    <button className={showInstrumentThree ? "selected" : null } onClick={instrumentThreeOnClick}>instrument4: {instruments[3]} <span className={showInstrumentThree ? "selectedlightthree" : "nonselectedlightthree" }></span></button>
    <button onClick={function (e) { e.preventDefault();sequencer()}}>Start</button>
    </div>

    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentZero) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[0]} instrumentSounds={instrumentSounds[0]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentOne) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[1]} instrumentSounds={instrumentSounds[1]} />
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentTwo) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[2]} instrumentSounds={instrumentSounds[2]} />
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentThree) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[3]} instrumentSounds={instrumentSounds[3]} />
    
    </div>
}
export default MusicMachineDiatonicButtons