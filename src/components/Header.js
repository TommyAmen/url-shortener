import React from 'react'
import logo from "../images/logo.svg"

export default function Header() {
    return (
    <div>
        <header className='header max-width'>
            <div>
                <img src={logo} alt="" />

                <nav>
                    <ul>
                        <li><button>Features</button></li>
                        <li><button>Pricing</button></li>
                        <li><button>Resources</button></li>
                    </ul>
                </nav>

                <ul>
                    <li><button>Login</button></li> 
                    <li><button className='btn rounded-full'>Sign Up</button></li>
                </ul>
            </div>

        </header>
    </div>
    )
}
