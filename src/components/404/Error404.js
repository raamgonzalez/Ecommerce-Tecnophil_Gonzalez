import React from 'react'
import '../Layout/Layout.css'



const Error404 = () => {
    return (
        <div className='content flex flex-col items-center'>
            <img src='../../error404.svg' alt='Imagen error 404' className='w-64 h-64 m-0'></img>
            <h2 className='text-slate-300 text-6xl'>Error 404 not found</h2>
            <p className='text-slate-300 text-2xl m-6'>The resource requested could not be found on this server!</p>
        </div>
    )
}

export default Error404