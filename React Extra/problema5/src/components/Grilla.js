import React from 'react';

const Grilla = (props) =>{

    let grillaNumbers; 
    let row = parseInt(props.row);
    let col = parseInt(props.col);

    const generateNumbers = _ =>{
        let numbers = [];
        for(let i = 0; i < row; i++){
            let numerosRow = [];
            for(let j = 1; j <= col; j++){
                numerosRow.push(i*col + j);
            }
            numbers.push(numerosRow);
        }
        return numbers;
    }

    grillaNumbers = generateNumbers();

    return(
        <div className='container'>
            {grillaNumbers.map(fila => 
            (
                <div className='row'>
                    {fila.map(item => (
                        <div className='col'>
                            <button className ="btn btn-primary mt-1 w-100" >{item}</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default Grilla; 