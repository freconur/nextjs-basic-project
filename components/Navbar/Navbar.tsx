import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<nav className='w-full bg-green-300 h-[60px] flex justify-between items-center px-2'>
			<span className='text-2xl text-cyan-600 uppercase font-bold'>
				Logo
			</span>
			<ul className='text-xl text-white capitalize font-semibold flex'>
				<li className='ml-5'>
				<Link className='' href="/" legacyBehavior>
					inicio
				</Link>
				</li>
				<li className='ml-5'>
				<Link className='' href="/about" legacyBehavior>
					nosotros
				</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar