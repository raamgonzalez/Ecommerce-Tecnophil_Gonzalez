import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
    <footer className="footer p-4 mx-64 mt-2 border-t border-gray-400">
        <div className="flex flex-row justify-between">
            <div className="footer__content copyright">
                <h3 className="copyright__h3 text-slate-300">&copy; Derechos Reservados</h3>
            </div>
            <div className="text-slate-300">
                <h5>Test</h5>
            </div>
        </div>
    </footer>
    )
}

export default Footer