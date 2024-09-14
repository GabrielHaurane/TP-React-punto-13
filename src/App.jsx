import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Titulo from './components/Titulo';
import LugarClima from './components/LugarClima';
import { Container } from 'react-bootstrap';
import Clima from './components/Clima';
import { useState } from 'react';


function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [consultar, setConsultar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConsultar(true); 
  };

  return (
    <Container>
     <Titulo></Titulo>
     <LugarClima
     pais={pais} 
     ciudad={ciudad} 
     setCiudad={setCiudad} 
     setPais={setPais} 
     handleSubmit={handleSubmit}></LugarClima>
     <div className="col-12">
        {/* Solo mostrar el componente Clima si el estado consultar es verdadero */}
        {consultar && <Clima pais={pais} ciudad={ciudad} />}
      </div>
    </Container>
  )
}

export default App
