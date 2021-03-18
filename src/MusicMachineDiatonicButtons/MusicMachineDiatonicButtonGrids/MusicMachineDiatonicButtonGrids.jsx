import MusicMachineDiatonicButtonRows from './MusicMachineDiatonicButtonRows/MusicMachineDiatonicButtonRows.jsx';
import './MusicMachineDiatonicButtonGrids.css';

function MusicMachineDiatonicButtonGrids(props) {
  const rowArray = ["0", "1", "2", "3","4","5","6","7"];
  const columnZeroArray = ["A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18","A19","A20","A21","A22","A23","A24","A25","A26","A27","A28","A29","A30","A31"];
  const columnOneArray = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18", "B19", "B20", "B21", "B22", "B23", "B24", "B25", "B26", "B27", "B28", "B29", "B30", "B31"];
  const columnTwoArray = ["C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19","C20","C21","C22","C23","C24","C25","C26","C27","C28","C29","C30","C31"];
  const columnThreeArray = ["D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24", "D25", "D26", "D27", "D28", "D29", "D30", "D31"];
  const columnFourArray = ["E0","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18","E19","E20","E21","E22","E23","E24","E25","E26","E27","E28","E29","E30","E31"];
  const columnFiveArray = ["F0", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "F25", "F26", "F27", "F28", "F29", "F30", "F31"];
  const columnSixArray = ["G0","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14","G15","G16","G17","G18","G19","G20","G21","G22","G23","G24","G25","G26","G27","G28","G29","G30","G31"];
  const columnSevenArray = ["H0", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18", "H19", "H20", "H21", "H22", "H23", "H24", "H25", "H26", "H27", "H28", "H29", "H30", "H31"];
  const arrayOfColumnArrays = [columnZeroArray,columnOneArray,columnTwoArray,columnThreeArray,columnFourArray,columnFiveArray,columnSixArray,columnSevenArray];
  const arrayOfColumnArrayInstrumentNames = [];
  arrayOfColumnArrays.map((index2,key)=>{
    const array=[];
    index2.map((index3)=>{
      let newItem = `${index3}${props.instrumentname}`;
      array.push(newItem);
      arrayOfColumnArrayInstrumentNames[key]=array;
    });
  });

  return <div className={props.display}>
    {console.log(arrayOfColumnArrayInstrumentNames)}
    <p id="instrument-name">{props.instrumentname}</p>
    <div id="buttongrid-id">{rowArray.map((index, key) => {
      return  <MusicMachineDiatonicButtonRows key={key} array={arrayOfColumnArrayInstrumentNames[key]} /> 
    })}</div>
    
  </div>
  
}
export default MusicMachineDiatonicButtonGrids