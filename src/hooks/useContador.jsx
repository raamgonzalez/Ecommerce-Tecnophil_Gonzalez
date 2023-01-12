import { useState } from 'react'


const useContador = () => {
    
    const [count, setCount] = useState(1)

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)
    const reset =  () => setCount(0)
    
    return {
        count,
        increase,
        decrease,
        reset
    }
}

export default useContador