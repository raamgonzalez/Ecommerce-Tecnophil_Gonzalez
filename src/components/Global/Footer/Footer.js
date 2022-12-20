import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
    <footer className="footer p-4 border-t border-gray-400">
        <div className="flex flex-row justify-between">
            <div className='flex flex-col'>
                <img src='../logo.svg' alt='Logo de tecnophill' className='w-22 h-12 self-start'></img>
                <h3 className="copyright__h3 text-neutral-100">&copy; Derechos Reservados RaG</h3>
            </div>
                {/* Arreglar color de Red social */}
            <div className='flex flex-col justify-center gap-1'>
                <a className='text-neutral-100' href="https://www.instagram.com/reguluxlamps"><img className='w-6 h-7' src="../icons/icons8-instagram-90.svg" alt="Hola" /></a>
                <a className='text-neutral-100' href="https://www.instagram.com/reguluxlamps"><img className=' w-6 h-7' src="../icons/icons8-facebook-90.svg" alt="Hola" /></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer