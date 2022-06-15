import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  let card;

  const [paramSearch , setParam] = useState("");
  const [isClicked, setClick] = useState(false);

  if(isClicked){
    card =(
      <Card pokeName = {paramSearch} />
    )
  }

  return (
    <div className="A">
      <div className="container m-4 p-4 border">
        <div className="row">
          <h1>PRUEBA DE POKEMON API</h1>
        </div>
        <div className='row'>
          <div className="form-group col">
            <label> Nombre de Pokemon </label>
            <input type="text" className="form-control" onChange={event => {setParam(event.target.value)}}/>
          </div>
          <div className="form-group">
            <button className ="btn btn-primary mt-4" id="btnShow" onClick={ _ => {setClick(true)}}>Mostrar Datos</button>
          </div>
        </div>
      </div>
      {card}
    </div>
  );
}

export default App;
