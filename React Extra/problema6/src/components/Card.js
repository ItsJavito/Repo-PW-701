import React, {useState, useEffect} from 'react';
/*
    solamente hace una consulta
*/ 
const Card = (props) =>{

    const [Data , setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    async function getInfo(pokeName){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName);
        const ans = await res.json();
        setData(ans);
        setIsLoaded(true)
    }

    useEffect(() => {
        getInfo(props.pokeName);
    }, [])

    return(
        isLoaded ? (
            <div className='row'>
                <div className='col'>
                    <strong>Nombre: </strong>
                    <span>{Data.name}</span>
                </div>
                <div className='col'>
                    <strong>Peso: </strong>
                    <span>{Data.weight}</span>
                </div>
                <div className='col'>
                    <strong>Habilidades: </strong>
                    {Data.abilities.map(item => (
                        <p>{item.ability.name}</p>
                    ))}
                </div>
                <div className='col'>
                    <img src={Data.sprites.front_default}/>
                </div>
            </div>
        ) : 
        (
            <div>
                <h1>ESTA CARGANDO... </h1>
            </div>
        )
    )
}

export default Card; 