import React from 'react';
import { useState } from 'react';

const Triangle = (props) =>{
    const [state , setState] = useState({
        clicked: false, 
        value: 0
    });
    let answer; 
    
    const clickPerim = _ =>{
        let calc = parseInt(props.a) + parseInt(props.b) + parseInt(props.c);
        setState({
            clicked: true, 
            value: calc
        });
    }

    const clickArea = _ =>{
        function calcArea(a , b , c){
            let s = parseFloat(a + b + c)/2; 
            console.log('s :>> ', s);
            let area = Math.sqrt(s * (s - a*1.0) * (s-b*1.0) * (s-c*1.0));
            return area; 
        }
        let calc = calcArea(parseInt(props.a) , parseInt(props.b) , parseInt(props.c)); 
        setState({
            clicked: true,
            value: calc
        });
    }

    if(state.clicked){
        answer = (
            <p>La respuesta es: {state.value} </p>
        )
    }

    return(
        <div className='container'>
            <p>Primer lado: {props.a} </p>
            <p>Segundo lado: {props.b} </p>
            <p>Tercer lado: {props.c} </p>
            <button onClick={clickPerim} >Perímetro</button > <button onClick={clickArea}>Area</button>
            {answer}
        </div>
    )
};

export default Triangle; 