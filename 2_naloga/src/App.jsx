import Koledar from '../koledar/Koledar';
import Pregled_ur from '../koledar/pregled_ur.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <button onClick={() => navigate('/koledar')}>vnesi ure</button>
    <button onClick={() => navigate('/pregled_ur')}>pregled ur</button>
</>
  );
}

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/koledar" element={<Koledar />} />
      <Route path="/pregled_ur" element={<Pregled_ur />} />

    </Routes>
    </>
  )
}

export default App
