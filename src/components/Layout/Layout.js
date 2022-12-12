import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Layout.css'

const Layout = (props) => {
    const {children} = props
    return (
        <main className='wrapper'>
            <NavBar/>
            {children}
            <Footer/>
        </main>
    )
}

export default Layout