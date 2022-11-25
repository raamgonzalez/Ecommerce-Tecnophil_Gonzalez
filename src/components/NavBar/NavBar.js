import React from 'react'

const NavBar = () => {
  return (
	<nav className="flex flex-row justify-between p-4 mx-64 my-2 border-b border-gray-400">
		<div className="" id="brand ">
			<h1 className="text-3xl text-blue-900 underline">tecnophil</h1>
		</div>
		<ul className="flex flex-row justify-between" >
			<li className="text-blue-900 px-4 py-2 rounded-lg mx-2"><a className="m-0 p-0" href="#">Notebooks</a></li>
			<li className="text-blue-900 px-4 py-2 rounded-lg mx-2"><a href="#">Moviles</a></li>
			<li className="text-blue-900 px-4 py-2 rounded-lg mx-2"><a href="#">TV & AV</a></li>
			<li className="text-blue-900 px-4 py-2 rounded-lg ml-2"><a href="#">Pantallas </a></li>
		</ul>
	</nav>
  )
}

export default NavBar