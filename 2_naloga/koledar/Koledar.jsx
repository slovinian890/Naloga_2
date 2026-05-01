import {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./koledar.css";


function toDateInputValue(d) {
  const x = d instanceof Date ? d : new Date(d);
  const y = x.getFullYear();
  const m = String(x.getMonth() + 1).padStart(2, "0");
  const day = String(x.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function Koledar(){

  const [value, setValue] = useState(new Date());
  const [vnos, setVnos] = useState(false);
  const [datumOd, setDatumOd] = useState("");
  const [datumDo, setDatumDo] = useState("");
  const [se_mozne_ure, setSe_mozne_ure ] = useState("10:00");
  
function prikazi_forme(selectedDate){
  setValue(selectedDate);
  const iso = toDateInputValue(selectedDate);
  setDatumOd(iso);
  if (!datumDo || datumDo < iso) setDatumDo(iso);
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
    <div className="calendar-container">
      <div>
        <Calendar className="koledar1" onChange= {prikazi_forme} value={value} />
      </div>

      {vnos && (
        <div className="forma_za_vnos">
          <p>stevilose moznih ur: {se_mozne_ure}</p>
        <form>
        <label htmlFor="datum-od">datum od</label>
        <input
          id="datum-od"
          type="date"
          name="datum_od"
          value={datumOd}
          onChange={(e) => {
            const v = e.target.value;
            setDatumOd(v);
            if (datumDo && datumDo < v) setDatumDo(v);
          }}
        />
        <br/>
        <label htmlFor="datum-do">datum do</label>
        <input
          id="datum-do"
          type="date"
          name="datum_do"
          value={datumDo}
          min={datumOd || undefined}
          onChange={(e) => setDatumDo(e.target.value)}
        />
        <br/>
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
    </div>
      )}
    </div>
</>
  );
}
export default Koledar;