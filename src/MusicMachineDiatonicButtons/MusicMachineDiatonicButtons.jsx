import MusicMachineDiatonicButtonGrids from './MusicMachineDiatonicButtonGrids/MusicMachineDiatonicButtonGrids.jsx';
import './MusicMachineDiatonicButtons.css';


function MusicMachineDiatonicButtons(props) {
  const instruments = ["pipa","keyboards","bass","drums"];
  return <div>
    {instruments.map((index) => {
      return <div>
         <p>{index}</p>
       <MusicMachineDiatonicButtonGrids />
      </div>  
    })}
    </div>
}
export default MusicMachineDiatonicButtons