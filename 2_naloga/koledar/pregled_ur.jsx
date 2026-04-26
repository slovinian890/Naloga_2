import {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './pregled_ur.css';


function Pregled_ur(){
const [izpis, setIzpis] = useState(false);
const [value, onChange] = useState(new Date());


function prikaz_izpisa(){

    setIzpis(true);
}
    return (

        <>
    <div>
      <Calendar className="pregled_ur_koledar" onChange= {prikaz_izpisa} value={value} />
    </div>

    {izpis && (
        <>
        <p>tukaj bomo fetchal za vsak dan posebaj podatke</p>

        </>
    )

    }
        </>
    );
}

export default Pregled_ur;