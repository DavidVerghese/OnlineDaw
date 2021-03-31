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
  const [scaleThatIsUsed, setScaleThatIsUsed] = useState(0);

  const [displayScales, setDisplayScales] = useState(false);
  const [scaleToUse, setScaleToUse] = useState(0);

  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
  const pipa = props.instrumentObject[0][0];
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

  // creating allTheSounds with each scale
  
  const allTheSoundsScales = [];
  props.instrumentObject.map((index, key) => {
    const allTheSounds2 = [];
    index.map((index2) => {
      index2.map((index3) => {
        const individualSound = new Tone.Player(index3).toDestination();
        allTheSounds2.push(individualSound);
      })
    });
    allTheSoundsScales.push(allTheSounds2);
  }); 

  function sequencer() {
    const allTheRows = [];
    Tone.start();
    let index = 0;
    console.log();
    Tone.Transport.scheduleRepeat(repeat, '32n')
    instruments.map((instrumentIndex) => {
      rowArrayNames.map((rowNameIndex) => {
        const newVar = document.querySelectorAll(`.${instrumentIndex}${rowNameIndex}buttons-row input`);
        allTheRows.push(newVar);
      })
    });
    Tone.Transport.start();
    let allTheInputs = [];
    function repeat() {
      setScaleThatIsUsed(scaleToUse);
      index++;
      let step = index % 32;
      allTheRows.map((allTheRowsIndex,key) => {
        const foo = allTheRowsIndex[step];
        allTheInputs.push(foo);
        if (allTheRowsIndex[step].checked) {
          allTheSoundsScales[scaleToUse][key].start();
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

    <div id="scales-dropdown">
      <button onClick={function (e) { e.preventDefault(); setDisplayScales(!displayScales) }}>Major</button>
      {/* {displayScales ? */}
        <ul>
        <li onClick={function (e) {  e.preventDefault();setScaleToUse(0); console.log(scaleToUse) }}>Major</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(1); console.log(scaleToUse) }}>Minor</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(2); console.log(scaleToUse) }}>Dorian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(3); console.log(scaleToUse) }}>Phrygian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(4); console.log(scaleToUse) }}>Lydian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(5); console.log(scaleToUse) }}>Mixolodian</li>
          <li onClick={function (e) { e.preventDefault(); setScaleToUse(6); console.log(scaleToUse) }}>Locrian</li>
          <li onClick={function (e) { e.preventDefault();setScaleToUse(7); console.log(scaleToUse) }}>Maqam Bayati</li>
      </ul>
        {/* // : null} */}
     
      </div>

    

    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentZero) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[0]} instrumentSounds={instrumentSounds[0]} instrumentDivNames={instrumentDivNames[0]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentOne) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[1]} instrumentSounds={instrumentSounds[1]} instrumentDivNames={instrumentDivNames[1]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentTwo) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[2]} instrumentSounds={instrumentSounds[2]} instrumentDivNames={instrumentDivNames[2]}/>
    <MusicMachineDiatonicButtonGrids instrumentsArray={instrumentsArray} display={(showInstrumentThree) ? "instrument-show" : "instrument-no-show"} instrumentname={instruments[3]} instrumentSounds={instrumentSounds[3]} instrumentDivNames={instrumentDivNames[3]} />
    
    </div>
}
export default MusicMachineDiatonicButtons