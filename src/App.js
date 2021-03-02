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
  const violinCMajor = [violinC4File, violinD4File, violinE4File, violinF4File, violinG4File, violinA4File, violinB4File, violinC5File];
  
  const pipaCMajor = [pipaC4File,pipaD4File,pipaE4File,pipaF4File,pipaG4File,pipaA4File,pipaB4File,pipaC5File];
  const pipaCMinor = [pipaC4File,pipaD4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCDorian = [pipaC4File,pipaD4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaA4File,pipaASharp4File,pipaC5File];
  const pipaCPhyrgian = [pipaC4File,pipaCSharp4File,pipaDSharp4File,pipaF4File,pipaG4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCLydian = [pipaC4File,pipaD4File,pipaE4File,pipaFSharp4File,pipaG4File,pipaA4File,pipaB4File,pipaC5File];
  const pipaCMixolodian = [pipaC4File,pipaD4File,pipaE4File,pipaF4File,pipaG4File,pipaA4File,pipaASharp4File,pipaC5File];
  const pipaCLocrian = [pipaC4File,pipaCSharp4File,pipaDSharp4File,pipaF4File,pipaFSharp4File,pipaGSharp4File,pipaASharp4File,pipaC5File];
  const pipaCChromatic = [pipaC4File,pipaCSharp4File,pipaD4File,pipaDSharp4File,pipaE4File,pipaF4File,pipaFSharp4File,pipaG4File,pipaGSharp4File,pipaA4File,pipaASharp4File,pipaB4File,pipaC5File];
  const pipaCQuarterTone = [pipaC4File,pipaCQuarterSharp4File,pipaCSharp4File,pipaCSharpQuarterSharp4File,pipaD4File,pipaDQuarterSharp4File,pipaDSharp4File,pipaDSharpQuarterSharp4File,pipaE4File,pipaEQuarterSharp4File,pipaF4File,pipaFQuarterSharp4File,pipaFSharp4File,pipaFSharpQuarterSharp4File,pipaG4File,pipaGQuarterSharp4File,pipaGSharp4File,pipaGSharpQuarterSharp4File,pipaA4File,pipaAQuarterSharp4File,pipaASharp4File,pipaASharpQuarterSharp4File,pipaB4File,pipaBQuarterSharp4File,pipaC5File];
  
  let majorDescription = "The major scale creates an uplifting, innocent, happy, and upbeat mood. You hear it in pop music, children's music, and gospel.";
  let minorDescription = "The minor scale evokes sadness, regret, resentment, and despair. It is used in rock, blues, and ballads.";
  let dorianDescription = "The dorian scale sounds melancholic but brighter and more positive than the more common minor scale. It is used in lots of Celtic and Irish music, as well as genres that are influenced by Celtic and Irish music, such as Folk, Country, Blues, and Bluegrass";
  let phyrgianDescription = "The phrygian scale has a mysterious and exotic sound that leaves the listener uncertain of what they are hearing. It can create a sense of mystery, dread, tension, and an impending negative event. It is used in film scores, and flamenco and Middle Eastern music.";
  let lydianDescription = "The lydian scale has a kind of 'dreamy sound' and largely shares the same sounds and uses as the major scale for happy, pop, and children's music.";
  let mixolodianDescription = "The mixolodian scale is a bluesier version of the major scale. It appears a lot in rock and country songs in major scales, especially in solos and bridges. ";
  let locrianDescription = "The locrian scale has a sense of brooding, anger, and sadness. It is very tense sounding, and used in heavy metal and classical music.";

  let pause = false;
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  
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
        <MusicMachine name={"The major scale"} description={majorDescription} Tone={Tone} drums={drums} bass={bassCMajor} organ={organCMajor} violin={violinCMajor} pipa={pipaCMajor} />
      </Route>
      <Route exact path="/CMinor">
        <MusicMachine name={"The minor scale"} description={minorDescription} Tone={Tone} drums={drums} bass={bassCMinor} organ={organCMajor} violin={violinCMajor} pipa={pipaCMinor} />
      </Route>
      <Route exact path="/CDorian">
        <MusicMachine name={"The dorian scale"} description={dorianDescription} Tone={Tone} drums={drums} bass={bassCDorian} organ={organCMajor} violin={violinCMajor} pipa={pipaCDorian}/>
      </Route>
      <Route exact path="/CPhyrgian">
        <MusicMachine name={"The phyrgian scale"} description={phyrgianDescription} Tone={Tone} drums={drums} bass={bassCPhyrgian} organ={organCMajor} violin={violinCMajor} pipa={pipaCPhyrgian} />
      </Route>
      <Route exact path="/CLydian">
        <MusicMachine name={"The lydian scale"} description={lydianDescription} Tone={Tone} drums={drums} bass={bassCLydian} organ={organCMajor} violin={violinCMajor} pipa={pipaCLydian}/>
      </Route>
      <Route exact path="/CMixolodian">
        <MusicMachine name={"The mixolodian scale"} description={mixolodianDescription} Tone={Tone} drums={drums} bass={bassCMixolodian} organ={organCMajor} violin={violinCMajor}pipa={pipaCMixolodian} />
      </Route>
      <Route exact path="/CLocrian">
        <MusicMachine name={"The locrian scale"} description={locrianDescription} Tone={Tone} drums={drums} bass={bassCLocrian} organ={organCMajor} violin={violinCMajor} pipa={pipaCLocrian}/>
      </Route>

    </div>
  );
}

export default App;
