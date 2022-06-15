import React from 'react';

const TextInput = (props) =>{
    return(
        <div className='container'>
            <label>{props.label}</label>
            <input type="Text"></input>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default TextInput