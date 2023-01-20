import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

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