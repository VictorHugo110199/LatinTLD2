import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex bg-blue-background h-14 w-full justify-center border-b-2 border-yellow'>
            <div className='flex w-full items-center justify-between p-5 max-w-screen-xl'>
                <div className="text-white-special">
                    <Link to="/">Logo</Link>
                </div>
                
                <ul className="flex gap-8 text-white-special max-sm:hidden">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/policies">Policies</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;