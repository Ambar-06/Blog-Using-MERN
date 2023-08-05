import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='font-bold text-center w-full top-0 border-b-4 border-green-700 fixed bg-green-500 text-white'>
        <ul>
            <li className='inline-block py-4'>
                <Link  to='/' className='pl-6 pr-8'>Home</Link>
            </li>
            <li className='inline-block py-4'>
                <Link  to='/about' className='pl-6 pr-8'>About</Link>
            </li>
            <li className='inline-block py-4'>
                <Link  to='/articles-list' className='pl-6 pr-8'>Articles</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar