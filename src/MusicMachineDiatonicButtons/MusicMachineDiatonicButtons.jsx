import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';
import { useState } from "react";
import * as Tone from "tone";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const instrumentDivNames = ["pipacheckboxes", "keyboardscheckboxes", "basscheckboxes", "drumscheckboxes"];
  const rowArrayNames = ["zero", "one", "two", "three", "four", "five", "six", "seven"];
  const [showInstrumentZero, setShowInstrumentZero] = useState(true);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);

  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
    // instrumentObject={(scaleToUse === 'CMajor') ? CMajor :
          //   (scaleToUse === 'CMinor') ? CMinor :
          //     (scaleToUse === 'CDorian') ? CDorian :
          //       (scaleToUse === 'CPhyrgian') ? CPhyrgian :
          //         (scaleToUse === 'CLydian') ? CLydian :
          //           (scaleToUse === 'CMixolodian') ? CMixolodian :
          //           (scaleToUse === 'CLocrian') ? CLocrian :
          //               CMaqamBayati}
  // const pipa = (props.scalesToUse === 'CMajor') ? props.instrumentObject[0][0] :
  //   props.instrumentObject[1][0]
  // console.log(props.scaleToUse);
  // console.log(pipa);
  const pipa = props.instrumentObject[7][0];
  // console.log(props.instrumentObject[0][0]);
  // console.log(props.instrumentObject[1][0]);
  //const pipa = props.pipa;
  const drums = props.drums;
  const instrumentSounds = [pipa,woodkeys,bass,drums];
  const instrumentsArray = [bass, woodkeys, pipa, drums];
  const Tone = props.Tone;
  const [bpmValue, setBpmValue] = useState(60);
  Tone.Transport.bpm.value = bpmValue;
  const allTheSounds = [];
  instrumentSounds.map((instrumentSoundIndex) => {
    instrumentSoundIndex.map((individualSoundFile) => {
      const individualSound = new Tone.Player(individualSoundFile).toDestination();
      allTheSounds.push(individualSound);
    });
  });
  function sequencer() {
    const allTheRows = [];
    Tone.start();
    let index = 0;
    console.log();
    Tone.Transport.scheduleRepeat(repeat, '32n')
    // console.log(rowInputs[0]);
    instruments.map((instrumentIndex) => {
      rowArrayNames.map((rowNameIndex) => {
        const newVar = document.querySelectorAll(`.${instrumentIndex}${rowNameIndex}buttons-row input`);
        allTheRows.push(newVar);
      })
    });
    Tone.Transport.start();
    let allTheInputs = [];
    function repeat() {
      
      index++;
      let step = index % 32;
      //const pipaZeroRowInputs = allTheRows[0][step];
      allTheRows.map((allTheRowsIndex,key) => {
        const foo = allTheRowsIndex[step];
        allTheInputs.push(foo);
        if (allTheRowsIndex[step].checked) {
          allTheSounds[key].start();
        }
      });
    }
  }

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
 
  return <div id="button-parent-div">
    <div id="instrument-buttons">
    <button className={showInstrumentZero ? "selected" : null }onClick={instrumentZeroOnClick}>instrument1: {instruments[0]} <span className={showInstrumentZero ? "selectedlightzero" : "nonselectedlightzero" }></span> </button>
    <button className={showInstrumentOne ? "selected" : null } onClick={instrumentOneOnClick}>instrument2: {instruments[1]}<span className={showInstrumentOne ? "selectedlightone" : "nonselectedlightone" }></span></button>
    <button className={showInstrumentTwo ? "selected" : null } onClick={instrumentTwoOnClick}>instrument3: {instruments[2]} <span className={showInstrumentTwo ? "selectedlighttwo" : "nonselectedlighttwo" }></span></button>
    <button className={showInstrumentThree ? "selected" : null } onClick={instrumentThreeOnClick}>instrument4: {instruments[3]} <span className={showInstrumentThree ? "selectedlightthree" : "nonselectedlightthree" }></span></button>
    <button id="start-button" onClick={function (e) { e.preventDefault();sequencer()}}>Start</button>
    </div>

    

    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentZero) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[0]} instrumentSounds={instrumentSounds[0]} instrumentDivNames={instrumentDivNames[0]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentOne) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[1]} instrumentSounds={instrumentSounds[1]} instrumentDivNames={instrumentDivNames[1]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentTwo) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[2]} instrumentSounds={instrumentSounds[2]} instrumentDivNames={instrumentDivNames[2]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentThree) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[3]} instrumentSounds={instrumentSounds[3]} instrumentDivNames={instrumentDivNames[3]} />
    
    </div>
}
export default MusicMachineDiatonicButtons