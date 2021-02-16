import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import kickFile from './sounds/drums/kick.wav';
import snareFile from './sounds/drums/snare.wav';
import hihatFile from './sounds/drums/hihat.wav';
import crashcymbalFile from './sounds/drums/crash-cymbal.wav';
import bassC2File from './sounds/bass/bass-c2.wav';
import bassB1File from './sounds/bass/bass-b1.wav';
import bassA1File from './sounds/bass/bass-a1.wav';
import bassG1File from './sounds/bass/bass-g1.wav';
import bassF1File from './sounds/bass/bass-f1.wav';
import bassE1File from './sounds/bass/bass-e1.wav';
import bassD1File from './sounds/bass/bass-d1.wav';
import bassC1File from './sounds/bass/bass-c1.wav';

function App() {
  function sequencer() {
    Tone.start();

    const kick = new Tone.Player(kickFile).toDestination();
    const snare = new Tone.Player(snareFile).toDestination();
    const hihat = new Tone.Player(hihatFile).toDestination();
    const crashcymbal = new Tone.Player(crashcymbalFile).toDestination();

    const bassC2 = new Tone.Player(bassC2File).toDestination();
    const bassB1 = new Tone.Player(bassB1File).toDestination();
    const bassA1 = new Tone.Player(bassA1File).toDestination();
    const bassG1 = new Tone.Player(bassG1File).toDestination();
    const bassF1 = new Tone.Player(bassF1File).toDestination();
    const bassE1 = new Tone.Player(bassE1File).toDestination();
    const bassD1 = new Tone.Player(bassD1File).toDestination();
    const bassC1 = new Tone.Player(bassC1File).toDestination();

    let index = 0;
    Tone.Transport.scheduleRepeat(repeat, '8n');
    Tone.Transport.start();
    function repeat() {
      let step = index % 8;
      let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
      let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
      let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
      let crashCymbalInputs = document.querySelector(`.crashcymbal input:nth-child(${step + 1})`);

      let bassC2Inputs = document.querySelector(`.bass-c2 input:nth-child(${step + 1})`);
      let bassB1Inputs = document.querySelector(`.bass-b1 input:nth-child(${step + 1})`);
      let bassA1Inputs = document.querySelector(`.bass-a1 input:nth-child(${step + 1})`);
      let bassG1Inputs = document.querySelector(`.bass-g1 input:nth-child(${step + 1})`);
      let bassF1Inputs = document.querySelector(`.bass-f1 input:nth-child(${step + 1})`);
      let bassE1Inputs = document.querySelector(`.bass-e1 input:nth-child(${step + 1})`);
      let bassD1Inputs = document.querySelector(`.bass-d1 input:nth-child(${step + 1})`);
      let bassC1Inputs = document.querySelector(`.bass-c1 input:nth-child(${step + 1})`);

      if (kickInputs.checked) {
        kick.start();
      }
      if (snareInputs.checked) {
        snare.start();
      }
      if (hihatInputs.checked) {
        hihat.start();
      }
      if (crashCymbalInputs.checked) {
        crashcymbal.start();
      }

      if (bassC2Inputs.checked) {
        bassC2.start();
      }
      if (bassB1Inputs.checked) {
        bassB1.start();
      }
      if (bassA1Inputs.checked) {
        bassA1.start();
      }
      if (bassG1Inputs.checked) {
        bassG1.start();
      }
      if (bassF1Inputs.checked) {
        bassF1.start();
      }
      if (bassE1Inputs.checked) {
        bassE1.start();
      }
      if (bassD1Inputs.checked) {
        bassD1.start();
      }
      if (bassC1Inputs.checked) {
        bassC1.start();
      }
      index++;
    }
    console.log(document.querySelector("#start"));
  }
  return (
    <div className="App">
      <div className="nav">
      <h1>Virtual Digital Audio Workstation</h1>
      <div>
      <p>Time signature:</p>
        <li>4/4</li>
        <li>3/4</li>
        <li>5/4</li>
        </div>
        <div>
      <p>Scale:</p>
     
        <li>Major</li>
        <li>Minor</li>
        <li>24-tone</li>
     </div>
      <button id="start" onClick={sequencer}>Start</button>
      </div>
      <h2>Drums</h2>
      <div className="drum-parent-div">
      <div className="instrument-pic"><img src="https://images-na.ssl-images-amazon.com/images/I/71nJgkQau1L._AC_SL1500_.jpg" id="drum-pic" alt="drums"/></div>
      
      <div className="drum-inputs">
      <div className="kick">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="snare">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="hihat">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="crashcymbal">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
          </div>
          </div>
        </div>
      <h2>Bass synth</h2>
      <div className="bass-synth-parent-div">
      <div className="instrument-pic"><img src="https://images-na.ssl-images-amazon.com/images/I/91GOFcGxXKL._AC_SL1500_.jpg" id="bass-synth-pic" /></div>
      <div className="bass-synth-inputs">
        <div className="bass-c2">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-b1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-a1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-g1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-f1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-e1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-d1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
      </div>
      <div className="bass-c1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      <input type="checkbox"></input>
        </div>
        </div>
      </div>
      <h2>Organ</h2>
      <h2>Violin</h2>
    </div>
  );
}

export default App;
