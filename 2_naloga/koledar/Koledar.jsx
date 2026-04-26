import {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function Koledar(){

  const [value, onChange] = useState(new Date());
  const [vnos, setVnos] = useState(false);
  const [se_mozne_ure, setSe_mozne_ure ] = useState("10:00");



  
function prikazi_forme(){
  setVnos(true);
}
function preracun_ur(e){ 
   let result =  v_minute("10:00") - v_minute("02:00");
  setSe_mozne_ure (result/60 + result%60);
}
function  v_minute(t){
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

  return (
    <>
    <h1>nekej</h1>
    <div>
      <Calendar onChange= {prikazi_forme} value={value} />
    </div>
    {vnos && (<>
      <p>stevilose moznih ur: {se_mozne_ure}</p>
<form>
    <select name="delovni_nalog">          
    <option value = "razvoj"> razvoj </option>
    <option value = "projekto vodenje"> projektno vodenje </option>
    <option value = "testiranje"> testiranje </option>
    <option value = "sestanki"> sestanki </option>
    <option value = "dokumentacija"> dokumentacija </option>
    </select><br/>

    <input type="text" placeholder ="kratek opis dela: "/><br/>
    <input type="time" onChange={preracun_ur} placeholder ="ure dela: "/><br/>
    <input type="number" min="0" step ="0.5" placeholder ="prevozeni kilometri: "/> <br/>
    <label for="ali je delo opravljeno"> ali je delo opravljeno </label>
    <input type="radio" id="ali je delo opravljeno"/><br/>

    <label for="stranka"> stranka </label>
    <input type="checkbox" name ="stranka"/><br/>
    <label for="pisarna"> pisarna </label>
    <input type="checkbox" name="pisarna"/>



<br/><button type="submit">Vnesi</button>
</form>
</>
)}


    
    </>
  );
}
export default Koledar;