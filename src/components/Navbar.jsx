import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sadhgurtiles.jpeg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // New state for the dropdown
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="border-gray-200 bg-white shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLinkClick}>
                    <img src={logo} className="h-11 w-11" alt="Company Logo" />
                    <span className="self-center text-1xl font-semibold whitespace-nowrap">SADHGURU TILES & MARBLES</span>
                </Link>
                <button
                    data-collapse-toggle="navbar"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar"
                    aria-expanded={isMenuOpen}
                    onClick={handleMenuToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent relative z-50">

                        <li>
                            <Link
                                to="/"
                                className={`block py-2 px-3 md:p-0 rounded ${
                                    location.pathname === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                }`}
                                aria-current={location.pathname === '/' ? 'page' : undefined}
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>

                        {/* About Us with Dropdown */}
                        <li className="relative">
                            <button
                                onClick={handleDropdownToggle}
                                className={`block py-2 px-3 md:p-0 rounded ${
                                    location.pathname === '/aboutus'
                                        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700'
                                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                }`}
                            >
                                About Us
                            </button>

                            {/* Dropdown Items */}
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                                    <li>
                                        <Link
                                            to="/company-info"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={handleLinkClick}
                                        >
                                            Company Information
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/chairman-message"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={handleLinkClick}
                                        >
                                            Chairman's Message
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/exports"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={handleLinkClick}
                                        >
                                            Our Exports
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/awards"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={handleLinkClick}
                                        >
                                            Awards & Certifications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/manufacturing"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={handleLinkClick}
                                        >
                                            Manufacturing Facilities
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                to="/products"
                                className={`block py-2 px-3 md:p-0 rounded ${
                                    location.pathname === '/products' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                }`}
                                onClick={handleLinkClick}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/career"
                                className={`block py-2 px-3 md:p-0 rounded ${
                                    location.pathname === '/career' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                }`}
                                onClick={handleLinkClick}
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`block py-2 px-3 md:p-0 rounded ${
                                    location.pathname === '/contact' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                }`}
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>
                        </li>
                        <Link to='http://13.60.187.34:7171/'>
                        <li>
                            <button className='text-white bg-blue-700 rounded p-1'>
                                Log In
                            </button>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
