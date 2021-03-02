// import * as Tone from "tone";

function MusicMachineDiatonic(props) {

  let pause = false;
  const bass = props.sinebass;
  const woodkeys = props.woodkeys;
  const violin = props.violin;
  const pipa = props.pipa;
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

      const woodkeysOctave = new Tone.Player(woodkeys[7]).toDestination();
      const woodkeysSeventh = new Tone.Player(woodkeys[6]).toDestination();
      const woodkeysSixth = new Tone.Player(woodkeys[5]).toDestination();
      const woodkeysFifth = new Tone.Player(woodkeys[4]).toDestination();
      const woodkeysFourth = new Tone.Player(woodkeys[3]).toDestination();
      const woodkeysThird = new Tone.Player(woodkeys[2]).toDestination();
      const woodkeysSecond = new Tone.Player(woodkeys[1]).toDestination();
      const woodkeysRoot = new Tone.Player(woodkeys[0]).toDestination();

      const pipaOctave = new Tone.Player(pipa[7]).toDestination();
      const pipaSeventh = new Tone.Player(pipa[6]).toDestination();
      const pipaSixth = new Tone.Player(pipa[5]).toDestination();
      const pipaFifth = new Tone.Player(pipa[4]).toDestination();
      const pipaFourth = new Tone.Player(pipa[3]).toDestination();
      const pipaThird = new Tone.Player(pipa[2]).toDestination();
      const pipaSecond = new Tone.Player(pipa[1]).toDestination();
      const pipaRoot = new Tone.Player(pipa[0]).toDestination();

      let index = 0;
      Tone.Transport.scheduleRepeat(repeat, '32n');
      Tone.Transport.start();
      function repeat() {
        let step = index % 32;

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

        let woodkeysOctaveInputs = document.querySelector(`.woodkeys-octave input:nth-child(${step + 1})`);
        let woodkeysSeventhInputs = document.querySelector(`.woodkeys-seventh input:nth-child(${step + 1})`);
        let woodkeysSixthInputs = document.querySelector(`.woodkeys-sixth input:nth-child(${step + 1})`);
        let woodkeysFifthInputs = document.querySelector(`.woodkeys-fifth input:nth-child(${step + 1})`);
        let woodkeysFourthInputs = document.querySelector(`.woodkeys-fourth input:nth-child(${step + 1})`);
        let woodkeysThirdInputs = document.querySelector(`.woodkeys-third input:nth-child(${step + 1})`);
        let woodkeysSecondInputs = document.querySelector(`.woodkeys-second input:nth-child(${step + 1})`);
        let woodkeysRootInputs = document.querySelector(`.woodkeys-root input:nth-child(${step + 1})`);

        let pipaOctaveInputs = document.querySelector(`.pipa-octave input:nth-child(${step + 1})`);
        let pipaSeventhInputs = document.querySelector(`.pipa-seventh input:nth-child(${step + 1})`);
        let pipaSixthInputs = document.querySelector(`.pipa-sixth input:nth-child(${step + 1})`);
        let pipaFifthInputs = document.querySelector(`.pipa-fifth input:nth-child(${step + 1})`);
        let pipaFourthInputs = document.querySelector(`.pipa-fourth input:nth-child(${step + 1})`);
        let pipaThirdInputs = document.querySelector(`.pipa-third input:nth-child(${step + 1})`);
        let pipaSecondInputs = document.querySelector(`.pipa-second input:nth-child(${step + 1})`);
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

        if (woodkeysOctaveInputs.checked) {
          woodkeysOctave.start();
        }
        if (woodkeysSeventhInputs.checked) {
          woodkeysSeventh.start();
        }
        if (woodkeysSixthInputs.checked) {
          woodkeysSixth.start();
        }
        if (woodkeysFifthInputs.checked) {
          woodkeysFifth.start();
        }
        if (woodkeysFourthInputs.checked) {
          woodkeysFourth.start();
        }
        if (woodkeysThirdInputs.checked) {
          woodkeysThird.start();
        }
        if (woodkeysSecondInputs.checked) {
          woodkeysSecond.start();
        }
        if (woodkeysRootInputs.checked) {
          woodkeysRoot.start();
        }

        if (pipaOctaveInputs.checked) {
          pipaOctave.start();
        }
        if (pipaSeventhInputs.checked) {
          pipaSeventh.start();
        }
        if (pipaSixthInputs.checked) {
          pipaSixth.start();
        }
        if (pipaFifthInputs.checked) {
          pipaFifth.start();
        }
        if (pipaFourthInputs.checked) {
          pipaFourth.start();
        }
        if (pipaThirdInputs.checked) {
          pipaThird.start();
        }
        if (pipaSecondInputs.checked) {
          pipaSecond.start();
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
      <h1>Virtual Digital Audio Workstation</h1>
      <div>
      <p>Time signature:</p>
        <li>4/4</li>
        <li>3/4</li>
        <li>5/4</li>
        </div>
        <div>
      <p>Scale:</p>
     
        <li>Chromatic</li>
        <li>24-tone</li>
     </div>
        <button id="start" onClick={() => { pause = false; sequencer() }}>Start</button>
      </div>
      
    <h1>{props.name}</h1>
      <p>{props.description}</p>
     
      <h2>Pipa</h2>
      <div className="instrument-parent-div">
        <div className="instrument-pic-div">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41XFptskE-L._AC_SX425_.jpg" className="instrument-pic" />
      </div>
      <div className="note-names"><p>C5</p><p>B4</p><p>A4</p><p>G4</p><p>F4</p><p>E4</p><p>D4</p><p>C4</p></div>
      
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
      
      <div className="pipa-seventh">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
          
      <div className="pipa-sixth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
         
      <div className="pipa-third">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
         
      <div className="pipa-second">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
      <div className="note-names"><p>C5</p><p>B4</p><p>A4</p><p>G4</p><p>F4</p><p>E4</p><p>D4</p><p>C4</p></div>
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
         
      <div className="woodkeys-seventh">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
         
      <div className="woodkeys-sixth">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
         
      <div className="woodkeys-third">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
         
      <div className="woodkeys-second">
      <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
            <input type="checkbox"></input>
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
      <div className="note-names"><p>C2</p><p>B1</p><p>A1</p><p>G1</p><p>F1</p><p>E1</p><p>D1</p><p>C1</p></div>
      <div className="instrument-inputs">
      <div className="beat-numbers"><p>1 </p><p>2 </p><p> 3</p><p> 4</p><p> 5</p><p> 6</p><p> 7</p><p> 8</p> <p> 9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p> <p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p></div>
          <div className="note-div">
          
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
            
            <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
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
export default MusicMachineDiatonic