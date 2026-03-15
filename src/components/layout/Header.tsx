import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { services } from '../utilities/services/services';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Media & News', path: '/media-news' },
    { title: 'Patient Stories', path: '/patient-stories' },
    { title: "Meet The Expert", path: '/about' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/pratik-kishore-83072a184?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    // { icon: <FaGoogle className="w-5 h-5" />, url: 'https://share.google/f5CQnYWopTuVjFRzD' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
         {/* Logo */}
<Link to="/" className="flex items-center">
    <img 
      src={`/images/neurologo.jpeg?t=${new Date().getTime()}`} 
      alt="Neuropoint Medical Center logo" 
      className="h-20 w-auto object-contain"
    />

</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}

            {/* Services Dropdown - Desktop */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-amber-600 hover:text-amber-800 transition-colors duration-200"
              >
                <span>More</span>
                <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className="absolute hidden group-hover:block right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                >
                  All Services
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    className="block px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-2"></div>
                <Link
                  to='/contact'
                  className="block px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-600 hover:text-amber-800 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Services Menu - Mobile (Always Open) */}
              <div className="space-y-2">
                <div className="text-amber-600 font-medium">More</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/services"
                    className="block text-amber-600 hover:text-amber-800 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>

                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="block text-amber-600 hover:text-amber-800 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-2"></div>

                  <Link
                    to='/contact'
                    className="block px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Social Media Icons - Mobile */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;