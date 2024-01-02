import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Estate</span>
                    <span className='text-slate-700'>Xpress</span>
                </h1>
                <form className='bg-slate-300 p-2 rounded-md flex items-center'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'


                    />
                    <button>
                        <FaSearch className='text-slate-500' />
                    </button>
                </form>

                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='text-slate-700 hover:underline hidden sm:inline'>Home</li>
                    </Link>

                    <Link to='/about'>
                        <li className='text-slate-700 hover:underline hidden sm:inline'>About</li>
                    </Link>

                    <Link to='/sign-in'>
                        <li className='text-slate-700 hover:underline  sm:inline'>Sign in</li>
                    </Link>

                </ul>

            </div>

        </header>
    )
}

export default Header
