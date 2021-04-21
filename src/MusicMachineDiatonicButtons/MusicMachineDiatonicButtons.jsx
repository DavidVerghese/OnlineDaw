import MusicMachineDiatonicButtonGrids from "./MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx";
import "./MusicMachineDiatonicButtons.css";
import { useState } from "react";
import Scales from "./Scales.jpeg";
import * as Tone from "tone";

function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa", "keyboards", "bass", "drums"];
  const instrumentDivNames = [
    "pipacheckboxes",
    "keyboardscheckboxes",
    "basscheckboxes",
    "drumscheckboxes",
  ];
  const rowArrayNames = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
  ];
  const rowArray13 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const rowArray8 = ["0", "1", "2", "3", "4", "5", "6", "7"];
  
  const [showInstrumentZero, setShowInstrumentZero] = useState(true);
  const [showInstrumentOne, setShowInstrumentOne] = useState(false);
  const [showInstrumentTwo, setShowInstrumentTwo] = useState(false);
  const [showInstrumentThree, setShowInstrumentThree] = useState(false);
  const [scaleThatIsUsed, setScaleThatIsUsed] = useState(0);
  const [selectedScale, setSelectedScale] = useState(0);
  const scaleNamesArray = [
    "Major",
    "Minor",
    "Dorian",
    "Phyrgian",
    "Lydian",
    "Mixolodian",
    "Locrian",
    "MaqamBayati",
  ];
  const [displayScales, setDisplayScales] = useState(false);
  const [scaleToUse, setScaleToUse] = useState(8);

  const noteNamesArrayC5toC4 = [
    "C4",
    "Ddb4",
    "Db4",
    "Dd4",
    "D4",
    "Edb4",
    "Eb4",
    "Ed4",
    "E4",
    "Fd4",
    "F4",
    "Gdb4",
    "Gb4",
    "Gd4",
    "G4",
    "Adb4",
    "Ab4",
    "Ad4",
    "A4",
    "Bdb4",
    "Bb4",
    "Bd4",
    "B4",
    "Cd4",
    "C5",
    "C#4",
    "D#4",
    "F#4",
    "G#4",
    "A#4"
  ];

  const noteNamesArrayC2toC1 = [
    "C2",
    "Ddb2",
    "Db2",
    "Dd2",
    "D2",
    "Edb2",
    "Eb2",
    "Ed2",
    "E2",
    "Fd2",
    "F2",
    "Gdb2",
    "Gb2",
    "Gd2",
    "G2",
    "Adb2",
    "Ab2",
    "Ad2",
    "A2",
    "Bdb2",
    "Bb2",
    "Bd2",
    "B2",
    "Cd2",
    "C3",
  ];
  const scaleDegreeQualities = ["neutral","neither", "neutral", "minor", "major", "neutral", "neither","neutral","minor","major","minor","major","neutral"]
  let scaleDegreeDrums = [];
  for (let i = 0; i < 8; i++){
    scaleDegreeDrums.push("drums");
  };
  const scaleDegreesMajor = [0, 4, 8, 10, 14, 18, 22, 24];
  const scaleDegreesLydian = [0, 4, 8, 27, 14, 18, 22, 24];
  const scaleDegreesMixolodian = [0, 4, 8, 10, 14, 18, 20, 24];
  const scaleDegreesMinor = [0, 4, 6, 10, 14, 16, 20, 24];
  const scaleDegreesDorian = [0, 4, 6, 10, 14, 18, 20, 24];
  const scaleDegreesPhyrgian = [0, 2, 6, 10, 14, 16, 20, 24];
  const scaleDegreesLocrian = [0, 2, 6, 10, 12, 16, 20, 24];
  const scaleDegreesMaqamBayati = [0, 3, 6, 10, 14, 16, 20, 24];
  let scaleDegreesChromatic = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  scaleDegreesChromatic = scaleDegreesChromatic.reverse();
  const arrayOfScaleDegrees = [
    scaleDegreesMajor,
    scaleDegreesMinor,
    scaleDegreesDorian,
    scaleDegreesPhyrgian,
    scaleDegreesLydian,
    scaleDegreesMixolodian,
    scaleDegreesLocrian,
    scaleDegreesMaqamBayati,
    scaleDegreesChromatic
  ];

  const scaleDegreesArrayOfArraysC5toC4 = [];
  const scaleDegreesArrayOfArraysC2toC1 = [];

  arrayOfScaleDegrees.map((index, key) => {
    const scaleDegreeContainerArrayC5toC4 = [];
    const scaleDegreeContainerArrayC2toC1 = [];
    index.map((index2) => {
      scaleDegreeContainerArrayC5toC4.push(noteNamesArrayC5toC4[index2]);
      scaleDegreeContainerArrayC2toC1.push(noteNamesArrayC2toC1[index2]);
    });
    scaleDegreesArrayOfArraysC5toC4.push(scaleDegreeContainerArrayC5toC4);
    scaleDegreesArrayOfArraysC2toC1.push(scaleDegreeContainerArrayC2toC1);
  });

  const [scaleNoteNamesDisplay, setScaleNoteNamesDisplay] = useState(0);

  const drumSetNoteNamesArray = [
    "Kick",
    "Snare",
    "High Hat",
    "Crash Cymbal",
    "Rim Shot",
    "Low Tom",
    "High Tom",
    "Hand Clap"
  ];

  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
  const pipa = props.pipa;
  const drums = props.drums;
  const instrumentSounds = [pipa, woodkeys, bass, drums];
  const instrumentsArray = [bass, woodkeys, pipa, drums];
  const Tone = props.Tone;
  const [bpmValue, setBpmValue] = useState(60);
  Tone.Transport.bpm.value = bpmValue;
  const allTheSounds = [];
  instrumentSounds.map((instrumentSoundIndex) => {
    instrumentSoundIndex.map((individualSoundFile) => {
      console.log(individualSoundFile);
      const individualSound = new Tone.Player(
        individualSoundFile
      ).toDestination();
      allTheSounds.push(individualSound);
    });
  });

  function sequencer() {
    Tone.start();
    let index = 0;
    Tone.Transport.scheduleRepeat(repeat, "32n");

    Tone.Transport.start();
    function repeat() {
      let step = index % 32;

      const allTheRows = [];
      instruments.map((instrumentIndex) => {
        rowArrayNames.map((rowNameIndex) => {
          const newVar = document.querySelectorAll(
            `.${instrumentIndex}${rowNameIndex}buttons-row input`
          );
          let currentBeat = newVar[step];
          if (currentBeat !== undefined) {
            allTheRows.push(currentBeat);
          }
        });
      });

      setScaleThatIsUsed(scaleToUse);
      index++;
      allTheRows.map((allTheRowsIndex, key) => {
        if (allTheRowsIndex.checked) {
          allTheSounds[key].start();
        }
      });
    }
  }

  const instrumentZeroOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) {
      setShowInstrumentOne(false);
    }
    if (showInstrumentTwo) {
      setShowInstrumentTwo(false);
    }
    if (showInstrumentThree) {
      setShowInstrumentThree(false);
    }
    setShowInstrumentZero(true);
    setShowInstrumentArray([
      !showInstrumentZero,
      showInstrumentOne,
      showInstrumentTwo,
      showInstrumentThree,
    ]);
  };
  const instrumentOneOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentZero) {
      setShowInstrumentZero(false);
    }
    if (showInstrumentTwo) {
      setShowInstrumentTwo(false);
    }
    if (showInstrumentThree) {
      setShowInstrumentThree(false);
    }
    setShowInstrumentOne(true);
    setShowInstrumentArray([
      showInstrumentZero,
      !showInstrumentOne,
      showInstrumentTwo,
      showInstrumentThree,
    ]);
  };
  const instrumentTwoOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) {
      setShowInstrumentOne(false);
    }
    if (showInstrumentZero) {
      setShowInstrumentZero(false);
    }
    if (showInstrumentThree) {
      setShowInstrumentThree(false);
    }
    setShowInstrumentTwo(true);
    setShowInstrumentArray([
      showInstrumentZero,
      showInstrumentOne,
      !showInstrumentTwo,
      showInstrumentThree,
    ]);
  };
  const instrumentThreeOnClick = function (e) {
    e.preventDefault();
    if (showInstrumentOne) {
      setShowInstrumentOne(false);
    }
    if (showInstrumentTwo) {
      setShowInstrumentTwo(false);
    }
    if (showInstrumentZero) {
      setShowInstrumentZero(false);
    }
    setShowInstrumentThree(true);
    setShowInstrumentArray([
      showInstrumentZero,
      showInstrumentOne,
      showInstrumentTwo,
      !showInstrumentThree,
    ]);
  };
  const [showInstrumentArray, setShowInstrumentArray] = useState([
    showInstrumentZero,
    showInstrumentOne,
    showInstrumentTwo,
    showInstrumentThree,
  ]);

  return (
    <div id="button-parent-div">
      <div className="instrument-buttons">
        <button
          id={showInstrumentZero ? "selected" : "instrument-one-button"}
          onClick={instrumentZeroOnClick}
        >
          instrument1: {instruments[0]}{" "}
          <span
            className={
              showInstrumentZero ? "selectedlightzero" : "nonselectedlightzero"
            }
          ></span>{" "}
        </button>
        <button
          id={showInstrumentOne ? "selected" : "instrument-two-button"}
          onClick={instrumentOneOnClick}
        >
          instrument2: {instruments[1]}
          <span
            className={
              showInstrumentOne ? "selectedlightone" : "nonselectedlightone"
            }
          ></span>
        </button>
        <button
          id={showInstrumentTwo ? "selected" : "instrument-three-button"}
          onClick={instrumentTwoOnClick}
        >
          instrument3: {instruments[2]}{" "}
          <span
            className={
              showInstrumentTwo ? "selectedlighttwo" : "nonselectedlighttwo"
            }
          ></span>
        </button>
        <button
          id={showInstrumentThree ? "selected" : "instrument-four-button"}
          onClick={instrumentThreeOnClick}
        >
          instrument4: {instruments[3]}{" "}
          <span
            className={
              showInstrumentThree
                ? "selectedlightthree"
                : "nonselectedlightthree"
            }
          ></span>
        </button>
        <input
          type="range"
          min="50"
          max="240"
          onChange={function (e) {
            setBpmValue(e.target.value / 2);
          }}
          className="slider"
          id="myRange"
        ></input>
        <p>Tempo: {bpmValue * 2}</p>
        {/* <button
          id="button-for-scales"
          onClick={function (e) {
            e.preventDefault();
            setDisplayScales(!displayScales);
          }}
        >
          Scale: {scaleNamesArray[scaleToUse]}
        </button> */}
        <button
          id="start-button"
          onClick={function (e) {
            e.preventDefault();
            sequencer();
          }}
        >
          Start
        </button>
      </div>

      <div id={!displayScales ? "scales-section-hide" : "scales-section"}>
        <div id="scale-description">
          {/* {!displayScales ? "list-of-scales-hide": "list-of-scales"} */}
          <p>
            Choose a scale to play a selection of notes that sound good
            together. Each scale has a different set of notes that give the
            scale its unique sound. Example:
            <img src={Scales} />
          </p>
        </div>
        <div id="scales-dropdown">
          <div className="list-of-scales">
            <ul>
              <li
                className={
                  selectedScale === 0 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(0);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(0);
                  setSelectedScale(0);
                }}
              >
                Major
              </li>
              <li
                className={
                  selectedScale === 1 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(1);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(1);
                  setSelectedScale(1);
                }}
              >
                Minor
              </li>
              <li
                className={
                  selectedScale === 2 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(2);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(2);
                  setSelectedScale(2);
                }}
              >
                Dorian
              </li>
              <li
                className={
                  selectedScale === 3 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(3);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(3);
                  setSelectedScale(3);
                }}
              >
                Phrygian
              </li>
              <li
                className={
                  selectedScale === 4 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(4);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(4);
                  setSelectedScale(4);
                }}
              >
                Lydian
              </li>
              <li
                className={
                  selectedScale === 5 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(5);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(5);
                  setSelectedScale(5);
                }}
              >
                Mixolodian
              </li>
              <li
                className={
                  selectedScale === 6 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(6);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(6);
                  setSelectedScale(6);
                }}
              >
                Locrian
              </li>
              <li
                className={
                  selectedScale === 7 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(7);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(7);
                  setSelectedScale(7);
                }}
              >
                Maqam Bayati
              </li>
              <li
                className={
                  selectedScale === 7 ? "selected-scale" : "unselected-scale"
                }
                onClick={function (e) {
                  e.preventDefault();
                  setScaleToUse(7);
                  console.log(scaleToUse);
                  setScaleNoteNamesDisplay(8);
                  setSelectedScale(8);
                }}
              >
                SLTS
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MusicMachineDiatonicButtonGrids
        rowArray={rowArray13}
        noteName={scaleDegreesArrayOfArraysC5toC4[8]}
        scaleDegreeQualities={scaleDegreeQualities}
        beatNumbersPics={props.beatNumbersPics}
        instrumentsArray={instrumentsArray}
        display={showInstrumentZero ? "instrument-show" : "instrument-no-show"}
        instrumentname={instruments[0]}
        instrumentSounds={instrumentSounds[0]}
        instrumentDivNames={instrumentDivNames[0]}
      />
      <MusicMachineDiatonicButtonGrids
        rowArray={rowArray13}
        noteName={scaleDegreesArrayOfArraysC5toC4[8]}
        scaleDegreeQualities={scaleDegreeQualities}
        beatNumbersPics={props.beatNumbersPics}
        instrumentsArray={instrumentsArray}
        display={showInstrumentOne ? "instrument-show" : "instrument-no-show"}
        instrumentname={instruments[1]}
        instrumentSounds={instrumentSounds[1]}
        instrumentDivNames={instrumentDivNames[1]}
      />
      <MusicMachineDiatonicButtonGrids
        rowArray={rowArray13}
        noteName={scaleDegreesArrayOfArraysC2toC1[8]}
        scaleDegreeQualities={scaleDegreeQualities}
        beatNumbersPics={props.beatNumbersPics}
        instrumentsArray={instrumentsArray}
        display={showInstrumentTwo ? "instrument-show" : "instrument-no-show"}
        instrumentname={instruments[2]}
        instrumentSounds={instrumentSounds[2]}
        instrumentDivNames={instrumentDivNames[2]}
      />
      <MusicMachineDiatonicButtonGrids
        rowArray={rowArray8}
        noteName={drumSetNoteNamesArray}
        scaleDegreeQualities={scaleDegreeDrums}
        beatNumbersPics={props.beatNumbersPics}
        instrumentsArray={instrumentsArray}
        display={showInstrumentThree ? "instrument-show" : "instrument-no-show"}
        instrumentname={instruments[3]}
        instrumentSounds={instrumentSounds[3]}
        instrumentDivNames={instrumentDivNames[3]}
      />
    </div>
  );
}
export default MusicMachineDiatonicButtons;
