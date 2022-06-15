import logo from './logo.svg';
import React, {useState} from 'react';
import Grilla from './components/Grilla';
import './App.css';



function App() {
  const [isClicked, setClicked] = useState(false);
  const [values , setValues] = useState([0 , 0]);
  let grilla;
  
  const setRows = (event) =>{
    setValues([event.target.value , values[1]]);
  }
  const setCols = (event) =>{
    setValues([values[0] , event.target.value]);
  }
  
  const handleClicked = _ =>{
    setClicked(true);
  }
  
  if(isClicked){
    grilla = <Grilla row = {values[0]} col ={values[1]} />
  }

  return (
    <div className="container m-4 p-4 border">
      <div className="row">
        <h1>TABLERO</h1>
      </div>
      <div className="form-group col">
        <label for="txtRows">Filas </label>
        <input type="text" className="form-control" onChange={setRows} value={values[0]}/>
      </div>
      <div className="form-group col">
        <label for="txtRows">Columnas </label>
        <input type="text" className="form-control" onChange={setCols} value={values[1]}/>
      </div>
      <div className="form-group">
        <button className ="btn btn-primary mt-4" id="btnShow" onClick={handleClicked}>Mostrar</button>
      </div>
      {grilla }
    </div>
  );
}

export default App;
