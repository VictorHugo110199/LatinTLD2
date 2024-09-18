import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AsideMenu } from '../aside';

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
                    
                    <div className="sm:hidden">
                        {isMenuOpen ? (
                            <p className="text-white-special" onClick={toggleMenu} > X </p>
                        ) : (
                            <p className="text-white-special" onClick={toggleMenu} > &#9776; </p>
                        )}
                    </div>
                    <AsideMenu isMenuOpen={isMenuOpen} closeAsideMenu={toggleMenu} />
                    <ul className={`flex gap-8 text-white-special max-sm:hidden`}>
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