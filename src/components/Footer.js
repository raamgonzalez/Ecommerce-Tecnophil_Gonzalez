import React from 'react'


const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__main">
            <div className='footer__logo'>
                <img src='../logo.svg' alt='Logo de tecnophill' className='footer__logo--img'></img>
                <h3 className="footer__h3">&copy; Derechos Reservados RaG</h3>
            </div>
            <div className='footer__links'>
                <a className='footer__a' href="https://www.instagram.com/reguluxlamps"><img className='w-6 h-7' src="../icons/icons8-instagram-90.svg" alt="Icono Instagram" /></a>
                <a className='footer__a' href="https://www.instagram.com/reguluxlamps"><img className=' w-6 h-7' src="../icons/icons8-facebook-90.svg" alt="Icono Facebook" /></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer