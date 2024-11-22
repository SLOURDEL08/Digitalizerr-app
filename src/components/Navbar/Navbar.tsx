import React, { useState, useEffect } from 'react';
import Button from '../Button';
import logo from '../../images/logo.png';
import { Menu, X } from 'lucide-react';
import { useNavigation } from './NavigationContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, setIsScrolled, setIsDropdownOpen } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled]);

  useEffect(() => {
    const scrollTarget = localStorage.getItem('scrollTo');
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', `/#${scrollTarget}`);
        }
        localStorage.removeItem('scrollTo');
      }, 500);
    }
  }, []);

  const handleNavigation = (href: string, isAnchor?: boolean) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);

    if (isAnchor) {
      const currentPath = window.location.pathname;

      if (currentPath === '/') {
        const element = document.getElementById('developpement');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', '/#developpement');
        }
      } else {
        localStorage.setItem('scrollTo', 'developpement');
        window.location.href = '/#developpement';
      }
    } else {
      window.location.href = href;
    }
  };

  const handleContactClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Préserver l'URL courante et ajouter #contact
      const currentPath = window.location.pathname;
      const newPath = currentPath === '/' ? '/#contact' : `${currentPath}#contact`;
      window.history.pushState({}, '', newPath);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const MenuLinks = () => (
    <>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/', false);
        }}
        className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70"
      >
        Accueil
      </a>
      <a
        href="#developpement"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/#developpement', true);
        }}
        className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70"
      >
        Website
      </a>
      <a
        href="/design"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/design', false);
        }}
        className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70"
      >
        Design
      </a>
      <a
        href="/marketing"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/marketing', false);
        }}
        className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70"
      >
        Marketing
      </a>
      <Button
        variant="primary"
        size="medium"
        onClick={handleContactClick}
        className="text-[#000] tracking-widest shadowlight !bg-[#F6D663] hover:!text-[#fff]"
      >
        Contact
      </Button>
    </>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 rounded-2xl w-full p-10 py-7 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg iscrolled rounded-2xl' : ''
      }`}>
        <div className="mx-auto flex w-full justify-between items-center">
          <img 
            src={logo} 
            className="w-20 h-auto cursor-pointer" 
            alt="Logo" 
            onClick={() => handleNavigation('/', false)}
          />
          <div className="hidden md:flex space-x-10 w-full uppercase justify-end items-center">
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
          <MenuLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;