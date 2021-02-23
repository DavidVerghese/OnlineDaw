// import * as Tone from "tone";

function MusicMachine(props) {

  let pause = false;
  const bass = props.bass;
  const organ = props.organ;
  const violin = props.violin;
  const drums = props.drums;
  const Tone = props.Tone;

  function sequencer() {
    if (!pause) {
      Tone.start();

      const kick = new Tone.Player(drums[0]).toDestination();
      const snare = new Tone.Player(drums[1]).toDestination();
      const hihat = new Tone.Player(drums[2]).toDestination();
      const crashcymbal = new Tone.Player(drums[3]).toDestination();

      const bassC2 = new Tone.Player(bass[7]).toDestination();
      const bassB1 = new Tone.Player(bass[6]).toDestination();
      const bassA1 = new Tone.Player(bass[5]).toDestination();
      const bassG1 = new Tone.Player(bass[4]).toDestination();
      const bassF1 = new Tone.Player(bass[3]).toDestination();
      const bassE1 = new Tone.Player(bass[2]).toDestination();
      const bassD1 = new Tone.Player(bass[1]).toDestination();
      const bassC1 = new Tone.Player(bass[0]).toDestination();

      const organC5 = new Tone.Player(organ[7]).toDestination();
      const organB4 = new Tone.Player(organ[6]).toDestination();
      const organA4 = new Tone.Player(organ[5]).toDestination();
      const organG4 = new Tone.Player(organ[4]).toDestination();
      const organF4 = new Tone.Player(organ[3]).toDestination();
      const organE4 = new Tone.Player(organ[2]).toDestination();
      const organD4 = new Tone.Player(organ[1]).toDestination();
      const organC4 = new Tone.Player(organ[0]).toDestination();

      const violinC5 = new Tone.Player(violin[7]).toDestination();
      const violinB4 = new Tone.Player(violin[6]).toDestination();
      const violinA4 = new Tone.Player(violin[5]).toDestination();
      const violinG4 = new Tone.Player(violin[4]).toDestination();
      const violinF4 = new Tone.Player(violin[3]).toDestination();
      const violinE4 = new Tone.Player(violin[2]).toDestination();
      const violinD4 = new Tone.Player(violin[1]).toDestination();
      const violinC4 = new Tone.Player(violin[0]).toDestination();

      let index = 0;
      Tone.Transport.scheduleRepeat(repeat, '16n');
      Tone.Transport.start();
      function repeat() {
        let step = index % 16;

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

        let organC5Inputs = document.querySelector(`.organ-c5 input:nth-child(${step + 1})`);
        let organB4Inputs = document.querySelector(`.organ-b4 input:nth-child(${step + 1})`);
        let organA4Inputs = document.querySelector(`.organ-a4 input:nth-child(${step + 1})`);
        let organG4Inputs = document.querySelector(`.organ-g4 input:nth-child(${step + 1})`);
        let organF4Inputs = document.querySelector(`.organ-f4 input:nth-child(${step + 1})`);
        let organE4Inputs = document.querySelector(`.organ-e4 input:nth-child(${step + 1})`);
        let organD4Inputs = document.querySelector(`.organ-d4 input:nth-child(${step + 1})`);
        let organC4Inputs = document.querySelector(`.organ-c4 input:nth-child(${step + 1})`);

        let violinC5Inputs = document.querySelector(`.violin-c5 input:nth-child(${step + 1})`);
        let violinB4Inputs = document.querySelector(`.violin-b4 input:nth-child(${step + 1})`);
        let violinA4Inputs = document.querySelector(`.violin-a4 input:nth-child(${step + 1})`);
        let violinG4Inputs = document.querySelector(`.violin-g4 input:nth-child(${step + 1})`);
        let violinF4Inputs = document.querySelector(`.violin-f4 input:nth-child(${step + 1})`);
        let violinE4Inputs = document.querySelector(`.violin-e4 input:nth-child(${step + 1})`);
        let violinD4Inputs = document.querySelector(`.violin-d4 input:nth-child(${step + 1})`);
        let violinC4Inputs = document.querySelector(`.violin-c4 input:nth-child(${step + 1})`);

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

        if (organC5Inputs.checked) {
          organC5.start();
        }
        if (organB4Inputs.checked) {
          organB4.start();
        }
        if (organA4Inputs.checked) {
          organA4.start();
        }
        if (organG4Inputs.checked) {
          organG4.start();
        }
        if (organF4Inputs.checked) {
          organF4.start();
        }
        if (organE4Inputs.checked) {
          organE4.start();
        }
        if (organD4Inputs.checked) {
          organD4.start();
        }
        if (organC4Inputs.checked) {
          organC4.start();
        }

        if (violinC5Inputs.checked) {
          violinC5.start();
        }
        if (violinB4Inputs.checked) {
          violinB4.start();
        }
        if (violinA4Inputs.checked) {
          violinA4.start();
        }
        if (violinG4Inputs.checked) {
          violinG4.start();
        }
        if (violinF4Inputs.checked) {
          violinF4.start();
        }
        if (violinE4Inputs.checked) {
          violinE4.start();
        }
        if (violinD4Inputs.checked) {
          violinD4.start();
        }
        if (violinC4Inputs.checked) {
          violinC4.start();
        }
        index++;
      }
      console.log(document.querySelector("#start"));
    }
  }

  return (<div>
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
          <li>Dorian</li>
          <li>Phyrgian</li>
          <li>Lydian</li>
          <li>Mixolodian</li>
          <li>Locrian</li>
        <li>Chromatic</li>
        <li>24-tone</li>
     </div>
        <button id="start" onClick={() => { pause = false; sequencer() }}>Start</button>
      </div>
      
      {props.text}
      
      <h2>Violin</h2>
      <div className="instrument-parent-div">
        <div className="instrument-pic-div">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71oiA77IZJL._AC_SL1500_.jpg" className="instrument-pic" />
        </div>
        <div className="instrument-inputs">
        <div className="beat-numbers"><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p></div>
      <div className="note-div">
      <p>C5</p>
      <div className="violin-c5">
      <input  className="violin-c5-input" type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <p>B4</p>
      <div className="violin-b4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>A4</p>
      <div className="violin-a4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>G4</p>
      <div className="violin-g4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>F4</p>
      <div className="violin-f4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>E4</p>
      <div className="violin-e4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>D4</p>
      <div className="violin-d4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>C4</p>
      <div className="violin-c4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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

      <h2>Organ</h2>
      <div className="instrument-parent-div">
      <div className="instrument-pic-div"><img src="https://jewellomaha.com/wp-content/uploads/2020/03/IMG_5448-scaled.jpeg" className="instrument-pic" /></div>
        <div className="instrument-inputs">
        <div className="beat-numbers"><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p> <p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p> <p>15</p><p>16</p> </div>
      
          <div className="note-div">
          <p>C5</p>
      <div className="organ-c5">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>B4</p>
      <div className="organ-b4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>A4</p>
      <div className="organ-a4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>G4</p>
      <div className="organ-g4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>F4</p>
      <div className="organ-f4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>E4</p>
      <div className="organ-e4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>D4</p>
      <div className="organ-d4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>C4</p>
      <div className="organ-c4">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="beat-numbers"><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p> <p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p> <p>15</p><p>16</p> </div>
          <div className="note-div">
          <p>C2</p>
      <div className="bass-c2">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>B1</p>
      <div className="bass-b1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>A1</p>
      <div className="bass-a1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>G1</p>
      <div className="bass-g1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>F1</p>
            <div className="bass-f1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>E1</p>
      <div className="bass-e1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>D1</p>
      <div className="bass-d1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          <p>C1</p>
      <div className="bass-c1">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
        <div className="beat-numbers"><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p> <p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p> </div>
          <div className="note-div">
          <p className="drum-parts-text">Kick</p>
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
            </div></div>
          <div className="note-div">
          <p className="drum-parts-text">Snare</p>
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
            </div></div>
          <div className="note-div">
          <p className="drum-parts-text">Hihat</p>
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
            </div></div>
          <div className="note-div">
          <p className="drum-parts-text">Cymbal</p>
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
          </div></div>
          </div>
        </div>
  </div>)
}
export default MusicMachine