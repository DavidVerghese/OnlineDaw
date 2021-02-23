import { Route, Link } from "react-router-dom";
import './App.css';
import * as Tone from "tone";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MusicMachine from './MusicMachine/MusicMachine.jsx'
import kickFile from './sounds/drums/kick.wav';
import snareFile from './sounds/drums/snare.wav';
import hihatFile from './sounds/drums/hihat.wav';
import crashcymbalFile from './sounds/drums/crash-cymbal.wav';
import bassC2File from './sounds/bass/bass-c2.wav';
import bassB1File from './sounds/bass/bass-b1.wav';
import bassASharp1File from './sounds/bass/bass-asharp1.wav';
import bassA1File from './sounds/bass/bass-a1.wav';
import bassGSharp1File from './sounds/bass/bass-gsharp1.wav';
import bassG1File from './sounds/bass/bass-g1.wav';
import bassFSharp1File from './sounds/bass/bass-fsharp1.wav';
import bassF1File from './sounds/bass/bass-f1.wav';
import bassE1File from './sounds/bass/bass-e1.wav';
import bassDSharp1File from './sounds/bass/bass-dsharp1.wav';
import bassD1File from './sounds/bass/bass-d1.wav';
import bassCSharp1File from './sounds/bass/bass-csharp1.wav';
import bassC1File from './sounds/bass/bass-c1.wav';
import organC5File from './sounds/organ/organ-c5.wav';
import organB4File from './sounds/organ/organ-b4.wav';
import organA4File from './sounds/organ/organ-a4.wav';
import organG4File from './sounds/organ/organ-g4.wav';
import organF4File from './sounds/organ/organ-f4.wav';
import organE4File from './sounds/organ/organ-e4.wav';
import organD4File from './sounds/organ/organ-d4.wav';
import organC4File from './sounds/organ/organ-c4.wav';
import violinC5File from './sounds/violin/violin-c5.wav';
import violinB4File from './sounds/violin/violin-b4.wav';
import violinA4File from './sounds/violin/violin-a4.wav';
import violinG4File from './sounds/violin/violin-g4.wav';
import violinF4File from './sounds/violin/violin-f4.wav';
import violinE4File from './sounds/violin/violin-e4.wav';
import violinD4File from './sounds/violin/violin-d4.wav';
import violinC4File from './sounds/violin/violin-c4.wav';


function App() {

  const drums = [kickFile, snareFile, hihatFile, crashcymbalFile];
  const bassCMajor = [bassC1File, bassD1File, bassE1File, bassF1File, bassG1File, bassA1File, bassB1File, bassC2File];
  const bassCMinor = [bassC1File, bassD1File, bassDSharp1File, bassF1File, bassG1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCDorian = [bassC1File, bassD1File, bassDSharp1File, bassF1File, bassG1File, bassA1File, bassASharp1File, bassC2File];
  const bassCPhyrgian = [bassC1File, bassCSharp1File, bassDSharp1File, bassF1File, bassG1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCLydian = [bassC1File, bassD1File, bassE1File, bassFSharp1File, bassG1File, bassA1File, bassB1File, bassC2File];
  const bassCMixolodian = [bassC1File, bassD1File, bassE1File, bassF1File, bassG1File, bassA1File, bassASharp1File, bassC2File];
  const bassCLocrian = [bassC1File, bassCSharp1File, bassE1File, bassF1File, bassFSharp1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCChromatic = [bassC1File, bassCSharp1File, bassD1File, bassDSharp1File, bassE1File, bassF1File, bassFSharp1File, bassG1File, bassGSharp1File, bassA1File, bassASharp1File, bassB1File, bassC2File];
  
  const organCMajor = [organC4File,organD4File,organE4File,organF4File,organG4File,organA4File,organB4File,organC5File];
  const violinCMajor = [violinC4File,violinD4File,violinE4File,violinF4File,violinG4File,violinA4File,violinB4File,violinC5File];
  
  let pause = false;
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  // function sequencer() {
  //   if (!pause) {
  //     Tone.start();

  //     const kick = new Tone.Player(drums[0]).toDestination();
  //     const snare = new Tone.Player(drums[1]).toDestination();
  //     const hihat = new Tone.Player(drums[2]).toDestination();
  //     const crashcymbal = new Tone.Player(drums[3]).toDestination();

  //     const bassC2 = new Tone.Player(bassCMajor[7]).toDestination();
  //     const bassB1 = new Tone.Player(bassCMajor[6]).toDestination();
  //     const bassA1 = new Tone.Player(bassCMajor[5]).toDestination();
  //     const bassG1 = new Tone.Player(bassCMajor[4]).toDestination();
  //     const bassF1 = new Tone.Player(bassCMajor[3]).toDestination();
  //     const bassE1 = new Tone.Player(bassCMajor[2]).toDestination();
  //     const bassD1 = new Tone.Player(bassCMajor[1]).toDestination();
  //     const bassC1 = new Tone.Player(bassCMajor[0]).toDestination();

  //     const organC5 = new Tone.Player(organCMajor[7]).toDestination();
  //     const organB4 = new Tone.Player(organCMajor[6]).toDestination();
  //     const organA4 = new Tone.Player(organCMajor[5]).toDestination();
  //     const organG4 = new Tone.Player(organCMajor[4]).toDestination();
  //     const organF4 = new Tone.Player(organCMajor[3]).toDestination();
  //     const organE4 = new Tone.Player(organCMajor[2]).toDestination();
  //     const organD4 = new Tone.Player(organCMajor[1]).toDestination();
  //     const organC4 = new Tone.Player(organCMajor[0]).toDestination();

  //     const violinC5 = new Tone.Player(violinCMajor[7]).toDestination();
  //     const violinB4 = new Tone.Player(violinCMajor[6]).toDestination();
  //     const violinA4 = new Tone.Player(violinCMajor[5]).toDestination();
  //     const violinG4 = new Tone.Player(violinCMajor[4]).toDestination();
  //     const violinF4 = new Tone.Player(violinCMajor[3]).toDestination();
  //     const violinE4 = new Tone.Player(violinCMajor[2]).toDestination();
  //     const violinD4 = new Tone.Player(violinCMajor[1]).toDestination();
  //     const violinC4 = new Tone.Player(violinCMajor[0]).toDestination();

  //     let index = 0;
  //     Tone.Transport.scheduleRepeat(repeat, '16n');
  //     Tone.Transport.start();
  //     function repeat() {
  //       let step = index % 16;

  //       let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
  //       let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
  //       let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
  //       let crashCymbalInputs = document.querySelector(`.crashcymbal input:nth-child(${step + 1})`);

  //       let bassC2Inputs = document.querySelector(`.bass-c2 input:nth-child(${step + 1})`);
  //       let bassB1Inputs = document.querySelector(`.bass-b1 input:nth-child(${step + 1})`);
  //       let bassA1Inputs = document.querySelector(`.bass-a1 input:nth-child(${step + 1})`);
  //       let bassG1Inputs = document.querySelector(`.bass-g1 input:nth-child(${step + 1})`);
  //       let bassF1Inputs = document.querySelector(`.bass-f1 input:nth-child(${step + 1})`);
  //       let bassE1Inputs = document.querySelector(`.bass-e1 input:nth-child(${step + 1})`);
       
  //       let bassD1Inputs = document.querySelector(`.bass-d1 input:nth-child(${step + 1})`);
  //       let bassC1Inputs = document.querySelector(`.bass-c1 input:nth-child(${step + 1})`);

  //       let organC5Inputs = document.querySelector(`.organ-c5 input:nth-child(${step + 1})`);
  //       let organB4Inputs = document.querySelector(`.organ-b4 input:nth-child(${step + 1})`);
  //       let organA4Inputs = document.querySelector(`.organ-a4 input:nth-child(${step + 1})`);
  //       let organG4Inputs = document.querySelector(`.organ-g4 input:nth-child(${step + 1})`);
  //       let organF4Inputs = document.querySelector(`.organ-f4 input:nth-child(${step + 1})`);
  //       let organE4Inputs = document.querySelector(`.organ-e4 input:nth-child(${step + 1})`);
  //       let organD4Inputs = document.querySelector(`.organ-d4 input:nth-child(${step + 1})`);
  //       let organC4Inputs = document.querySelector(`.organ-c4 input:nth-child(${step + 1})`);

  //       let violinC5Inputs = document.querySelector(`.violin-c5 input:nth-child(${step + 1})`);
  //       let violinB4Inputs = document.querySelector(`.violin-b4 input:nth-child(${step + 1})`);
  //       let violinA4Inputs = document.querySelector(`.violin-a4 input:nth-child(${step + 1})`);
  //       let violinG4Inputs = document.querySelector(`.violin-g4 input:nth-child(${step + 1})`);
  //       let violinF4Inputs = document.querySelector(`.violin-f4 input:nth-child(${step + 1})`);
  //       let violinE4Inputs = document.querySelector(`.violin-e4 input:nth-child(${step + 1})`);
  //       let violinD4Inputs = document.querySelector(`.violin-d4 input:nth-child(${step + 1})`);
  //       let violinC4Inputs = document.querySelector(`.violin-c4 input:nth-child(${step + 1})`);

  //       if (kickInputs.checked) {
  //         kick.start();
  //       }
  //       if (snareInputs.checked) {
  //         snare.start();
  //       }
  //       if (hihatInputs.checked) {
  //         hihat.start();
  //       }
  //       if (crashCymbalInputs.checked) {
  //         crashcymbal.start();
  //       }

  //       if (bassC2Inputs.checked) {
  //         bassC2.start();
  //       }
  //       if (bassB1Inputs.checked) {
  //         bassB1.start();
  //       }
  //       if (bassA1Inputs.checked) {
  //         bassA1.start();
  //       }
  //       if (bassG1Inputs.checked) {
  //         bassG1.start();
  //       }
  //       if (bassF1Inputs.checked) {
  //         bassF1.start();
  //       }
  //       if (bassE1Inputs.checked) {
  //         bassE1.start();
  //       }
  //       if (bassD1Inputs.checked) {
  //         bassD1.start();
  //       }
  //       if (bassC1Inputs.checked) {
  //         bassC1.start();
  //       }

  //       if (organC5Inputs.checked) {
  //         organC5.start();
  //       }
  //       if (organB4Inputs.checked) {
  //         organB4.start();
  //       }
  //       if (organA4Inputs.checked) {
  //         organA4.start();
  //       }
  //       if (organG4Inputs.checked) {
  //         organG4.start();
  //       }
  //       if (organF4Inputs.checked) {
  //         organF4.start();
  //       }
  //       if (organE4Inputs.checked) {
  //         organE4.start();
  //       }
  //       if (organD4Inputs.checked) {
  //         organD4.start();
  //       }
  //       if (organC4Inputs.checked) {
  //         organC4.start();
  //       }

  //       if (violinC5Inputs.checked) {
  //         violinC5.start();
  //       }
  //       if (violinB4Inputs.checked) {
  //         violinB4.start();
  //       }
  //       if (violinA4Inputs.checked) {
  //         violinA4.start();
  //       }
  //       if (violinG4Inputs.checked) {
  //         violinG4.start();
  //       }
  //       if (violinF4Inputs.checked) {
  //         violinF4.start();
  //       }
  //       if (violinE4Inputs.checked) {
  //         violinE4.start();
  //       }
  //       if (violinD4Inputs.checked) {
  //         violinD4.start();
  //       }
  //       if (violinC4Inputs.checked) {
  //         violinC4.start();
  //       }
  //       index++;
  //     }
  //     console.log(document.querySelector("#start"));
  //   }
  // }
  
  return (
    <div className="App">
      <Link to="/CMajor">Major</Link>
      <Link to="/CMinor">Minor</Link>
      <Link to="/CDorian">Dorian</Link>
      <Link to="/CPhyrgian">Phyrgian</Link>
      <Link to="/CLydian">Lydian</Link>
      <Link to="/CMixolodian">Mixolodian</Link>
      <Link to="/CLocrian">Locrian</Link>

      <Route exact path="/CMajor">
        <MusicMachine  Tone={Tone} drums={drums} bass={bassCMajor} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CMinor">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCMinor} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CDorian">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCDorian} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CPhyrgian">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCPhyrgian} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CLydian">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCLydian} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CMixolodian">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCMixolodian} organ={organCMajor} violin={violinCMajor} />
      </Route>
      <Route exact path="/CLocrian">
        <MusicMachine Tone={Tone} drums={drums} bass={bassCLocrian} organ={organCMajor} violin={violinCMajor} />
      </Route>

    </div>
  );
}

export default App;
