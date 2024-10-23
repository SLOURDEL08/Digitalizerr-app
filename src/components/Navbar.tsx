import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo from '../images/logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigation } from './NavigationContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { setIsServicesHovered, isScrolled, setIsScrolled } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServicesHovered(!isServicesOpen); // Synchronise l'état du dropdown avec le hover
  };

  const ServicesDropdown = ({ isOverlay = false }) => (
    isOverlay ? (
      <div className="w-full">
        <button
          onClick={toggleServices}
          className="text-white pantonlight tracking-wide underlined transition-all flex items-center text-3xl text-left opacity-100 hover:opacity-70 justify-between w-full"
        >
          Nos services
          <ChevronDown size={24} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {isServicesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {['Service 1', 'Service 2', 'Service 3'].map((service, index) => (
              <a
                key={index}
                href="/"
                className="block text-white pantonlight text-2xl opacity-100 hover:opacity-70"
              >
                {service}
              </a>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className="relative">
        <button
          onClick={toggleServices}
          className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70 flex items-center"
        >
          Nos services
          <ChevronDown 
            size={16} 
            className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>
    )
  );

  const MenuLinks = ({ isOverlay = false }) => (
    <>
      <a href="/" className={`text-white pantonlight tracking-wide underlined transition-all ${isOverlay ? 'text-3xl text-left opacity-100 hover:opacity-70' : 'hover:opacity-70'}`}>
        Accueil
      </a>
      <ServicesDropdown isOverlay={isOverlay} />
      <a href="/" className={`text-white pantonlight tracking-wide underlined transition-all ${isOverlay ? 'text-3xl text-left opacity-100 hover:opacity-70' : 'hover:opacity-70'}`}>
        Nos projets
      </a>
      <Button
        variant="primary"
        size="medium"
        className={`text-[#000] tracking-widest shadowlight !bg-[#F6D663] hover:!text-[#fff] ${isOverlay ? 'px-8 !text-2xl bg-white justify-start' : ''}`}
      >
        CONTACT
      </Button>
    </>
  );

  // Gestionnaire pour fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isServicesOpen && !target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
        setIsServicesHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen, setIsServicesHovered]);

  return (
    <>
      <nav className={`fixed top-0 left-0 rounded-2xl w-full p-10 py-7 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg iscrolled rounded-2xl' : ''
      }`}>
        <div className="mx-auto flex w-full justify-between items-center">
          <img src={logo} className='w-20 h-auto' alt="Logo" />
          <div className={"hidden md:flex space-x-10 w-full uppercase justify-end items-center"}>
            <MenuLinks />
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay Menu Mobile */}
      <div className={`fixed inset-0 bg-[#2e0f84]/80 backdrop-blur z-50 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-start justify-center h-full space-y-8 px-10">
          <MenuLinks isOverlay={true} />
        </div>
      </div>
    </>
  );
};

export default Navbar;