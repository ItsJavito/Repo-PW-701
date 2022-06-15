import React, {useState} from 'react';

const Form = () =>{
    let aviso; 

    const [state , setState] = useState({
        nombreCompleto: '',
        apellidos: '',
        nombres: ''
    })

    const handleChange = (event) =>{
        
        setState({
            nombreCompleto: event.target.value,
            apellidos: event.target.value.split(',').at(0),
            nombres: event.target.value.split(',').at(1)
        })

    };
    
    if(state.nombreCompleto !== '' && state.nombreCompleto.length < 8){
        aviso = (
            <p> (*) El nombre completo debe tener por lo menos 8 caracteres </p>
        )
    }
    
    return(
        <div className='container'>
            <label>Nombre completo: </label><input onChange={handleChange} value={state.nombreCompleto}></input><br/>
            <label>Apellidos </label><input value={state.apellidos} disabled></input><br/>
            <label>Nombres </label><input value={state.nombres} disabled></input><br/>
            {aviso}
        </div>
    )
}

export default Form; 