import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/sadhgurtiles.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpenAbout, setIsDropdownOpenAbout] = useState(false);
    const [isDropdownOpenProducts, setIsDropdownOpenProducts] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();

    const handleSmoothScroll = (to, id) => {
        navigate(to); // Navigate to the page
        setTimeout(() => {
            scroller.scrollTo(id, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }, 100); // A slight delay to ensure the page loads before scrolling
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleDropdownToggleAbout = () => {
        setIsDropdownOpenAbout(!isDropdownOpenAbout);
    };

    const handleDropdownToggleProducts = () => {
        setIsDropdownOpenProducts(!isDropdownOpenProducts);
    };

    return (
        <nav className="border-gray-200 bg-white shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLinkClick}>
                    <img src={logo} className="h-11 w-11" alt="Company Logo" />
                    <span className="self-center text-1xl font-semibold whitespace-nowrap">SADHGURU TILES & MARBLES</span>
                </Link>
                <button
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
                                className={`py-2 px-3 md:p-0 rounded ${location.pathname === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                                aria-current={location.pathname === '/' ? 'page' : undefined}
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>

                        {/* About Us with Dropdown */}
                        <li className="relative">
                            <button
                                onClick={handleDropdownToggleAbout}
                                className={`py-2 px-3 md:p-0 rounded ${location.pathname.startsWith('/aboutus') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                            >
                                About Us
                            </button>
                            {isDropdownOpenAbout && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                                    <li><Link to="/company-info" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Company Information</Link></li>
                                    <li><Link to="/chairman-message" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Chairman's Message</Link></li>
                                    <li><Link to="/exports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Our Exports</Link></li>
                                    <li><Link to="/awards" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Awards & Certifications</Link></li>
                                    <li><Link to="/manufacturing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Manufacturing Facilities</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Products with Dropdown */}
                        <li className="relative">
                            <Link to='/product'>
                            <button
                                onClick={handleDropdownToggleProducts}
                                className={`py-2 px-3 md:p-0 rounded ${location.pathname.startsWith('/products') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                            >
                                Products
                            </button></Link>
                            {(
        isDropdownOpenProducts && (
            <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-lg">
              <div className="flex flex-wrap">
                <ul className="w-1/2 p-2">
                  <h4 className="font-semibold">Wall Tiles</h4>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-ceramic-tiles', 'section-ceramic')}
                    >
                      Ceramic Tiles
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-greselon', 'section-gvt')}
                    >
                      GVT Cladding
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-stone', 'section-stone')}
                    >
                      Stone Cladding
                    </div>
                  </li>
                  {/* <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-full-body-vitrified', 'section-full-body')}
                    >
                      Full Body Vitrified
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-greselon', 'section-greselon')}
                    >
                      Greselon Tiles
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#wall-exterior', 'section-exterior')}
                    >
                      Exterior Parking Tiles
                    </div>
                  </li> */}
                </ul>
          
                <ul className="w-1/2 p-2">
                  <h4 className="font-semibold">Floor Tiles</h4>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#floor-ceramic', 'section-floor-ceramic')}
                    >
                      Floor Ceramic Tiles
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#floor-full-body-vitrified', 'section-exterior-wall')}
                    >
                      Full Body Vitrified
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#floor-plank', 'section-exterior-wall')}
                    >
                      Planks
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#floor-Double-Charge-Tiles', 'section-exterior-wall')}
                    >
                      Double Charge Tiles
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#exterior-parking-tiles', 'section-exterior-wall')}
                    >
                      Exterior Parking Tiles
                    </div>
                  </li>
                </ul>
          
                <ul className="w-full p-2">
                  <h4 className="font-semibold">Wall/Floor Tiles</h4>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#vogue', 'section-vogue')}
                    >
                      Vogue Collection
                    </div>
                  </li>
                </ul>
          
                <ul className="w-full p-2">
                  <h4 className="font-semibold">Platform Tiles</h4>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#platform-full-body-tiles', 'section-platform')}
                    >
                     Full Body Tiles
                    </div>
                  </li>
                  <li>
                    <div
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSmoothScroll('#gvt-platform-tiles', 'section-platform')}
                    >
                      GVT Platform Tiles
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        )
    )}
                        </li>


                        <li>
                            <Link to="/career" className={`py-2 px-3 md:p-0 rounded ${location.pathname === '/career' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`} onClick={handleLinkClick}>
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`py-2 px-3 md:p-0 rounded ${location.pathname === '/contact' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`} onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='http://13.60.187.34:7171/'>
                                <button className='text-white bg-blue-700 rounded p-1'>Log In</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

