import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '~/hooks/hooks';

import { MdOutlineClose } from 'react-icons/md';
import { Link } from '@remix-run/react';

export function AsideMenu({ isMenuOpen, closeAsideMenu }: { isMenuOpen: boolean, closeAsideMenu: () => void }) {

return (
    <motion.nav
        className={`${
            isMenuOpen ? ' top-[56px] left-0 z-20 h-48 w-full ' : ' -top-8 h-8 w-8'
        } absolute flex flex-col items-center justify-center gap-2 bg-yellow transition-[2s]`}
    >
        {isMenuOpen && (
            <>
                <Link
                    to="/"
                    className="text-base font-semibold text-white sm:text-base"
                >
                    Home
                </Link>
                <Link
                    to="/services"
                    className="text-base font-semibold text-white sm:text-base"
                >
                    Services
                </Link>
                <Link
                    to="/policies"
                    className="text-base font-semibold text-white sm:text-base"
                >
                    Polices
                </Link>
                <Link
                    to="/about"
                    className="text-base font-semibold text-white sm:text-base"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="text-base font-semibold text-white sm:text-base"
                >
                    Contact
                </Link>
            </>
        )}
    </motion.nav>
);
}