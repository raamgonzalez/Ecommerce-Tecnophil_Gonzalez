import React from 'react'
import NavBar from '../NavBar/NavBar'
import '../styles/Layout.css'

const Layout = (props) => {
    const {children} = props
    return (
        <main>
            <NavBar/>
            {children}
        </main>
    )
}

export default Layout