import React, { useState, useEffect } from 'react';
function MusicMachine24Tone(props) {

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
  const [beatClassNamesOne,setBeatClassNamesOne] = useState('');
  const [beatClassNamesFive, setBeatClassNamesFive] = useState('');
  const [beatClassNamesNine, setBeatClassNamesNine] = useState('');
  const [beatClassNamesThirteen, setBeatClassNamesThirteen] = useState('');

  const kick = new Tone.Player(drums[0]).toDestination();
      const snare = new Tone.Player(drums[1]).toDestination();
      const hihat = new Tone.Player(drums[2]).toDestination();
      const crashcymbal = new Tone.Player(drums[3]).toDestination();

      const bassOctave = new Tone.Player(bass[24]).toDestination();
      const bassMajorSeventhQuarterSharp = new Tone.Player(bass[23]).toDestination();
      const bassMajorSeventh = new Tone.Player(bass[22]).toDestination();
      const bassMinorSeventhQuarterSharp = new Tone.Player(bass[21]).toDestination();
      const bassMinorSeventh = new Tone.Player(bass[20]).toDestination();
      const bassMajorSixthQuarterSharp = new Tone.Player(bass[19]).toDestination();
      const bassMajorSixth = new Tone.Player(bass[18]).toDestination();
      const bassMinorSixthQuarterSharp = new Tone.Player(bass[17]).toDestination();
      const bassMinorSixth = new Tone.Player(bass[16]).toDestination();
      const bassFifthQuarterSharp = new Tone.Player(bass[15]).toDestination();
      const bassFifth = new Tone.Player(bass[14]).toDestination();
      const bassFlattedFourthQuarterSharp = new Tone.Player(bass[13]).toDestination();
      const bassFlattedFourth = new Tone.Player(bass[12]).toDestination();
      const bassFourthQuarterSharp = new Tone.Player(bass[11]).toDestination();
      const bassFourth = new Tone.Player(bass[10]).toDestination();
      const bassMajorThirdQuarterSharp = new Tone.Player(bass[9]).toDestination();
      const bassMajorThird = new Tone.Player(bass[8]).toDestination();
      const bassMinorThirdQuarterSharp = new Tone.Player(bass[7]).toDestination();
      const bassMinorThird = new Tone.Player(bass[6]).toDestination();
      const bassMajorSecondQuarterSharp = new Tone.Player(bass[5]).toDestination();
      const bassMajorSecond = new Tone.Player(bass[4]).toDestination();
      const bassMinorSecondQuarterSharp = new Tone.Player(bass[3]).toDestination();
      const bassMinorSecond = new Tone.Player(bass[2]).toDestination();
      const bassRootQuarterSharp = new Tone.Player(bass[1]).toDestination();
      const bassRoot = new Tone.Player(bass[0]).toDestination();

      const woodkeysOctave = new Tone.Player(woodkeys[24]).toDestination();
      const woodkeysMajorSeventhQuarterSharp = new Tone.Player(woodkeys[23]).toDestination();
      const woodkeysMajorSeventh = new Tone.Player(woodkeys[22]).toDestination();
      const woodkeysMinorSeventhQuarterSharp = new Tone.Player(woodkeys[21]).toDestination();
      const woodkeysMinorSeventh = new Tone.Player(woodkeys[20]).toDestination();
      const woodkeysMajorSixthQuarterSharp = new Tone.Player(woodkeys[19]).toDestination();
      const woodkeysMajorSixth = new Tone.Player(woodkeys[18]).toDestination();
      const woodkeysMinorSixthQuarterSharp = new Tone.Player(woodkeys[17]).toDestination();
      const woodkeysMinorSixth = new Tone.Player(woodkeys[16]).toDestination();
      const woodkeysFifthQuarterSharp = new Tone.Player(woodkeys[15]).toDestination();
      const woodkeysFifth = new Tone.Player(woodkeys[14]).toDestination();
      const woodkeysFlattedFourthQuarterSharp = new Tone.Player(woodkeys[13]).toDestination();
      const woodkeysFlattedFourth = new Tone.Player(woodkeys[12]).toDestination();
      const woodkeysFourthQuarterSharp = new Tone.Player(woodkeys[11]).toDestination();
      const woodkeysFourth = new Tone.Player(woodkeys[10]).toDestination();
      const woodkeysMajorThirdQuarterSharp = new Tone.Player(woodkeys[9]).toDestination();
      const woodkeysMajorThird = new Tone.Player(woodkeys[8]).toDestination();
      const woodkeysMinorThirdQuarterSharp = new Tone.Player(woodkeys[7]).toDestination();
      const woodkeysMinorThird = new Tone.Player(woodkeys[6]).toDestination();
      const woodkeysMajorSecondQuarterSharp = new Tone.Player(woodkeys[5]).toDestination();
      const woodkeysMajorSecond = new Tone.Player(woodkeys[4]).toDestination();
      const woodkeysMinorSecondQuarterSharp = new Tone.Player(woodkeys[3]).toDestination();
      const woodkeysMinorSecond = new Tone.Player(woodkeys[2]).toDestination();
      const woodkeysRootQuarterSharp = new Tone.Player(woodkeys[1]).toDestination();
      const woodkeysRoot = new Tone.Player(woodkeys[0]).toDestination();

      const pipaOctave = new Tone.Player(pipa[24]).toDestination();
      const pipaMajorSeventhQuarterSharp = new Tone.Player(pipa[23]).toDestination();
      const pipaMajorSeventh = new Tone.Player(pipa[22]).toDestination();
      const pipaMinorSeventhQuarterSharp = new Tone.Player(pipa[21]).toDestination();
      const pipaMinorSeventh = new Tone.Player(pipa[20]).toDestination();
      const pipaMajorSixthQuarterSharp = new Tone.Player(pipa[19]).toDestination();
      const pipaMajorSixth = new Tone.Player(pipa[18]).toDestination();
      const pipaMinorSixthQuarterSharp = new Tone.Player(pipa[17]).toDestination();
      const pipaMinorSixth = new Tone.Player(pipa[16]).toDestination();
      const pipaFifthQuarterSharp = new Tone.Player(pipa[15]).toDestination();
      const pipaFifth = new Tone.Player(pipa[14]).toDestination();
      const pipaFlattedFourthQuarterSharp = new Tone.Player(pipa[13]).toDestination();
      const pipaFlattedFourth = new Tone.Player(pipa[12]).toDestination();
      const pipaFourthQuarterSharp = new Tone.Player(pipa[11]).toDestination();
      const pipaFourth = new Tone.Player(pipa[10]).toDestination();
      const pipaMajorThirdQuarterSharp = new Tone.Player(pipa[9]).toDestination();
      const pipaMajorThird = new Tone.Player(pipa[8]).toDestination();
      const pipaMinorThirdQuarterSharp = new Tone.Player(pipa[7]).toDestination();
      const pipaMinorThird = new Tone.Player(pipa[6]).toDestination();
      const pipaMajorSecondQuarterSharp = new Tone.Player(pipa[5]).toDestination();
      const pipaMajorSecond = new Tone.Player(pipa[4]).toDestination();
      const pipaMinorSecondQuarterSharp = new Tone.Player(pipa[3]).toDestination();
      const pipaMinorSecond = new Tone.Player(pipa[2]).toDestination();
      const pipaRootQuarterSharp = new Tone.Player(pipa[1]).toDestination();
      const pipaRoot = new Tone.Player(pipa[0]).toDestination(); 
  

  function sequencer() {
    if (!pause) {
      Tone.start();

      

      let index = 0;
      Tone.Transport.scheduleRepeat(repeat, '32n');
      Tone.Transport.start();
      function repeat() {
        let step = index % 32;

  

        setBeatNumber(Math.floor(step/2)+1);

        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
        let crashCymbalInputs = document.querySelector(`.crashcymbal input:nth-child(${step + 1})`);

        let bassOctaveInputs = document.querySelector(`.bass-octave input:nth-child(${step + 1})`);
        let bassMajorSeventhQuarterSharpInputs = document.querySelector(`.bass-majorseventhquartersharp input:nth-child(${step + 1})`);
        let bassMajorSeventhInputs = document.querySelector(`.bass-majorseventh input:nth-child(${step + 1})`);
        let bassMinorSeventhQuarterSharpInputs = document.querySelector(`.bass-minorseventhquartersharp input:nth-child(${step + 1})`);
        let bassMinorSeventhInputs = document.querySelector(`.bass-minorseventh input:nth-child(${step + 1})`);
        let bassMajorSixthQuarterSharpInputs = document.querySelector(`.bass-majorsixthquartersharp input:nth-child(${step + 1})`);
        let bassMajorSixthInputs = document.querySelector(`.bass-majorsixth input:nth-child(${step + 1})`);
        let bassMinorSixthQuarterSharpInputs = document.querySelector(`.bass-minorsixthquartersharp input:nth-child(${step + 1})`);
        let bassMinorSixthInputs = document.querySelector(`.bass-minorsixth input:nth-child(${step + 1})`);
        let bassFifthQuarterSharpInputs = document.querySelector(`.bass-fifthquartersharp input:nth-child(${step + 1})`);
        let bassFifthInputs = document.querySelector(`.bass-fifth input:nth-child(${step + 1})`);
        let bassFlattedFourthQuarterSharpInputs = document.querySelector(`.bass-flattedfourthquartersharp input:nth-child(${step + 1})`);
        let bassFlattedFourthInputs = document.querySelector(`.bass-flattedfourth input:nth-child(${step + 1})`);
        let bassFourthQuarterSharpSharpInputs = document.querySelector(`.bass-fourthquartersharp input:nth-child(${step + 1})`);
        let bassFourthInputs = document.querySelector(`.bass-fourth input:nth-child(${step + 1})`);
        let bassMajorThirdQuarterSharpInputs = document.querySelector(`.bass-majorthirdquartersharp input:nth-child(${step + 1})`);
        let bassMajorThirdInputs = document.querySelector(`.bass-majorthird input:nth-child(${step + 1})`);
        let bassMinorThirdQuarterSharpInputs = document.querySelector(`.bass-minorthirdquartersharp input:nth-child(${step + 1})`);
        let bassMinorThirdInputs = document.querySelector(`.bass-minorthird input:nth-child(${step + 1})`);
        let bassMajorSecondQuarterSharpInputs = document.querySelector(`.bass-majorsecondquartersharp input:nth-child(${step + 1})`);
        let bassMajorSecondInputs = document.querySelector(`.bass-majorsecond input:nth-child(${step + 1})`);
        let bassMinorSecondQuarterSharpInputs = document.querySelector(`.bass-minorsecondquartersharp input:nth-child(${step + 1})`);
        let bassMinorSecondInputs = document.querySelector(`.bass-minorsecond input:nth-child(${step + 1})`);
        let bassRootQuarterSharpInputs = document.querySelector(`.bass-rootquartersharp input:nth-child(${step + 1})`);
        let bassRootInputs = document.querySelector(`.bass-root input:nth-child(${step + 1})`);

        let woodkeysOctaveInputs = document.querySelector(`.woodkeys-octave input:nth-child(${step + 1})`);
        let woodkeysMajorSeventhQuarterSharpInputs = document.querySelector(`.woodkeys-majorseventhquartersharp input:nth-child(${step + 1})`);
        let woodkeysMajorSeventhInputs = document.querySelector(`.woodkeys-majorseventh input:nth-child(${step + 1})`);
        let woodkeysMinorSeventhQuarterSharpInputs = document.querySelector(`.woodkeys-minorseventhquartersharp input:nth-child(${step + 1})`);
        let woodkeysMinorSeventhInputs = document.querySelector(`.woodkeys-minorseventh input:nth-child(${step + 1})`);
        let woodkeysMajorSixthQuarterSharpInputs = document.querySelector(`.woodkeys-majorsixthquartersharp input:nth-child(${step + 1})`);
        let woodkeysMajorSixthInputs = document.querySelector(`.woodkeys-majorsixth input:nth-child(${step + 1})`);
        let woodkeysMinorSixthQuarterSharpInputs = document.querySelector(`.woodkeys-minorsixthquartersharp input:nth-child(${step + 1})`);
        let woodkeysMinorSixthInputs = document.querySelector(`.woodkeys-minorsixth input:nth-child(${step + 1})`);
        let woodkeysFifthQuarterSharpInputs = document.querySelector(`.woodkeys-fifthquartersharp input:nth-child(${step + 1})`);
        let woodkeysFifthInputs = document.querySelector(`.woodkeys-fifth input:nth-child(${step + 1})`);
        let woodkeysFlattedFourthQuarterSharpInputs = document.querySelector(`.woodkeys-flattedfourthquartersharp input:nth-child(${step + 1})`);
        let woodkeysFlattedFourthInputs = document.querySelector(`.woodkeys-flattedfourth input:nth-child(${step + 1})`);
        let woodkeysFourthQuarterSharpInputs = document.querySelector(`.woodkeys-fourthquartersharp input:nth-child(${step + 1})`);
        let woodkeysFourthInputs = document.querySelector(`.woodkeys-fourth input:nth-child(${step + 1})`);
        let woodkeysMajorThirdQuarterSharpInputs = document.querySelector(`.woodkeys-majorthirdquartersharp input:nth-child(${step + 1})`);
        let woodkeysMajorThirdInputs = document.querySelector(`.woodkeys-majorthird input:nth-child(${step + 1})`);
        let woodkeysMinorThirdQuarterSharpInputs = document.querySelector(`.woodkeys-minorthirdquartersharp input:nth-child(${step + 1})`);
        let woodkeysMinorThirdInputs = document.querySelector(`.woodkeys-minorthird input:nth-child(${step + 1})`);
        let woodkeysMajorSecondQuarterSharpInputs = document.querySelector(`.woodkeys-majorsecondquartersharp input:nth-child(${step + 1})`);
        let woodkeysMajorSecondInputs = document.querySelector(`.woodkeys-majorsecond input:nth-child(${step + 1})`);
        let woodkeysMinorSecondQuarterSharpInputs = document.querySelector(`.woodkeys-minorsecondquartersharp input:nth-child(${step + 1})`);
        let woodkeysMinorSecondInputs = document.querySelector(`.woodkeys-minorsecond input:nth-child(${step + 1})`);
        let woodkeysRootQuarterSharpInputs = document.querySelector(`.woodkeys-rootquartersharp input:nth-child(${step + 1})`);
        let woodkeysRootInputs = document.querySelector(`.woodkeys-root input:nth-child(${step + 1})`);

        let pipaOctaveInputs = document.querySelector(`.pipa-octave input:nth-child(${step + 1})`);
        let pipaMajorSeventhQuarterSharpInputs = document.querySelector(`.pipa-majorseventhquartersharp input:nth-child(${step + 1})`);
        let pipaMajorSeventhInputs = document.querySelector(`.pipa-majorseventh input:nth-child(${step + 1})`);
        let pipaMinorSeventhQuarterSharpInputs = document.querySelector(`.pipa-minorseventhquartersharp input:nth-child(${step + 1})`);
        let pipaMinorSeventhInputs = document.querySelector(`.pipa-minorseventh input:nth-child(${step + 1})`);
        let pipaMajorSixthQuarterSharpInputs = document.querySelector(`.pipa-majorsixthquartersharp input:nth-child(${step + 1})`);
        let pipaMajorSixthInputs = document.querySelector(`.pipa-majorsixth input:nth-child(${step + 1})`);
        let pipaMinorSixthQuarterSharpInputs = document.querySelector(`.pipa-minorsixthquartersharp input:nth-child(${step + 1})`);
        let pipaMinorSixthInputs = document.querySelector(`.pipa-minorsixth input:nth-child(${step + 1})`);
        let pipaFifthQuarterSharpInputs = document.querySelector(`.pipa-fifthquartersharp input:nth-child(${step + 1})`);
        let pipaFifthInputs = document.querySelector(`.pipa-fifth input:nth-child(${step + 1})`);
        let pipaFlattedFourthQuarterSharpInputs = document.querySelector(`.pipa-flattedfourthquartersharp input:nth-child(${step + 1})`);
        let pipaFlattedFourthInputs = document.querySelector(`.pipa-flattedfourth input:nth-child(${step + 1})`);
        let pipaFourthQuarterSharpInputs = document.querySelector(`.pipa-fourthquartersharp input:nth-child(${step + 1})`);
        let pipaFourthInputs = document.querySelector(`.pipa-fourth input:nth-child(${step + 1})`);
        let pipaMajorThirdQuarterSharpInputs = document.querySelector(`.pipa-majorthirdquartersharp input:nth-child(${step + 1})`);
        let pipaMajorThirdInputs = document.querySelector(`.pipa-majorthird input:nth-child(${step + 1})`);
        let pipaMinorThirdQuarterSharpInputs = document.querySelector(`.pipa-minorthirdquartersharp input:nth-child(${step + 1})`);
        let pipaMinorThirdInputs = document.querySelector(`.pipa-minorthird input:nth-child(${step + 1})`);
        let pipaMajorSecondQuarterSharpInputs = document.querySelector(`.pipa-majorsecondquartersharp input:nth-child(${step + 1})`);
        let pipaMajorSecondInputs = document.querySelector(`.pipa-majorsecond input:nth-child(${step + 1})`);
        let pipaMinorSecondQuarterSharpInputs = document.querySelector(`.pipa-minorsecondquartersharp input:nth-child(${step + 1})`);
        let pipaMinorSecondInputs = document.querySelector(`.pipa-minorsecond input:nth-child(${step + 1})`);
        let pipaRootQuarterSharpInputs = document.querySelector(`.pipa-rootquartersharp input:nth-child(${step + 1})`);
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
        if (bassMajorSeventhQuarterSharpInputs.checked) {
          bassMajorSeventhQuarterSharp.start();
        }
        if (bassMajorSeventhInputs.checked) {
          bassMajorSeventh.start();
        }
        if (bassMinorSeventhQuarterSharpInputs.checked) {
          bassMinorSeventhQuarterSharp.start();
        }
        if (bassMinorSeventhInputs.checked) {
          bassMinorSeventh.start();
        }
        if (bassMajorSixthQuarterSharpInputs.checked) {
          bassMajorSixthQuarterSharp.start();
        }
        if (bassMajorSixthInputs.checked) {
          bassMajorSixth.start();
        }
        if (bassMinorSixthQuarterSharpInputs.checked) {
          bassMinorSixthQuarterSharp.start();
        }
        if (bassMinorSixthInputs.checked) {
          bassMinorSixth.start();
        }
        if (bassFifthQuarterSharpInputs.checked) {
          bassFifthQuarterSharp.start();
        }
        if (bassFlattedFourthQuarterSharpInputs.checked) {
          bassFlattedFourthQuarterSharp.start();
        }
        if (bassFlattedFourthInputs.checked) {
          bassFlattedFourth.start();
        }
        if (bassMajorThirdQuarterSharpInputs.checked) {
          bassMajorThirdQuarterSharp.start();
        }
        if (bassMajorThirdInputs.checked) {
          bassMajorThird.start();
        }
        if (bassMinorThirdQuarterSharpInputs.checked) {
          bassMinorThirdQuarterSharp.start();
        }
        if (bassMinorThirdInputs.checked) {
          bassMinorThird.start();
        }
        if (bassMajorSecondQuarterSharpInputs.checked) {
          bassMajorSecondQuarterSharp.start();
        }
        if (bassMajorSecondInputs.checked) {
          bassMajorSecond.start();
        }
        if (bassMinorSecondQuarterSharpInputs.checked) {
          bassMinorSecondQuarterSharp.start();
        }
        if (bassMinorSecondInputs.checked) {
          bassMinorSecond.start();
        }
        if (bassRootQuarterSharpInputs.checked) {
          bassRootQuarterSharp.start();
        }
        if (bassRootInputs.checked) {
          bassRoot.start();
        }


        if (woodkeysOctaveInputs.checked) {
          woodkeysOctave.start();
        }
        if (woodkeysMajorSeventhQuarterSharpInputs.checked) {
          woodkeysMajorSeventhQuarterSharp.start();
        }
        if (woodkeysMajorSeventhInputs.checked) {
          woodkeysMajorSeventh.start();
        }
        if (woodkeysMinorSeventhQuarterSharpInputs.checked) {
          woodkeysMinorSeventhQuarterSharp.start();
        }
        if (woodkeysMinorSeventhInputs.checked) {
          woodkeysMinorSeventh.start();
        }
        if (woodkeysMajorSixthQuarterSharpInputs.checked) {
          woodkeysMajorSixthQuarterSharp.start();
        }
        if (woodkeysMajorSixthInputs.checked) {
          woodkeysMajorSixth.start();
        }
        if (woodkeysMinorSixthQuarterSharpInputs.checked) {
          woodkeysMinorSixthQuarterSharp.start();
        }
        if (woodkeysMinorSixthInputs.checked) {
          woodkeysMinorSixth.start();
        }
        if (woodkeysFifthQuarterSharpInputs.checked) {
          woodkeysFifthQuarterSharp.start();
        }
        if (woodkeysFifthInputs.checked) {
          woodkeysFifth.start();
        }
        if (woodkeysFlattedFourthQuarterSharpInputs.checked) {
          woodkeysFlattedFourthQuarterSharp.start();
        }
        if (woodkeysFlattedFourthInputs.checked) {
          woodkeysFlattedFourth.start();
        }
        if (woodkeysFourthQuarterSharpInputs.checked) {
          woodkeysFourthQuarterSharp.start();
        }
        if (woodkeysFourthInputs.checked) {
          woodkeysFourth.start();
        }
        if (woodkeysMajorThirdQuarterSharpInputs.checked) {
          woodkeysMajorThirdQuarterSharp.start();
        }
        if (woodkeysMajorThirdInputs.checked) {
          woodkeysMajorThird.start();
        }
        if (woodkeysMinorThirdQuarterSharpInputs.checked) {
          woodkeysMinorThirdQuarterSharp.start();
        }
        if (woodkeysMinorThirdInputs.checked) {
          woodkeysMinorThird.start();
        }
        if (woodkeysMajorSecondQuarterSharpInputs.checked) {
          woodkeysMajorSecondQuarterSharp.start();
        }
        if (woodkeysMajorSecondInputs.checked) {
          woodkeysMajorSecond.start();
        }
        if (woodkeysMinorSecondQuarterSharpInputs.checked) {
          woodkeysMinorSecondQuarterSharp.start();
        }
        if (woodkeysMinorSecondInputs.checked) {
          woodkeysMinorSecond.start();
        }
        if (woodkeysRootQuarterSharpInputs.checked) {
          woodkeysRootQuarterSharp.start();
        }
        if (woodkeysRootInputs.checked) {
          woodkeysRoot.start();
        }

        if (pipaOctaveInputs.checked) {
          pipaOctave.start();
        }
        if (pipaMajorSeventhQuarterSharpInputs.checked) {
          pipaMajorSeventhQuarterSharp.start();
        }
        if (pipaMajorSeventhInputs.checked) {
          pipaMajorSeventh.start();
        }
        if (pipaMinorSeventhQuarterSharpInputs.checked) {
          pipaMinorSeventhQuarterSharp.start();
        }
        if (pipaMinorSeventhInputs.checked) {
          pipaMinorSeventh.start();
        }
        if (pipaMajorSixthQuarterSharpInputs.checked) {
          pipaMajorSixthQuarterSharp.start();
        }
        if (pipaMajorSixthInputs.checked) {
          pipaMajorSixth.start();
        }
        if (pipaMinorSixthQuarterSharpInputs.checked) {
          pipaMinorSixthQuarterSharp.start();
        }
        if (pipaMinorSixthInputs.checked) {
          pipaMinorSixth.start();
        }
        if (pipaFifthQuarterSharpInputs.checked) {
          pipaFifthQuarterSharp.start();
        }
        if (pipaFifthInputs.checked) {
          pipaFifth.start();
        }
        if (pipaFlattedFourthQuarterSharpInputs.checked) {
          pipaFlattedFourthQuarterSharp.start();
        }
        if (pipaFlattedFourthInputs.checked) {
          pipaFlattedFourth.start();
        }
        if (pipaFourthQuarterSharpInputs.checked) {
          pipaFourthQuarterSharp.start();
        }
        if (pipaFourthInputs.checked) {
          pipaFourth.start();
        }
        if (pipaMajorThirdQuarterSharpInputs.checked) {
          pipaMajorThirdQuarterSharp.start();
        }
        if (pipaMajorThirdInputs.checked) {
          pipaMajorThird.start();
        }
        if (pipaMinorThirdQuarterSharpInputs.checked) {
          pipaMinorThirdQuarterSharp.start();
        }
        if (pipaMinorThirdInputs.checked) {
          pipaMinorThird.start();
        }
        if (pipaMajorSecondQuarterSharpInputs.checked) {
          pipaMajorSecondQuarterSharp.start();
        }
        if (pipaMajorSecondInputs.checked) {
          pipaMajorSecond.start();
        }
        if (pipaMinorSecondQuarterSharpInputs.checked) {
          pipaMinorSecondQuarterSharp.start();
        }
        if (pipaMinorSecondInputs.checked) {
          pipaMinorSecond.start();
        }
        if (pipaRootQuarterSharpInputs.checked) {
          pipaRootQuarterSharp.start();
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
      

      <p id="beatnumber">beat: {beatNumber}</p>
      

      <input type="text" id="tempo" placeholder="Default: 120bpm" onChange={(e) => {
        console.log(parseInt(e.target.value));
        if (parseInt(e.target.value) !== NaN && parseInt(e.target.value) < 1000 ) {
          setBpmValue(parseInt(e.target.value)/2);
          console.log(Tone.Transport.bpm.value);
        }
      }} />
      <div>

        </div>
        <button id="start" onClick={() => { pause = false; sequencer() }}>Start</button>
      </div>
      
    <h2>24 Tone</h2>
      <p>{props.description}</p>
     
      <h2>Pipa</h2>
      <div className="instrument-parent-div">
        <div className="instrument-pic-div">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41XFptskE-L._AC_SX425_.jpg" className="instrument-pic" />
      </div>
     
      
        <div className="instrument-inputs">
        <div className="beat-numbers-2">
        <img id={beatClassNamesOne} src={props.beatNumbersPics[0]} />
          <img  src={props.beatNumbersPics[1]} />
          <img  src={props.beatNumbersPics[2]} />
          <img  src={props.beatNumbersPics[3]} />
          <img id={beatClassNamesFive} src={props.beatNumbersPics[4]} />
          <img  src={props.beatNumbersPics[5]} />
          <img  src={props.beatNumbersPics[6]} />
          <img  src={props.beatNumbersPics[7]} />
          <img id={beatClassNamesNine} src={props.beatNumbersPics[8]} />
          <img  src={props.beatNumbersPics[9]} />
          <img src={props.beatNumbersPics[10]} />
          <img  src={props.beatNumbersPics[11]} />
          <img id={beatClassNamesThirteen} src={props.beatNumbersPics[12]} />
          <img  src={props.beatNumbersPics[13]} />
          <img  src={props.beatNumbersPics[14]} />
          <img  src={props.beatNumbersPics[15]} />
        </div>
      <div className="note-div">
      <div className="note-name-pic"><img src={props.cScaleC5toC4[0]}/></div>
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
            <div className="note-name-pic"><img src={props.cScaleC5toC4[1]}/></div>
      <div className="pipa-majorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            <div className="note-name-pic"><img src={props.cScaleC5toC4[2]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[3]}/></div>
      <div className="pipa-minorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[4]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[5]}/></div>
      <div className="pipa-majorsixthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[6]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[7]}/></div>
      <div className="pipa-minorsixthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[8]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[9]}/></div>
          <div className="pipa-fifthquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[10]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[11]}/></div>
          <div className="pipa-flattedfourthquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[12]}/></div>
          <div className="pipa-flattedfourth">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
              <div className="note-name-pic"><img src={props.cScaleC5toC4[13]}/></div>
          <div className="pipa-fourthquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[14]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[15]}/></div>
          <div className="pipa-majorthirdquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[16]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[17]}/></div>
          <div className="pipa-minorthirdquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[18]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[19]}/></div>
          <div className="pipa-majorsecondquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[20]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[21]}/></div>
          <div className="pipa-minorsecondquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
                <input type="checkbox"></input>
                
                <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[22]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[23]}/></div>
          <div className="pipa-rootquartersharp">
          <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[24]}/></div>
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
      
      <div className="instrument-inputs">
      <div className="beat-numbers-2">
      <img id={beatClassNamesOne} src={props.beatNumbersPics[0]} />
          <img  src={props.beatNumbersPics[1]} />
          <img  src={props.beatNumbersPics[2]} />
          <img  src={props.beatNumbersPics[3]} />
          <img id={beatClassNamesFive} src={props.beatNumbersPics[4]} />
          <img  src={props.beatNumbersPics[5]} />
          <img  src={props.beatNumbersPics[6]} />
          <img  src={props.beatNumbersPics[7]} />
          <img id={beatClassNamesNine} src={props.beatNumbersPics[8]} />
          <img  src={props.beatNumbersPics[9]} />
          <img src={props.beatNumbersPics[10]} />
          <img  src={props.beatNumbersPics[11]} />
          <img id={beatClassNamesThirteen} src={props.beatNumbersPics[12]} />
          <img  src={props.beatNumbersPics[13]} />
          <img  src={props.beatNumbersPics[14]} />
          <img  src={props.beatNumbersPics[15]} />
        </div>
      
          <div className="note-div">
          <div className="note-name-pic"><img src={props.cScaleC5toC4[0]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[1]}/></div>
      <div className="woodkeys-majorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[2]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[3]}/></div>
      <div className="woodkeys-minorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[4]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[5]}/></div>
      <div className="woodkeys-majorsixthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[6]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[7]}/></div>
         <div className="woodkeys-minorsixthquartersharp">
         <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
               <input type="checkbox"></input>
               
               <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
           <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC5toC4[8]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[9]}/></div>
      <div className="woodkeys-fifthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[10]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[11]}/></div>
      <div className="woodkeys-flattedfourthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[12]}/></div>
      <div className="woodkeys-flattedfourth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[13]}/></div>
      <div className="woodkeys-fourthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[14]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[15]}/></div>
      <div className="woodkeys-majorthirdquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[16]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[17]}/></div>
      <div className="woodkeys-minorthirdquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[18]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[19]}/></div>
      <div className="woodkeys-majorsecondquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[20]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[21]}/></div>
      <div className="woodkeys-minorsecondquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[22]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[23]}/></div>
      <div className="woodkeys-rootquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC5toC4[24]}/></div>
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
     
      <div className="instrument-inputs">
      <div className="beat-numbers-2">
      <img id={beatClassNamesOne} src={props.beatNumbersPics[0]} />
          <img  src={props.beatNumbersPics[1]} />
          <img  src={props.beatNumbersPics[2]} />
          <img  src={props.beatNumbersPics[3]} />
          <img id={beatClassNamesFive} src={props.beatNumbersPics[4]} />
          <img  src={props.beatNumbersPics[5]} />
          <img  src={props.beatNumbersPics[6]} />
          <img  src={props.beatNumbersPics[7]} />
          <img id={beatClassNamesNine} src={props.beatNumbersPics[8]} />
          <img  src={props.beatNumbersPics[9]} />
          <img src={props.beatNumbersPics[10]} />
          <img  src={props.beatNumbersPics[11]} />
          <img id={beatClassNamesThirteen} src={props.beatNumbersPics[12]} />
          <img  src={props.beatNumbersPics[13]} />
          <img  src={props.beatNumbersPics[14]} />
          <img  src={props.beatNumbersPics[15]} />
        </div>
          <div className="note-div">
          <div className="note-name-pic"><img src={props.cScaleC2toC1[0]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[1]}/></div>
      <div className="bass-majorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[2]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[3]}/></div>
      <div className="bass-minorseventhquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[4]}/></div>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[5]}/></div>
      <div className="bass-majorsixthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[6]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[7]}/></div>
      <div className="bass-minorsixthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <div className="note-name-pic"><img src={props.cScaleC2toC1[8]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[9]}/></div>
      <div className="bass-fifthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[10]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[11]}/></div>
      <div className="bass-flattedfourthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[12]}/></div>
      <div className="bass-flattedfourth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[13]}/></div>
      <div className="bass-fourthquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[14]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[15]}/></div>
      <div className="bass-majorthirdquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[16]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[17]}/></div>
      <div className="bass-minorthirdquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[18]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[19]}/></div>
      <div className="bass-majorsecondquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[20]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[21]}/></div>
      <div className="bass-minorsecondquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[22]}/></div>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[23]}/></div>
      <div className="bass-rootquartersharp">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="note-name-pic"><img src={props.cScaleC2toC1[24]}/></div>
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
      
     
        <div className="instrument-inputs">
        <div className="beat-numbers-2">
        <img id={beatClassNamesOne} src={props.beatNumbersPics[0]} />
          <img  src={props.beatNumbersPics[1]} />
          <img  src={props.beatNumbersPics[2]} />
          <img  src={props.beatNumbersPics[3]} />
          <img id={beatClassNamesFive} src={props.beatNumbersPics[4]} />
          <img  src={props.beatNumbersPics[5]} />
          <img  src={props.beatNumbersPics[6]} />
          <img  src={props.beatNumbersPics[7]} />
          <img id={beatClassNamesNine} src={props.beatNumbersPics[8]} />
          <img  src={props.beatNumbersPics[9]} />
          <img src={props.beatNumbersPics[10]} />
          <img  src={props.beatNumbersPics[11]} />
          <img id={beatClassNamesThirteen} src={props.beatNumbersPics[12]} />
          <img  src={props.beatNumbersPics[13]} />
          <img  src={props.beatNumbersPics[14]} />
          <img  src={props.beatNumbersPics[15]} />
        </div>
          <div className="note-div">
          <div className="note-name-pic"><img src={props.drumSet[0]}/></div>
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
          <div className="note-name-pic"><img src={props.drumSet[1]}/></div>
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
          <div className="note-name-pic"><img src={props.drumSet[2]}/></div>
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
          <div className="note-name-pic"><img src={props.drumSet[3]}/></div>
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
export default MusicMachine24Tone