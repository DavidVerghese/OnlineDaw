import React, { useState, useEffect } from 'react';

function MusicMachineChromatic(props) {

  let pause = false;
  const [beatNumber, setBeatNumber] = useState(0);
  const [bpmValue, setBpmValue] = useState(60);
  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
  const violin = props.violin;
  const pipa = props.pipa;
  const drums = props.drums;
  const Tone = props.Tone;
  Tone.Transport.bpm.value = bpmValue;


  function sequencer() {



    if (!pause) {
      Tone.start();

      const kick = new Tone.Player(drums[0]).toDestination();
      const snare = new Tone.Player(drums[1]).toDestination();
      const hihat = new Tone.Player(drums[2]).toDestination();
      const crashcymbal = new Tone.Player(drums[3]).toDestination();

      const bassOctave = new Tone.Player(bass[12]).toDestination();
      const bassMajorSeventh = new Tone.Player(bass[11]).toDestination();
      const bassMinorSeventh = new Tone.Player(bass[10]).toDestination();
      const bassMajorSixth = new Tone.Player(bass[9]).toDestination();
      const bassMinorSixth = new Tone.Player(bass[8]).toDestination();
      const bassFifth = new Tone.Player(bass[7]).toDestination();
      const bassFlattedFifth = new Tone.Player(bass[6]).toDestination();
      const bassFourth = new Tone.Player(bass[5]).toDestination();
      const bassMajorThird = new Tone.Player(bass[4]).toDestination();
      const bassMinorThird = new Tone.Player(bass[3]).toDestination();
      const bassMajorSecond = new Tone.Player(bass[2]).toDestination();
      const bassMinorSecond = new Tone.Player(bass[1]).toDestination();
      const bassRoot = new Tone.Player(bass[0]).toDestination();

      const woodkeysOctave = new Tone.Player(woodkeys[12]).toDestination();
      const woodkeysMajorSeventh = new Tone.Player(woodkeys[11]).toDestination();
      const woodkeysMinorSeventh = new Tone.Player(woodkeys[10]).toDestination();
      const woodkeysMajorSixth = new Tone.Player(woodkeys[9]).toDestination();
      const woodkeysMinorSixth = new Tone.Player(woodkeys[8]).toDestination();
      const woodkeysFifth = new Tone.Player(woodkeys[7]).toDestination();
      const woodkeysFlattedFifth = new Tone.Player(woodkeys[6]).toDestination();
      const woodkeysFourth = new Tone.Player(woodkeys[5]).toDestination();
      const woodkeysMajorThird = new Tone.Player(woodkeys[4]).toDestination();
      const woodkeysMinorThird = new Tone.Player(woodkeys[3]).toDestination();
      const woodkeysMajorSecond = new Tone.Player(woodkeys[2]).toDestination();
      const woodkeysMinorSecond = new Tone.Player(woodkeys[1]).toDestination();
      const woodkeysRoot = new Tone.Player(woodkeys[0]).toDestination();

      const pipaOctave = new Tone.Player(pipa[12]).toDestination();
      const pipaMajorSeventh = new Tone.Player(pipa[11]).toDestination();
      const pipaMinorSeventh = new Tone.Player(pipa[10]).toDestination();
      const pipaMajorSixth = new Tone.Player(pipa[9]).toDestination();
      const pipaMinorSixth = new Tone.Player(pipa[8]).toDestination();
      const pipaFifth = new Tone.Player(pipa[7]).toDestination();
      const pipaFlattedFifth = new Tone.Player(pipa[6]).toDestination();
      const pipaFourth = new Tone.Player(pipa[5]).toDestination();
      const pipaMajorThird = new Tone.Player(pipa[4]).toDestination();
      const pipaMinorThird = new Tone.Player(pipa[3]).toDestination();
      const pipaMajorSecond = new Tone.Player(pipa[2]).toDestination();
      const pipaMinorSecond = new Tone.Player(pipa[1]).toDestination();
      const pipaRoot = new Tone.Player(pipa[0]).toDestination();

      let index = 0;
      Tone.Transport.scheduleRepeat(repeat, '32n');
      Tone.Transport.start();
      function repeat() {
        let step = index % 32;

        setBeatNumber(Math.floor(step/4)+1);

        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
        let crashCymbalInputs = document.querySelector(`.crashcymbal input:nth-child(${step + 1})`);

        let bassOctaveInputs = document.querySelector(`.bass-octave input:nth-child(${step + 1})`);
        let bassMajorSeventhInputs = document.querySelector(`.bass-majorseventh input:nth-child(${step + 1})`);
        let bassMinorSeventhInputs = document.querySelector(`.bass-minorseventh input:nth-child(${step + 1})`);
        let bassMajorSixthInputs = document.querySelector(`.bass-majorsixth input:nth-child(${step + 1})`);
        let bassMinorSixthInputs = document.querySelector(`.bass-minorsixth input:nth-child(${step + 1})`);
        let bassFifthInputs = document.querySelector(`.bass-fifth input:nth-child(${step + 1})`);
        let bassFlattedFifthInputs = document.querySelector(`.bass-flattedfifth input:nth-child(${step + 1})`);
        let bassFourthInputs = document.querySelector(`.bass-fourth input:nth-child(${step + 1})`);
        let bassMajorThirdInputs = document.querySelector(`.bass-majorthird input:nth-child(${step + 1})`);
        let bassMinorThirdInputs = document.querySelector(`.bass-minorthird input:nth-child(${step + 1})`);
        let bassMajorSecondInputs = document.querySelector(`.bass-majorsecond input:nth-child(${step + 1})`);
        let bassMinorSecondInputs = document.querySelector(`.bass-minorsecond input:nth-child(${step + 1})`);
        let bassRootInputs = document.querySelector(`.bass-root input:nth-child(${step + 1})`);

        let woodkeysOctaveInputs = document.querySelector(`.woodkeys-octave input:nth-child(${step + 1})`);
        let woodkeysMajorSeventhInputs = document.querySelector(`.woodkeys-majorseventh input:nth-child(${step + 1})`);
        let woodkeysMinorSeventhInputs = document.querySelector(`.woodkeys-minorseventh input:nth-child(${step + 1})`);
        let woodkeysMajorSixthInputs = document.querySelector(`.woodkeys-majorsixth input:nth-child(${step + 1})`);
        let woodkeysMinorSixthInputs = document.querySelector(`.woodkeys-minorsixth input:nth-child(${step + 1})`);
        let woodkeysFifthInputs = document.querySelector(`.woodkeys-fifth input:nth-child(${step + 1})`);
        let woodkeysFlattedFifthInputs = document.querySelector(`.woodkeys-flattedfifth input:nth-child(${step + 1})`);
        let woodkeysFourthInputs = document.querySelector(`.woodkeys-fourth input:nth-child(${step + 1})`);
        let woodkeysMajorThirdInputs = document.querySelector(`.woodkeys-majorthird input:nth-child(${step + 1})`);
        let woodkeysMinorThirdInputs = document.querySelector(`.woodkeys-minorthird input:nth-child(${step + 1})`);
        let woodkeysMajorSecondInputs = document.querySelector(`.woodkeys-majorsecond input:nth-child(${step + 1})`);
        let woodkeysMinorSecondInputs = document.querySelector(`.woodkeys-minorsecond input:nth-child(${step + 1})`);
        let woodkeysRootInputs = document.querySelector(`.woodkeys-root input:nth-child(${step + 1})`);

        let pipaOctaveInputs = document.querySelector(`.pipa-octave input:nth-child(${step + 1})`);
        let pipaMajorSeventhInputs = document.querySelector(`.pipa-majorseventh input:nth-child(${step + 1})`);
        let pipaMinorSeventhInputs = document.querySelector(`.pipa-minorseventh input:nth-child(${step + 1})`);
        let pipaMajorSixthInputs = document.querySelector(`.pipa-majorsixth input:nth-child(${step + 1})`);
        let pipaMinorSixthInputs = document.querySelector(`.pipa-minorsixth input:nth-child(${step + 1})`);
        let pipaFifthInputs = document.querySelector(`.pipa-fifth input:nth-child(${step + 1})`);
        let pipaFlattedFifthInputs = document.querySelector(`.pipa-flattedfifth input:nth-child(${step + 1})`);
        let pipaFourthInputs = document.querySelector(`.pipa-fourth input:nth-child(${step + 1})`);
        let pipaMajorThirdInputs = document.querySelector(`.pipa-majorthird input:nth-child(${step + 1})`);
        let pipaMinorThirdInputs = document.querySelector(`.pipa-minorthird input:nth-child(${step + 1})`);
        let pipaMajorSecondInputs = document.querySelector(`.pipa-majorsecond input:nth-child(${step + 1})`);
        let pipaMinorSecondInputs = document.querySelector(`.pipa-minorsecond input:nth-child(${step + 1})`);
        let pipaRootInputs = document.querySelector(`.pipa-root input:nth-child(${step + 1})`);

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

        if (bassOctaveInputs.checked) {
          bassOctave.start();
        }
        if (bassMajorSeventhInputs.checked) {
          bassMajorSeventh.start();
        }
        if (bassMinorSeventhInputs.checked) {
          bassMinorSeventh.start();
        }
        if (bassMajorSixthInputs.checked) {
          bassMajorSixth.start();
        }
        if (bassMinorSixthInputs.checked) {
          bassMinorSixth.start();
        }
        if (bassFifthInputs.checked) {
          bassFifth.start();
        }
        if (bassFlattedFifthInputs.checked) {
          bassFlattedFifth.start();
        }
        if (bassFourthInputs.checked) {
          bassFourth.start();
        }
        if (bassMajorThirdInputs.checked) {
          bassMajorThird.start();
        }
        if (bassMinorThirdInputs.checked) {
          bassMinorThird.start();
        }
        if (bassMajorSecondInputs.checked) {
          bassMajorSecond.start();
        }
        if (bassMinorSecondInputs.checked) {
          bassMinorSecond.start();
        }
        if (bassRootInputs.checked) {
          bassRoot.start();
        }

        if (woodkeysOctaveInputs.checked) {
          woodkeysOctave.start();
        }
        if (woodkeysMajorSeventhInputs.checked) {
          woodkeysMajorSeventh.start();
        }
        if (woodkeysMinorSeventhInputs.checked) {
          woodkeysMinorSeventh.start();
        }
        if (woodkeysMajorSixthInputs.checked) {
          woodkeysMajorSixth.start();
        }
        if (woodkeysMinorSixthInputs.checked) {
          woodkeysMinorSixth.start();
        }
        if (woodkeysFifthInputs.checked) {
          woodkeysFifth.start();
        }
        if (woodkeysFlattedFifthInputs.checked) {
          woodkeysFlattedFifth.start();
        }
        if (woodkeysFourthInputs.checked) {
          woodkeysFourth.start();
        }
        if (woodkeysMajorThirdInputs.checked) {
          woodkeysMajorThird.start();
        }
        if (woodkeysMinorThirdInputs.checked) {
          woodkeysMinorThird.start();
        }
        if (woodkeysMajorSecondInputs.checked) {
          woodkeysMajorSecond.start();
        }
        if (woodkeysMinorSecondInputs.checked) {
          woodkeysMinorSecond.start();
        }
        if (woodkeysRootInputs.checked) {
          woodkeysRoot.start();
        }

        if (pipaOctaveInputs.checked) {
          pipaOctave.start();
        }
        if (pipaMajorSeventhInputs.checked) {
          pipaMajorSeventh.start();
        }
        if (pipaMinorSeventhInputs.checked) {
          pipaMinorSeventh.start();
        }
        if (pipaMajorSixthInputs.checked) {
          pipaMajorSixth.start();
        }
        if (pipaMinorSixthInputs.checked) {
          pipaMinorSixth.start();
        }
        if (pipaFifthInputs.checked) {
          pipaFifth.start();
        }
        if (pipaFlattedFifthInputs.checked) {
          pipaFlattedFifth.start();
        }
        if (pipaFourthInputs.checked) {
          pipaFourth.start();
        }
        if (pipaMajorThirdInputs.checked) {
          pipaMajorThird.start();
        }
        if (pipaMinorThirdInputs.checked) {
          pipaMinorThird.start();
        }
        if (pipaMajorSecondInputs.checked) {
          pipaMajorSecond.start();
        }
        if (pipaMinorSecondInputs.checked) {
          pipaMinorSecond.start();
        }
        if (pipaRootInputs.checked) {
          pipaRoot.start();
        }
        index++;
      }
      console.log(document.querySelector("#start"));
    }
  }

  return (<div>
      <div className="nav">
      <h2>Virtual Digital Audio Workstation</h2>

      <p id="beatnumber">beat: {beatNumber}</p>
      

      <input type="text" id="tempo" placeholder="Default: 120bpm" onChange={(e) => {
        console.log(parseInt(e.target.value));
        if (parseInt(e.target.value) !== NaN && parseInt(e.target.value) < 1000 ) {
          // Tone.Transport.bpm.value = parseInt(e.target.value);
          setBpmValue(parseInt(e.target.value)/2);
          console.log(Tone.Transport.bpm.value);
        }
      }} />
      
      <div>

        </div>
        
        <button id="start" onClick={() => { pause = false; sequencer() }}>Start</button>
      </div>
      
    <h1>Chromatic</h1>
      <p>lots of notes</p>
     
      <h2>Pipa</h2>
      <div className="instrument-parent-div">
        <div className="instrument-pic-div">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41XFptskE-L._AC_SX425_.jpg" className="instrument-pic" />
      </div>
      <div className="note-names"><p>C5</p><p>B4</p><p>A#4</p><p>A4</p><p>G#4</p><p>G4</p><p>F#4</p><p>F4</p><p>E4</p><p>D#4</p><p>D4</p><p>C#4</p><p>C4</p></div>
      
        <div className="instrument-inputs">
        <div className="beat-numbers"><p>1 </p><p>2 </p><p> 3</p><p> 4</p><p> 5</p><p> 6</p><p> 7</p><p> 8</p> <p> 9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p> <p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p></div>
      
        <div className="note-div">
      
      <div className="pipa-octave">
      <input  className="pipa-octave-input" type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
            <input type="checkbox"></input> 
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            
            </div></div>
            <div className="note-div">
      
      <div className="pipa-majorseventh">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
        
          <div className="note-div">
          
          <div className="pipa-minorseventh">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
          </div></div>
        
            <div className="note-div">
          
      <div className="pipa-majorsixth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="pipa-minorsixth">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
          
      <div className="pipa-fifth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="pipa-flattedfifth">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
      <div className="pipa-fourth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
         
      <div className="pipa-majorthird">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="pipa-minorthird">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
         
      <div className="pipa-majorsecond">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          
          <div className="pipa-minorsecond">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
          </div></div>
        
        <div className="note-div">
          
          
      <div className="pipa-root">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
        </div></div>
        </div>
      </div>

      <h2>Synthesizer</h2>
      <div className="instrument-parent-div">
      <div className="instrument-pic-div"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/R.A.Moog_minimoog_2.jpg" className="instrument-pic" /></div>
      <div className="note-names"><p>C5</p><p>B4</p><p>A#4</p><p>A4</p><p>G#4</p><p>G4</p><p>F#4</p><p>F4</p><p>E4</p><p>D#4</p><p>D4</p><p>C#4</p><p>C4</p></div>
      <div className="instrument-inputs">
      <div className="beat-numbers"><p>1 </p><p>2 </p><p> 3</p><p> 4</p><p> 5</p><p> 6</p><p> 7</p><p> 8</p> <p> 9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p> <p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p></div>
      
          <div className="note-div">
          
      <div className="woodkeys-octave">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
         
      <div className="woodkeys-majorseventh">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
            
            <div className="note-div">
         
         <div className="woodkeys-minorseventh">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input> 
           <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
      <div className="woodkeys-majorsixth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
         <div className="woodkeys-minorsixth">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input> 
           <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
      <div className="woodkeys-fifth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
         <div className="woodkeys-flattedfifth">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input> 
           <input type="checkbox"></input> 
               </div></div>
          <div className="note-div">
         
      <div className="woodkeys-fourth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
         <div className="woodkeys-majorthird">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input> 
           <input type="checkbox"></input> 
               </div></div>
          <div className="note-div">
         
      <div className="woodkeys-minorthird">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
         
      <div className="woodkeys-majorsecond">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
         
         <div className="woodkeys-minorsecond">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input> 
           <input type="checkbox"></input> 
               </div></div>
          <div className="note-div">
          
      <div className="woodkeys-root">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
        </div></div>
        </div>
      </div>

      <h2>Bass synth</h2>
      <div className="instrument-parent-div">
      <div className="instrument-pic-div"><img src="https://images-na.ssl-images-amazon.com/images/I/91GOFcGxXKL._AC_SL1500_.jpg" className="instrument-pic" /></div>
      <div className="note-names"><p>C5</p><p>B4</p><p>A#4</p><p>A4</p><p>G#4</p><p>G4</p><p>F#4</p><p>F4</p><p>E4</p><p>D#4</p><p>D4</p><p>C#4</p><p>C4</p></div>
      <div className="instrument-inputs">
      <div className="beat-numbers"><p>1 </p><p>2 </p><p> 3</p><p> 4</p><p> 5</p><p> 6</p><p> 7</p><p> 8</p> <p> 9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p> <p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p></div>
          <div className="note-div">
          
      <div className="bass-octave">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
          <div className="note-div">
          
          <div className="bass-majorseventh">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
         
      <div className="bass-minorseventh">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
         
      <div className="bass-majorsixth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="bass-minorsixth">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
         
      <div className="bass-fifth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="bass-flattedfifth">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
          
            <div className="bass-fourth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
         
      <div className="bass-majorthird">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="bass-minorthird">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
         
      <div className="bass-majorsecond">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
        
          <div className="note-div">
          
          <div className="bass-minorsecond">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input> 
            <input type="checkbox"></input> 
                </div></div>
          <div className="note-div">
         
      <div className="bass-root">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
        </div></div>
        </div>
      </div>
      <h2>Drums</h2>
      <div className="instrument-parent-div">
      <div className="instrument-pic-div"><img src="https://images-na.ssl-images-amazon.com/images/I/71nJgkQau1L._AC_SL1500_.jpg" className="instrument-pic" alt="drums"/></div>
      
      <div className="note-names"><p>Kick</p><p>Snare</p><p>Hihat</p><p>Cymbal</p></div>
        <div className="instrument-inputs">
        <div className="beat-numbers"><p>1 </p><p>2 </p><p> 3</p><p> 4</p><p> 5</p><p> 6</p><p> 7</p><p> 8</p> <p> 9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p> <p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p></div>
          <div className="note-div">

      <div className="kick">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">

      <div className="snare">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">

      <div className="hihat">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
            </div></div>
          <div className="note-div">
   
            <div className="crashcymbal">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input> 
        <input type="checkbox"></input> 
          </div></div>
          </div>
        </div>
  </div>)
}
export default MusicMachineChromatic