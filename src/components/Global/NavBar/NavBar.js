import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'

import './NavBar.css'


const NavBar = () => {
	return (
	<nav className="navbar flex flex-row justify-between p-4 mx-64 border-b border-gray-400">
		<div className="nav_div--title" id="brand ">
			<NavLink to='/'><img src='../logo.svg' alt='Logo de tecnophill' className='w-32 h-16'></img></NavLink>
			{/* <h1 className="title text-3xl text-slate-300 underline">tecnophil</h1> */}
		</div>
		<ul className="nav__list flex flex-row gap-4 my-auto" >
			{/* <li className="nav__link text-slate-300 py-2 rounded-lg mr-32"><a href="#">Home</a></li> */}
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to=''>Moviles</NavLink></li>
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to=''>TV & AV</NavLink></li>
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to=''>Notebooks</NavLink></li>
				<CartWidget/>
		</ul>
	</nav>
	)
}

export default NavBar