import { Route, Link } from "react-router-dom";
import './App.css';
import * as Tone from "tone";
import { useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MusicMachineDiatonic from './MusicMachineDiatonic/MusicMachineDiatonic.jsx';
import MusicMachineDiatonicButtons from './MusicMachineDiatonicButtons/MusicMachineDiatonicButtons.jsx';
import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtons/MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import MusicMachineChromatic from './MusicMachineChromatic/MusicMachineChromatic.jsx';
import MusicMachine24Tone from './MusicMachine24Tone/MusicMachine24Tone.jsx';
import kickFile from './sounds/drums/kick.wav';
import snareFile from './sounds/drums/snare.wav';
import hihatFile from './sounds/drums/hihat.wav';
import rimshotFile from './sounds/drums/808rimshot.wav';
import highTomFile from './sounds/drums/808hightom.wav';
import lowTomFile from './sounds/drums/808lowtom.wav';
import handclapFile from './sounds/drums/808handclap.wav';
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

import sinebassC2File from './sounds/sinebass/sinebass-c2.wav';
import sinebassBQuarterSharp1File from './sounds/sinebass/sinebass-bquartersharp1.wav';
import sinebassB1File from './sounds/sinebass/sinebass-b1.wav';
import sinebassASharpQuarterSharp1File from './sounds/sinebass/sinebass-asharpquartersharp1.wav';
import sinebassASharp1File from './sounds/sinebass/sinebass-asharp1.wav';
import sinebassAQuarterSharp1File from './sounds/sinebass/sinebass-aquartersharp1.wav';
import sinebassA1File from './sounds/sinebass/sinebass-a1.wav';
import sinebassGSharpQuarterSharp1File from './sounds/sinebass/sinebass-gsharpquartersharp1.wav';
import sinebassGSharp1File from './sounds/sinebass/sinebass-gsharp1.wav';
import sinebassGQuarterSharp1File from './sounds/sinebass/sinebass-gquartersharp1.wav';
import sinebassG1File from './sounds/sinebass/sinebass-g1.wav';
import sinebassFSharpQuarterSharp1File from './sounds/sinebass/sinebass-fsharpquartersharp1.wav';
import sinebassFSharp1File from './sounds/sinebass/sinebass-fsharp1.wav';
import sinebassFQuarterSharp1File from './sounds/sinebass/sinebass-fquartersharp1.wav';
import sinebassF1File from './sounds/sinebass/sinebass-f1.wav';
import sinebassEQuarterSharp1File from './sounds/sinebass/sinebass-equartersharp1.wav';
import sinebassE1File from './sounds/sinebass/sinebass-e1.wav';
import sinebassDSharpQuarterSharp1File from './sounds/sinebass/sinebass-dsharpquartersharp1.wav';
import sinebassDSharp1File from './sounds/sinebass/sinebass-dsharp1.wav';
import sinebassDQuarterSharp1File from './sounds/sinebass/sinebass-dquartersharp1.wav';
import sinebassD1File from './sounds/sinebass/sinebass-d1.wav';
import sinebassCSharpQuarterSharp1File from './sounds/sinebass/sinebass-csharpquartersharp1.wav';
import sinebassCSharp1File from './sounds/sinebass/sinebass-csharp1.wav';
import sinebassCQuarterSharp1File from './sounds/sinebass/sinebass-cquartersharp1.wav';
import sinebassC1File from './sounds/sinebass/sinebass-c1.wav';

import organC5File from './sounds/organ/organ-c5.wav';
import organB4File from './sounds/organ/organ-b4.wav';
import organA4File from './sounds/organ/organ-a4.wav';
import organG4File from './sounds/woodkeys/woodkeys-g3.wav';
import organF4File from './sounds/woodkeys/woodkeys-f3.wav';
import organE4File from './sounds/woodkeys/woodkeys-e3.wav';
import organD4File from './sounds/woodkeys/woodkeys-d3.wav';
import organC4File from './sounds/woodkeys/woodkeys-c3.wav';
import violinC5File from './sounds/violin/violin-c5.wav';
import violinB4File from './sounds/violin/violin-b4.wav';
import violinA4File from './sounds/violin/violin-a4.wav';
import violinG4File from './sounds/violin/violin-g4.wav';
import violinF4File from './sounds/violin/violin-f4.wav';
import violinE4File from './sounds/violin/violin-e4.wav';
import violinD4File from './sounds/violin/violin-d4.wav';
import violinC4File from './sounds/violin/violin-c4.wav';

import woodkeysC4File from './sounds/woodkeys/woodkeys-c4.wav';
import woodkeysBQuarterSharp3File from './sounds/woodkeys/woodkeys-bquartersharp3.wav';
import woodkeysB3File from './sounds/woodkeys/woodkeys-b3.wav';
import woodkeysASharpQuarterSharp3File from './sounds/woodkeys/woodkeys-asharpquartersharp3.wav';
import woodkeysASharp3File from './sounds/woodkeys/woodkeys-asharp3.wav';
import woodkeysAQuarterSharp3File from './sounds/woodkeys/woodkeys-aquartersharp3.wav';
import woodkeysA3File from './sounds/woodkeys/woodkeys-a3.wav';
import woodkeysGSharpQuarterSharp3File from './sounds/woodkeys/woodkeys-gsharpquartersharp3.wav';
import woodkeysGSharp3File from './sounds/woodkeys/woodkeys-gsharp3.wav';
import woodkeysGQuarterSharp3File from './sounds/woodkeys/woodkeys-gquartersharp3.wav';
import woodkeysG3File from './sounds/woodkeys/woodkeys-g3.wav';
import woodkeysFSharpQuarterSharp3File from './sounds/woodkeys/woodkeys-fsharpquartersharp3.wav';
import woodkeysFSharp3File from './sounds/woodkeys/woodkeys-fsharp3.wav';
import woodkeysFQuarterSharp3File from './sounds/woodkeys/woodkeys-fquartersharp3.wav';
import woodkeysF3File from './sounds/woodkeys/woodkeys-f3.wav';
import woodkeysEQuarterSharp3File from './sounds/woodkeys/woodkeys-equartersharp3.wav';
import woodkeysE3File from './sounds/woodkeys/woodkeys-e3.wav';
import woodkeysDSharpQuarterSharp3File from './sounds/woodkeys/woodkeys-dsharpquartersharp3.wav';
import woodkeysDSharp3File from './sounds/woodkeys/woodkeys-dsharp3.wav';
import woodkeysDQuarterSharp3File from './sounds/woodkeys/woodkeys-dquartersharp3.wav';
import woodkeysD3File from './sounds/woodkeys/woodkeys-d3.wav';
import woodkeysCSharpQuarterSharp3File from './sounds/woodkeys/woodkeys-csharpquartersharp3.wav';
import woodkeysCSharp3File from './sounds/woodkeys/woodkeys-csharp3.wav';
import woodkeysCQuarterSharp3File from './sounds/woodkeys/woodkeys-cquartersharp3.wav';
import woodkeysC3File from './sounds/woodkeys/woodkeys-c3.wav';

import pipaC5File from './sounds/pipa/pipa-c5.wav';
import pipaBQuarterSharp4File from './sounds/pipa/pipa-bquartersharp4.wav';
import pipaB4File from './sounds/pipa/pipa-b4.wav';
import pipaASharpQuarterSharp4File from './sounds/pipa/pipa-asharpquartersharp4.wav';
import pipaASharp4File from './sounds/pipa/pipa-asharp4.wav';
import pipaAQuarterSharp4File from './sounds/pipa/pipa-aquartersharp4.wav';
import pipaA4File from './sounds/pipa/pipa-a4.wav';
import pipaGSharpQuarterSharp4File from './sounds/pipa/pipa-gsharpquartersharp4.wav';
import pipaGSharp4File from './sounds/pipa/pipa-gsharp4.wav';
import pipaGQuarterSharp4File from './sounds/pipa/pipa-gquartersharp4.wav';
import pipaG4File from './sounds/pipa/pipa-g4.wav';
import pipaFSharpQuarterSharp4File from './sounds/pipa/pipa-fsharpquartersharp4.wav';
import pipaFSharp4File from './sounds/pipa/pipa-fsharp4.wav';
import pipaFQuarterSharp4File from './sounds/pipa/pipa-fquartersharp4.wav';
import pipaF4File from './sounds/pipa/pipa-f4.wav';
import pipaEQuarterSharp4File from './sounds/pipa/pipa-equartersharp4.wav';
import pipaE4File from './sounds/pipa/pipa-e4.wav';
import pipaDSharpQuarterSharp4File from './sounds/pipa/pipa-dsharpquartersharp4.wav';
import pipaDSharp4File from './sounds/pipa/pipa-dsharp4.wav';
import pipaDQuarterSharp4File from './sounds/pipa/pipa-dquartersharp4.wav';
import pipaD4File from './sounds/pipa/pipa-d4.wav';
import pipaCSharpQuarterSharp4File from './sounds/pipa/pipa-csharpquartersharp4.wav';
import pipaCSharp4File from './sounds/pipa/pipa-csharp4.wav';
import pipaCQuarterSharp4File from './sounds/pipa/pipa-cquartersharp4.wav';
import pipaC4File from './sounds/pipa/pipa-c4.wav';

import onepic from './Numbers/1.png';
import twopic from './Numbers/2.png';
import threepic from './Numbers/3.png';
import fourpic from './Numbers/4.png';
import fivepic from './Numbers/5.png';
import sixpic from './Numbers/6.png';
import sevenpic from './Numbers/7.png';
import eightpic from './Numbers/8.png';
import ninepic from './Numbers/9.png';
import tenpic from './Numbers/10.png';
import elevenpic from './Numbers/11.png';
import twelvepic from './Numbers/12.png';
import thirteenpic from './Numbers/13.png';
import fourteenpic from './Numbers/14.png';
import fifteenpic from './Numbers/15.png';
import sixteenpic from './Numbers/16.png';

import BFlat4Pic from './NoteNames/C5toC4/BFlat4.png';
import ASharp4Pic from './NoteNames/C5toC4/ASharp4.png';
import A4Pic from './NoteNames/C5toC4/A4.png';
import B4Pic from './NoteNames/C5toC4/B4.png';
import DFlat4Pic from './NoteNames/C5toC4/DFlat4.png';
import CSharp4Pic from './NoteNames/C5toC4/CSharp4.png';
import C4Pic from './NoteNames/C5toC4/C4.png';
import C5Pic from './NoteNames/C5toC4/C5.png';
import EFlat4Pic from './NoteNames/C5toC4/EFlat4.png';
import DSharp4Pic from './NoteNames/C5toC4/DSharp4.png';
import D4Pic from './NoteNames/C5toC4/D4.png';
import E4Pic from './NoteNames/C5toC4/E4.png';
import GFlat4Pic from './NoteNames/C5toC4/GFlat4.png';
import FSharp4Pic from './NoteNames/C5toC4/FSharp4.png';
import F4Pic from './NoteNames/C5toC4/F4.png';
import AFlat4Pic from './NoteNames/C5toC4/AFlat4.png';
import GSharp4Pic from './NoteNames/C5toC4/GSharp4.png';
import G4Pic from './NoteNames/C5toC4/G4.png';

import BFlat1Pic from './NoteNames/C2toC1/BFlat1.png';
import ASharp1Pic from './NoteNames/C2toC1/ASharp1.png';
import A1Pic from './NoteNames/C2toC1/A1.png';
import B1Pic from './NoteNames/C2toC1/B1.png';
import DFlat1Pic from './NoteNames/C2toC1/DFlat1.png';
import CSharp1Pic from './NoteNames/C2toC1/CSharp1.png';
import C1Pic from './NoteNames/C2toC1/C1.png';
import C2Pic from './NoteNames/C2toC1/C2.png';
import EFlat1Pic from './NoteNames/C2toC1/EFlat1.png';
import DSharp1Pic from './NoteNames/C2toC1/DSharp1.png';
import D1Pic from './NoteNames/C2toC1/D1.png';
import E1Pic from './NoteNames/C2toC1/E1.png';
import GFlat1Pic from './NoteNames/C2toC1/GFlat1.png';
import FSharp1Pic from './NoteNames/C2toC1/FSharp1.png';
import F1Pic from './NoteNames/C2toC1/F1.png';
import AFlat1Pic from './NoteNames/C2toC1/AFlat1.png';
import GSharp1Pic from './NoteNames/C2toC1/GSharp1.png';
import G1Pic from './NoteNames/C2toC1/G1.png';

import MicrotonalA4Pic from './NoteNames/C24ToneC5toC4/A4.png';
import MicrotonalAb4Pic from './NoteNames/C24ToneC5toC4/Ab4.png';
import MicrotonalAd4Pic from './NoteNames/C24ToneC5toC4/Ad4.png';
import MicrotonalAdb4Pic from './NoteNames/C24ToneC5toC4/Adb4.png';
import MicrotonalB4Pic from './NoteNames/C24ToneC5toC4/B4.png';
import MicrotonalBb4Pic from './NoteNames/C24ToneC5toC4/Bb4.png';
import MicrotonalBd4Pic from './NoteNames/C24ToneC5toC4/Bd4.png';
import MicrotonalBdb4Pic from './NoteNames/C24ToneC5toC4/Bdb4.png';
import MicrotonalC4Pic from './NoteNames/C24ToneC5toC4/C4.png';
import MicrotonalC5Pic from './NoteNames/C24ToneC5toC4/C5.png';
import MicrotonalCd4Pic from './NoteNames/C24ToneC5toC4/Cd4.png';
import MicrotonalD4Pic from './NoteNames/C24ToneC5toC4/D4.png';
import MicrotonalDb4Pic from './NoteNames/C24ToneC5toC4/Db4.png';
import MicrotonalDd4Pic from './NoteNames/C24ToneC5toC4/Dd4.png';
import MicrotonalDdb4Pic from './NoteNames/C24ToneC5toC4/Ddb4.png';
import MicrotonalE4Pic from './NoteNames/C24ToneC5toC4/E4.png';
import MicrotonalEb4Pic from './NoteNames/C24ToneC5toC4/Eb4.png';
import MicrotonalEd4Pic from './NoteNames/C24ToneC5toC4/Ed4.png';
import MicrotonalEdb4Pic from './NoteNames/C24ToneC5toC4/Edb4.png';
import MicrotonalF4Pic from './NoteNames/C24ToneC5toC4/F4.png';
import MicrotonalFd4Pic from './NoteNames/C24ToneC5toC4/Fd4.png';
import MicrotonalG4Pic from './NoteNames/C24ToneC5toC4/G4.png';
import MicrotonalGb4Pic from './NoteNames/C24ToneC5toC4/Gb4.png';
import MicrotonalGd4Pic from './NoteNames/C24ToneC5toC4/Gd4.png';
import MicrotonalGdb4Pic from './NoteNames/C24ToneC5toC4/Gdb4.png';



import MicrotonalA1Pic from './NoteNames/C24ToneC2toC1/A1.png';
import MicrotonalAb1Pic from './NoteNames/C24ToneC2toC1/Ab1.png';
import MicrotonalAd1Pic from './NoteNames/C24ToneC2toC1/Ad1.png';
import MicrotonalAdb1Pic from './NoteNames/C24ToneC2toC1/Adb1.png';
import MicrotonalB1Pic from './NoteNames/C24ToneC2toC1/B1.png';
import MicrotonalBb1Pic from './NoteNames/C24ToneC2toC1/Bb1.png';
import MicrotonalBd1Pic from './NoteNames/C24ToneC2toC1/Bd1.png';
import MicrotonalBdb1Pic from './NoteNames/C24ToneC2toC1/Bdb1.png';
import MicrotonalC2Pic from './NoteNames/C24ToneC2toC1/C2.png';
import MicrotonalC1Pic from './NoteNames/C24ToneC2toC1/C1.png';
import MicrotonalCd1Pic from './NoteNames/C24ToneC2toC1/Cd1.png';
import MicrotonalD1Pic from './NoteNames/C24ToneC2toC1/D1.png';
import MicrotonalDb1Pic from './NoteNames/C24ToneC2toC1/Db1.png';
import MicrotonalDd1Pic from './NoteNames/C24ToneC2toC1/Dd1.png';
import MicrotonalDdb1Pic from './NoteNames/C24ToneC2toC1/Ddb1.png';
import MicrotonalE1Pic from './NoteNames/C24ToneC2toC1/E1.png';
import MicrotonalEb1Pic from './NoteNames/C24ToneC2toC1/Eb1.png';
import MicrotonalEd1Pic from './NoteNames/C24ToneC2toC1/Ed1.png';
import MicrotonalEdb1Pic from './NoteNames/C24ToneC2toC1/Edb1.png';
import MicrotonalF1Pic from './NoteNames/C24ToneC2toC1/F1.png';
import MicrotonalFd1Pic from './NoteNames/C24ToneC2toC1/Fd1.png';
import MicrotonalG1Pic from './NoteNames/C24ToneC2toC1/G1.png';
import MicrotonalGb1Pic from './NoteNames/C24ToneC2toC1/Gb1.png';
import MicrotonalGd1Pic from './NoteNames/C24ToneC2toC1/Gd1.png';
import MicrotonalGdb1Pic from './NoteNames/C24ToneC2toC1/Gdb1.png';

import kickPic from './NoteNames/drums/kick.png';
import snarePic from './NoteNames/drums/snare.png';
import hihatPic from './NoteNames/drums/hihat.png';
import cymbalPic from './NoteNames/drums/cymbal.png';

function App() {
  
  const beatNumbersPics = [onepic,twopic,threepic,fourpic,fivepic,sixpic,sevenpic,eightpic,ninepic,tenpic,elevenpic,twelvepic,thirteenpic,fourteenpic,fifteenpic,sixteenpic];
  const drums = [kickFile, snareFile, hihatFile, crashcymbalFile, rimshotFile,lowTomFile,highTomFile,handclapFile];
  const bassCMajor = [bassC1File, bassD1File, bassE1File, bassF1File, bassG1File, bassA1File, bassB1File, bassC2File];
  const bassCMinor = [bassC1File, bassD1File, bassDSharp1File, bassF1File, bassG1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCDorian = [bassC1File, bassD1File, bassDSharp1File, bassF1File, bassG1File, bassA1File, bassASharp1File, bassC2File];
  const bassCPhyrgian = [bassC1File, bassCSharp1File, bassDSharp1File, bassF1File, bassG1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCLydian = [bassC1File, bassD1File, bassE1File, bassFSharp1File, bassG1File, bassA1File, bassB1File, bassC2File];
  const bassCMixolodian = [bassC1File, bassD1File, bassE1File, bassF1File, bassG1File, bassA1File, bassASharp1File, bassC2File];
  const bassCLocrian = [bassC1File, bassCSharp1File, bassE1File, bassF1File, bassFSharp1File, bassGSharp1File, bassASharp1File, bassC2File];
  const bassCChromatic = [bassC1File, bassCSharp1File, bassD1File, bassDSharp1File, bassE1File, bassF1File, bassFSharp1File, bassG1File, bassGSharp1File, bassA1File, bassASharp1File, bassB1File, bassC2File];
  

  const sineBassCMajor = [sinebassC1File, sinebassD1File, sinebassE1File, sinebassF1File, sinebassG1File, sinebassA1File, sinebassB1File, sinebassC2File];
  const sineBassCMinor = [sinebassC1File, sinebassD1File, sinebassDSharp1File, sinebassF1File, sinebassG1File, sinebassGSharp1File, sinebassASharp1File, sinebassC2File];
  const sineBassCDorian = [sinebassC1File, sinebassD1File, sinebassDSharp1File, sinebassF1File, sinebassG1File, sinebassA1File, sinebassASharp1File, sinebassC2File];
  const sineBassCPhyrgian = [sinebassC1File, sinebassCSharp1File, sinebassDSharp1File, sinebassF1File, sinebassG1File, sinebassGSharp1File, sinebassASharp1File, sinebassC2File];
  const sineBassCLydian = [sinebassC1File, sinebassD1File, sinebassE1File, sinebassFSharp1File, sinebassG1File, sinebassA1File, sinebassB1File, sinebassC2File];
  const sineBassCMixolodian = [sinebassC1File, sinebassD1File, sinebassE1File, sinebassF1File, sinebassG1File, sinebassA1File, sinebassASharp1File, sinebassC2File];
  const sineBassCLocrian = [sinebassC1File, sinebassCSharp1File, sinebassE1File, sinebassF1File, sinebassFSharp1File, sinebassGSharp1File, sinebassASharp1File, sinebassC2File];
  const sineBassCChromatic = [sinebassC1File, sinebassCSharp1File, sinebassD1File, sinebassDSharp1File, sinebassE1File, sinebassF1File, sinebassFSharp1File, sinebassG1File, sinebassGSharp1File, sinebassA1File, sinebassASharp1File, sinebassB1File, sinebassC2File];
  const sineBassC24Tone = [sinebassC1File,sinebassCQuarterSharp1File, sinebassCSharp1File, sinebassCSharpQuarterSharp1File,sinebassD1File, sinebassDQuarterSharp1File,sinebassDSharp1File,sinebassDSharpQuarterSharp1File, sinebassE1File,sinebassEQuarterSharp1File, sinebassF1File,sinebassFQuarterSharp1File, sinebassFSharp1File,sinebassFSharpQuarterSharp1File, sinebassG1File, sinebassGQuarterSharp1File,sinebassGSharp1File, sinebassGSharpQuarterSharp1File,sinebassA1File,sinebassAQuarterSharp1File, sinebassASharp1File,sinebassASharpQuarterSharp1File, sinebassB1File, sinebassBQuarterSharp1File,sinebassC2File];
  const sineBassCMaqamBayati = [sinebassC1File, sinebassCSharpQuarterSharp1File, sinebassDSharp1File, sinebassF1File, sinebassG1File, sinebassGSharp1File, sinebassASharp1File, sinebassC2File];
 

  const organCMajor = [organC4File, organD4File, organE4File, organF4File, organG4File, organA4File, organB4File, organC5File];
  
  const woodkeysCMajor = [woodkeysC3File, woodkeysD3File, woodkeysE3File, woodkeysF3File, woodkeysG3File, woodkeysA3File, woodkeysB3File, woodkeysC4File];
  const woodkeysCMinor = [woodkeysC3File, woodkeysD3File, woodkeysDSharp3File, woodkeysF3File, woodkeysG3File, woodkeysGSharp3File, woodkeysASharp3File, woodkeysC4File];
  const woodkeysCDorian = [woodkeysC3File, woodkeysD3File, woodkeysDSharp3File, woodkeysF3File, woodkeysG3File, woodkeysA3File, woodkeysASharp3File, woodkeysC4File];
  const woodkeysCPhyrgian = [woodkeysC3File, woodkeysCSharp3File, woodkeysDSharp3File, woodkeysF3File, woodkeysG3File, woodkeysGSharp3File, woodkeysASharp3File, woodkeysC4File];
  const woodkeysCLydian = [woodkeysC3File, woodkeysD3File, woodkeysE3File, woodkeysFSharp3File, woodkeysG3File, woodkeysA3File, woodkeysB3File, woodkeysC4File];
  const woodkeysCMixolodian = [woodkeysC3File, woodkeysD3File, woodkeysE3File, woodkeysF3File, woodkeysG3File, woodkeysA3File, woodkeysASharp3File, woodkeysC4File];
  const woodkeysCLocrian = [woodkeysC3File, woodkeysCSharp3File, woodkeysDSharp3File, woodkeysF3File, woodkeysFSharp3File, woodkeysGSharp3File, woodkeysASharp3File, woodkeysC4File];
  const woodkeysCChromatic = [woodkeysC3File, woodkeysCSharp3File, woodkeysD3File, woodkeysDSharp3File, woodkeysE3File, woodkeysF3File, woodkeysFSharp3File, woodkeysG3File, woodkeysGSharp3File, woodkeysA3File, woodkeysASharp3File, woodkeysB3File, woodkeysC4File];
  const woodkeysC24Tone = [woodkeysC3File, woodkeysCQuarterSharp3File,woodkeysCSharp3File,woodkeysCSharpQuarterSharp3File, woodkeysD3File, woodkeysDQuarterSharp3File,woodkeysDSharp3File,woodkeysDSharpQuarterSharp3File, woodkeysE3File, woodkeysEQuarterSharp3File,woodkeysF3File,woodkeysFQuarterSharp3File, woodkeysFSharp3File,woodkeysFSharpQuarterSharp3File, woodkeysG3File,woodkeysGQuarterSharp3File, woodkeysGSharp3File,woodkeysGSharpQuarterSharp3File, woodkeysA3File, woodkeysAQuarterSharp3File,woodkeysASharp3File,woodkeysASharpQuarterSharp3File, woodkeysB3File, woodkeysBQuarterSharp3File,woodkeysC4File];
  const woodkeysCMaqamBayati = [woodkeysC3File, woodkeysCSharpQuarterSharp3File, woodkeysDSharp3File, woodkeysF3File, woodkeysG3File, woodkeysGSharp3File, woodkeysASharp3File, woodkeysC4File];


  const violinCMajor = [violinC4File, violinD4File, violinE4File, violinF4File, violinG4File, violinA4File, violinB4File, violinC5File];
  
  const pipaCMajor = [pipaC4File,pipaD4File,pipaE4File,pipaF4File,pipaG4File,pipaA4File,pipaB4File,pipaC5File];
  const pipaCMinor = [pipaC4File,pipaD4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCDorian = [pipaC4File,pipaD4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaA4File,pipaASharp4File,pipaC5File];
  const pipaCPhyrgian = [pipaC4File,pipaCSharp4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCLydian = [pipaC4File,pipaD4File,pipaE4File,pipaFSharp4File,pipaG4File,pipaA4File,pipaB4File,pipaC5File];
  const pipaCMixolodian = [pipaC4File,pipaD4File,pipaE4File,pipaF4File,pipaG4File,pipaA4File,pipaASharp4File,pipaC5File];
  const pipaCLocrian = [pipaC4File,pipaCSharp4File,pipaDSharp4File,pipaF4File,pipaFSharp4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCChromatic = [pipaC4File,pipaCSharp4File,pipaD4File,pipaDSharp4File,pipaE4File,pipaF4File,pipaFSharp4File,pipaG4File,pipaGSharp4File,pipaA4File,pipaASharp4File,pipaB4File,pipaC5File];
  const pipaC24Tone = [pipaC4File,pipaCQuarterSharp4File,pipaCSharp4File,pipaCSharpQuarterSharp4File,pipaD4File,pipaDQuarterSharp4File,pipaDSharp4File,pipaDSharpQuarterSharp4File,pipaE4File,pipaEQuarterSharp4File,pipaF4File,pipaFQuarterSharp4File,pipaFSharp4File,pipaFSharpQuarterSharp4File,pipaG4File,pipaGQuarterSharp4File,pipaGSharp4File,pipaGSharpQuarterSharp4File,pipaA4File,pipaAQuarterSharp4File,pipaASharp4File,pipaASharpQuarterSharp4File,pipaB4File,pipaBQuarterSharp4File,pipaC5File];
  const pipaCMaqamBayati = [pipaC4File,pipaCSharpQuarterSharp4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaGSharp4File,pipaASharp4File,pipaC5File];

  const CMajor = [pipaCMajor, woodkeysCMajor, sineBassCMajor, drums];
  const CMinor = [pipaCMinor, woodkeysCMinor, sineBassCMinor,  drums];
  const CDorian = [pipaCDorian, woodkeysCDorian, sineBassCDorian,  drums];
  const CPhyrgian = [pipaCPhyrgian, woodkeysCPhyrgian, sineBassCPhyrgian,  drums];
  const CLydian = [pipaCLydian, woodkeysCLydian, sineBassCLydian,  drums];
  const CMixolodian = [pipaCMixolodian, woodkeysCMixolodian, sineBassCMixolodian,  drums];
  const CLocrian = [pipaCLocrian, woodkeysCLocrian, sineBassCLocrian,  drums];
  const CMaqamBayati = [pipaCMaqamBayati, woodkeysCMaqamBayati, sineBassCMaqamBayati,  drums];
  const allScalesObject = [CMajor,CMinor,CDorian,CPhyrgian,CLydian,CMixolodian,CLocrian,CMaqamBayati];

  let majorDescription = "The major scale creates an uplifting, innocent, happy, and upbeat mood. You hear it in pop music, children's music, and gospel.";
  let minorDescription = "The minor scale evokes sadness, regret, resentment, and despair. It is used in rock, blues, and ballads.";
  let dorianDescription = "The dorian scale sounds melancholic but brighter and more positive than the more common minor scale. It is used in lots of Celtic and Irish music, as well as genres that are influenced by Celtic and Irish music, such as Folk, Country, Blues, and Bluegrass";
  let phyrgianDescription = "The phrygian scale has a mysterious and exotic sound that leaves the listener uncertain of what they are hearing. It can create a sense of mystery, dread, tension, and an impending negative event. It is used in film scores, and flamenco and Middle Eastern music.";
  let lydianDescription = "The lydian scale has a kind of 'dreamy sound' and largely shares the same sounds and uses as the major scale for happy, pop, and children's music.";
  let mixolodianDescription = "The mixolodian scale is a bluesier version of the major scale. It appears a lot in rock and country songs in major scales, especially in solos and bridges. ";
  let locrianDescription = "The locrian scale has a sense of brooding, anger, and sadness. It is very tense sounding, and used in heavy metal and classical music.";
  let chromaticDescription = "The chromatic scale is a musical scale that uses all the musical pitches. The sensation of listening to a downward chromatic scale feels like falling in out-of-control spiral, while an upward chromatic scale sounds like a runaway train.";
  let twentyFourToneDescription = "The 24 tone equal temperament system divides the octave into 24 equal parts of exactly 50 cents each. It is also known as quarter-tone tuning, since it evenly divides the 12-tone equal tempered semitone in two.";
  let maqamBayatiDescription = "Bayati is similar to a natural minor scale, with the primary exception of a half-flat second degree. The maqam is immensely popular in the Arab world, particularly in the Levant. In secular settings, it is favored in dabke and pop music.";

  const cChromaticC5toC4 = [C5Pic, B4Pic, ASharp4Pic, A4Pic, GSharp4Pic, G4Pic, FSharp4Pic, F4Pic, E4Pic, DSharp4Pic, D4Pic, CSharp4Pic, C4Pic];
  const cChromaticC2toC1 = [C2Pic, B1Pic, ASharp1Pic, A1Pic, GSharp1Pic, G4Pic, FSharp1Pic, F1Pic, E1Pic, DSharp1Pic, D1Pic, CSharp1Pic, C1Pic];

  const cMajorC5toC4 = [C5Pic, B4Pic, A4Pic,  G4Pic, F4Pic,E4Pic,D4Pic,C4Pic];
  const cMajorC2toC1 = [C2Pic, B1Pic, A1Pic, G1Pic, F1Pic, E1Pic, D1Pic, C1Pic];
  const cMinorC5toC4 = [C5Pic, BFlat4Pic, AFlat4Pic,  G4Pic, F4Pic,EFlat4Pic,D4Pic,C4Pic];
  const cMinorC2toC1 = [C2Pic, BFlat1Pic, AFlat1Pic, G1Pic, F1Pic, EFlat1Pic, D1Pic, C1Pic];
  const cDorianC5toC4 = [C5Pic, BFlat4Pic, A4Pic,  G4Pic, F4Pic,EFlat4Pic,D4Pic,C4Pic];
  const cDorianC2toC1 = [C2Pic, BFlat1Pic, A1Pic, G1Pic, F1Pic, EFlat1Pic, D1Pic, C1Pic];
  const cPhyrgianC5toC4 = [C5Pic, BFlat4Pic, AFlat4Pic,  G4Pic, F4Pic,EFlat4Pic,DFlat4Pic,C4Pic];
  const cPhyrgianC2toC1 = [C2Pic, BFlat1Pic, AFlat1Pic, G1Pic, F1Pic, EFlat1Pic, DFlat1Pic, C1Pic];
  const cMixolodianC5toC4 = [C5Pic, BFlat4Pic, A4Pic,  G4Pic, F4Pic,E4Pic,D4Pic,C4Pic];
  const cMixolodianC2toC1 = [C2Pic, BFlat1Pic, A1Pic, G1Pic, F1Pic, E1Pic, D1Pic, C1Pic];
  const cLydianC5toC4 = [C5Pic, B4Pic, A4Pic,  G4Pic, FSharp4Pic,E4Pic,D4Pic,C4Pic];
  const cLydianC2toC1 = [C2Pic, B1Pic, A1Pic, G1Pic, FSharp1Pic, E1Pic, D1Pic, C1Pic];
  const cLocrianC5toC4 = [C5Pic, BFlat4Pic, AFlat4Pic,  GFlat4Pic, F4Pic,EFlat4Pic,DFlat4Pic,C4Pic];
  const cLocrianC2toC1 = [C2Pic, BFlat1Pic, AFlat1Pic, GFlat1Pic, F1Pic, EFlat1Pic, DFlat1Pic, C1Pic];
  const c24ToneC5toC4 = [
    MicrotonalC5Pic, MicrotonalCd4Pic, MicrotonalB4Pic, MicrotonalBd4Pic,
    MicrotonalBb4Pic, MicrotonalBdb4Pic, MicrotonalA4Pic, MicrotonalAd4Pic,
    MicrotonalAb4Pic, MicrotonalAdb4Pic, MicrotonalG4Pic, MicrotonalGd4Pic,
    MicrotonalGb4Pic, MicrotonalGdb4Pic, MicrotonalF4Pic, MicrotonalFd4Pic,
    MicrotonalE4Pic, MicrotonalEd4Pic,
    MicrotonalEb4Pic, MicrotonalEdb4Pic, MicrotonalD4Pic, MicrotonalDd4Pic,
    MicrotonalDb4Pic, MicrotonalDdb4Pic, MicrotonalC4Pic
    
  ];
  const c24ToneC2toC1 = [
    MicrotonalC2Pic, MicrotonalCd1Pic, MicrotonalB1Pic, MicrotonalBd1Pic,
    MicrotonalBb1Pic, MicrotonalBdb1Pic, MicrotonalA1Pic, MicrotonalAd1Pic,
    MicrotonalAb1Pic, MicrotonalAdb1Pic, MicrotonalG1Pic, MicrotonalGd1Pic,
    MicrotonalGb1Pic, MicrotonalGdb1Pic, MicrotonalF1Pic, MicrotonalFd1Pic,
    MicrotonalE1Pic, MicrotonalEd1Pic,
    MicrotonalEb1Pic, MicrotonalEdb1Pic, MicrotonalD1Pic, MicrotonalDd1Pic,
    MicrotonalDb1Pic, MicrotonalDdb1Pic, MicrotonalC1Pic
  ];
  const cMaqamBayatiC5toC4 = [C5Pic, BFlat4Pic, AFlat4Pic,  G4Pic, F4Pic,EFlat4Pic,MicrotonalDd4Pic,C4Pic];
  const cMaqamBayatiC2toC1 = [C2Pic, BFlat1Pic, AFlat1Pic, G1Pic, F1Pic, EFlat1Pic, MicrotonalDd1Pic, C1Pic];

  const drumSet = [kickPic,snarePic,hihatPic,cymbalPic];
  let pause = false;
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  // const [displayScales, setDisplayScales] = useState(false);
  // const [scaleToUse, setScaleToUse] = useState(0);
  return (
    <div className="App">

    
      <div className="nav">
        <h1>Online Digital Audio Workstation</h1>
        <h2>How to Use</h2>
        <h2 id="about-me">About me</h2>
      </div>
      

      {/* <Link to="/CMajor">Major</Link>
      <Link to="/CMinor">Minor</Link>
      <Link to="/CDorian">Dorian</Link>
      <Link to="/CPhyrgian">Phyrgian</Link>
      <Link to="/CLydian">Lydian</Link>
      <Link to="/CMixolodian">Mixolodian</Link>
      <Link to="/CLocrian">Locrian</Link>
      <Link to="/CMaqamBayati">Maqam Bayati</Link>
      <Link to="/CChromatic">Chromatic</Link>
      <Link to="/C24Tone">24Tone</Link> */}

      {/* <div id="scales-dropdown">
        <button onClick={function (e) { e.preventDefault(); setDisplayScales(!displayScales) }}>Major</button>
        {displayScales ?  <ul>
          <li onClick={function (e) { e.preventDefault();setScaleToUse(0) }}>Major</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(1) }}>Minor</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(2) }}>Dorian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(3) }}>Phrygian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(4) }}>Lydian</li>
        <li onClick={function (e) { e.preventDefault();setScaleToUse(5) }}>Mixolodian</li>
          <li onClick={function (e) { e.preventDefault(); setScaleToUse(6) }}>Locrian</li>
          <li onClick={function (e) { e.preventDefault();setScaleToUse(7) }}>Maqam Bayati</li>
        </ul>: null}
     
      </div> */}
      <Route exact path="/">
        <MusicMachineDiatonicButtons cScaleC5toC4={cMajorC5toC4} cScaleC2toC1={cMajorC2toC1} drumSet={drumSet} beatNumbersPics={beatNumbersPics} name={"The major scale"} description={majorDescription} Tone={Tone} drums={drums} bass={bassCMajor} organ={organCMajor} violin={violinCMajor} pipa={pipaCMajor} woodkeys={woodkeysCMajor} sinebass={sineBassCMajor}
          instrumentObject={allScalesObject}
          // scaleToUse={scaleToUse}
        />
      </Route>
      <Route exact path="/CMajor">
        <MusicMachineDiatonic  cScaleC5toC4={cMajorC5toC4} cScaleC2toC1={cMajorC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The major scale"} description={majorDescription} Tone={Tone} drums={drums} bass={bassCMajor} organ={organCMajor} violin={violinCMajor} pipa={pipaCMajor} woodkeys={woodkeysCMajor} sinebass={sineBassCMajor} />
      </Route>
      <Route exact path="/CMinor">
        <MusicMachineDiatonic   cScaleC5toC4={ cMinorC5toC4} cScaleC2toC1={cMinorC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The minor scale"} description={minorDescription} Tone={Tone} drums={drums} bass={bassCMinor} organ={organCMajor} violin={violinCMajor} pipa={pipaCMinor} woodkeys={woodkeysCMinor} sinebass={sineBassCMinor}/>
      </Route>
      <Route exact path="/CDorian">
        <MusicMachineDiatonic   cScaleC5toC4={ cDorianC5toC4} cScaleC2toC1={cDorianC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The dorian scale"} description={dorianDescription} Tone={Tone} drums={drums} bass={bassCDorian} organ={organCMajor} violin={violinCMajor} pipa={pipaCDorian} woodkeys={woodkeysCDorian} sinebass={sineBassCDorian}/>
      </Route>
      <Route exact path="/CPhyrgian">
        <MusicMachineDiatonic  cScaleC5toC4={ cPhyrgianC5toC4} cScaleC2toC1={cPhyrgianC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The phyrgian scale"} description={phyrgianDescription} Tone={Tone} drums={drums} bass={bassCPhyrgian} organ={organCMajor} violin={violinCMajor} pipa={pipaCPhyrgian} woodkeys={woodkeysCPhyrgian} sinebass={sineBassCPhyrgian}/>
      </Route>
      <Route exact path="/CLydian">
        <MusicMachineDiatonic   cScaleC5toC4={ cLydianC5toC4} cScaleC2toC1={cLydianC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The lydian scale"} description={lydianDescription} Tone={Tone} drums={drums} bass={bassCLydian} organ={organCMajor} violin={violinCMajor} pipa={pipaCLydian} woodkeys={woodkeysCLydian} sinebass={sineBassCLydian}/>
      </Route>
      <Route exact path="/CMixolodian">
        <MusicMachineDiatonic   cScaleC5toC4={ cMixolodianC5toC4} cScaleC2toC1={cMixolodianC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The mixolodian scale"} description={mixolodianDescription} Tone={Tone} drums={drums} bass={bassCMixolodian} organ={organCMajor} violin={violinCMajor}pipa={pipaCMixolodian} woodkeys={woodkeysCMixolodian} sinebass={sineBassCMixolodian}/>
      </Route>
      <Route exact path="/CLocrian">
        <MusicMachineDiatonic   cScaleC5toC4={ cLocrianC5toC4} cScaleC2toC1={cLocrianC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The locrian scale"} description={locrianDescription} Tone={Tone} drums={drums} bass={bassCLocrian} organ={organCMajor} violin={violinCMajor} pipa={pipaCLocrian} woodkeys={woodkeysCLocrian} sinebass={sineBassCLocrian}/>
      </Route>
      <Route exact path="/CMaqamBayati">
        <MusicMachineDiatonic   cScaleC5toC4={ cMaqamBayatiC5toC4} cScaleC2toC1={cMaqamBayatiC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The Maqam Bayati scale"} description={maqamBayatiDescription} Tone={Tone} drums={drums} bass={sineBassCMaqamBayati} organ={organCMajor} violin={violinCMajor} pipa={pipaCMaqamBayati} woodkeys={woodkeysCMaqamBayati} sinebass={sineBassCMaqamBayati}/>
      </Route>
      <Route exact path="/CChromatic">
        <MusicMachineChromatic   cScaleC5toC4={ cChromaticC5toC4} cScaleC2toC1={cChromaticC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The locrian scale"} description={chromaticDescription} Tone={Tone} drums={drums} bass={bassCChromatic} organ={organCMajor} violin={violinCMajor} pipa={pipaCChromatic} woodkeys={woodkeysCChromatic} sinebass={sineBassCChromatic}/>
      </Route>
      <Route exact path="/C24Tone">
        <MusicMachine24Tone  cScaleC5toC4={ c24ToneC5toC4} cScaleC2toC1={c24ToneC2toC1} drumSet={drumSet} beatNumbersPics={ beatNumbersPics} name={"The locrian scale"} description={twentyFourToneDescription} Tone={Tone} drums={drums} bass={sineBassC24Tone} organ={organCMajor} violin={violinCMajor} pipa={pipaC24Tone} woodkeys={woodkeysC24Tone} sinebass={sineBassC24Tone}/>
      </Route>


    </div>
  );
}

export default App;
