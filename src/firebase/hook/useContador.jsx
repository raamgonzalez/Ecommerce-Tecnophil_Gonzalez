import { useState } from 'react'

//Agregar HOOK para itemCount

//------------------Esto no va en la carpeta firebase--------------------//


//Se importa asi en ItemCount
// const {sumar, restar, reset} = useContador

const useContador = () => {
    
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const reset =  () => setContador(0)
    
    return {
        contador,
        sumar,
        restar,
        reset
    }
}

export default useContador