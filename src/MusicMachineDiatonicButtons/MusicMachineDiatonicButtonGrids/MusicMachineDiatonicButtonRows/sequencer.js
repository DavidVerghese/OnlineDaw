
function sequencer(a) {
  const Tone = a;
  Tone.start();
  let index = 0;
      Tone.Transport.scheduleRepeat(repeat, '32n');
  Tone.Transport.start();
  
  function repeat() {
    let step = index % 32;
  };
  console.log("hi");
}
export default sequencer