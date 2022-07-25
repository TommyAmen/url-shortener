import React from 'react'
import logo from "../images/logo.svg"
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Header() {
    const [isMenu, setIsMenu] = useState(false)

    return (
    <div>
        <header className='header max-width py-5'>
            <div className='flex justify-between items-center'>
                <article className='flex items-center'>
                    <img src={logo} alt="" />
                
                    <nav className='hidden md:block md:ml-10 md:text-slate-400'>
                        <ul className='flex items-start'>
                            <li className=' md:hover:text-slate-700'><button>Features</button></li>
                            <li className='my-5 md:my-0 md:mx-5  md:hover:text-slate-700'><button>Pricing</button></li>
                            <li className='md:hover:text-slate-700'><button>Resources</button></li>
                        </ul>
                    </nav>
                </article>

                {isMenu && (
                    <div className='bg-slate-800 text-white font-bold absolute left-5 right-5 top-20 py-10 text-center rounded-xl md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:flex md:items-center md:py-0'>
                        <nav className='md:hidden'>
                            <ul>
                                <li><button>Features</button></li>
                                <li className='my-5 md:my-0 md:mx-5'><button>Pricing</button></li>
                                <li><button>Resources</button></li>
                            </ul>
                        </nav>
                    
                        <ul className="flex flex-col items-center justify-center mt-6 border-t-2 border-slate-700 md:hidden">
                            <li className="my-5">
                                <button className="text-white">Login</button>
                            </li>
                            <li>
                                <button className="btn w-80 rounded-lg">Sign Up</button>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="hidden md:block">
                    <ul className="flex items-center ml-5">
                    <li className="my-5 md:my-0 md:mr-5">
                        <button className="text-slate-400 hover:text-slate-700">Login</button>
                    </li>
                    <li>
                        <button className="btn rounded-full">Sign Up</button>
                    </li>
                    </ul>
                </div>
            
            <button
                className='md:hidden'
                onClick={() => {setIsMenu(!isMenu)}}
            >{isMenu ? <FaTimes/> : <FaBars/>}</button>
            </div>
            
        </header>
    </div>
    )
}
