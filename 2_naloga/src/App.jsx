import Koledar from '../koledar/Koledar';
import Pregled_ur from '../koledar/pregled_ur.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate('/koledar')}>vnesi ure</button>
    <button onClick={() => navigate('/pregled_ur')}>pregled ur</button>
    <button onClick={() => navigate('/')}>domov</button>

</>
  );
}

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

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
