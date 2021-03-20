import Button from '../../../Buttons/Button.jsx';
import './MusicMachineDiatonicButtonRows.css';
import { useRef,useState } from "react";

function MusicMachineDiatonicButtonRows(props) {
  // const array = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32"];
  const rowRef = useRef(null);
  if (rowRef.current){
    const rowRefVar = rowRef.current;
    console.log(rowRefVar);
  }

  return (
    <div ref={rowRef} className={`${props.instrument}${props.rowId}buttons-row`}>
      { props.array.map((index, key) => {
      return <Button key={key} button={index}/>
      })}
    </div>
    
    )
}
export default MusicMachineDiatonicButtonRows