import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ApiConsume = () => {
    const [img, setImg] = useState("");

    useEffect(() => {
        
        async function getData(){
            try {
                const {data:{sprites:{other}}} = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
                const img = other['official-artwork']['front_default']
                console.log(img)
                setImg(img)
            } catch (error) {
                console.log(error)
            }
        }getData()
    
        
        return () => {
            setImg('');
        };
    }, []);
    
    
    return (
        <div className='text-slate-300'>
            {img ? <img src={img} alt="poke-image"/> : <h1>Cargando...</h1>}
        </div>
    )
}

export default ApiConsume