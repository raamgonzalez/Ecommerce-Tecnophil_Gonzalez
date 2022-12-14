import React, {useState, useEffect} from 'react'
import './Counter.css'

const Counter = (props) => {

    const [contador, setContador] = useState(1)

    //Funciones (Todavia no se usaron)
    const sumar = () => setContador(contador + 1)
    const restar = () => {
        if(contador > 1){setContador(contador - 1)}
    }


    return (
        <div className='counter'>
            <h3>{contador}</h3>
        </div>
    )
}

export default Counter