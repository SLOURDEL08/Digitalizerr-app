import React, { useState, useEffect } from 'react';
import Button from '../Button';
import logo from '../../images/logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import DropDown from './DropDown';
import { NAVIGATION_LINKS, SCROLL_OFFSET } from './navigationLinks';

interface ButtonProps {
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, setIsScrolled, isDropdownOpen, setIsDropdownOpen } = useNavigation();

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = async (href: string, isAnchor?: boolean) => {
    // Fermer le dropdown et le menu mobile
    setIsDropdownOpen(false);
    setIsMenuOpen(false);

    // Si c'est un lien ancre (#)
    if (isAnchor) {
      const sectionId = href.split('#')[1];
      const currentPath = window.location.pathname;

      // Cas spécial pour le contact : scroll vers la section contact sur n'importe quelle page
      if (sectionId === 'contact') {
        scrollToSection('contact');
        return;
      }

      // Cas spécial pour le développement
      if (sectionId === 'developpement') {
        if (currentPath === '/') {
          // Si on est déjà sur la page d'accueil, on scroll
          scrollToSection('developpement');
        } else {
          // Sinon, on redirige vers la page d'accueil avec un callback pour scroller
          window.location.href = `/#developpement`;
        }
        return;
      }

      // Pour les autres sections avec ancre
      scrollToSection(sectionId);
    } else {
      // Navigation normale pour les liens non-ancre
      window.location.href = href;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleServices = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const ServicesDropdown = ({ isOverlay = false }) => (
    isOverlay ? (
      <div className="w-full">
        <button
          onClick={toggleServices}
          className="text-white pantonlight tracking-wide underlined transition-all flex items-center text-3xl text-left opacity-100 hover:opacity-70 justify-between w-full"
        >
          Nos services
          <ChevronDown size={24} className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {NAVIGATION_LINKS.servicesLinks.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="block text-white pantonlight text-2xl opacity-100 hover:opacity-70"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleNavigation(service.href, service.isAnchor);
                }}
              >
                {service.label}
              </a>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className="relative services-dropdown">
        <button
          onClick={toggleServices}
          className="text-white pantonlight tracking-wide underlined transition-all hover:opacity-70 flex items-center"
        >
          Nos services
          <ChevronDown 
            size={16} 
            className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>
    )
  );

  const MenuLinks = ({ isOverlay = false }) => (
    <>
      {NAVIGATION_LINKS.mainLinks.map((link, index) => {
        if (link.isDropdown) {
          return <ServicesDropdown key={index} isOverlay={isOverlay} />;
        }
        if (link.isButton) {
          return (
            <Button
              key={index}
              variant="primary"
              size="medium"
              onClick={() => handleNavigation(link.href, link.isAnchor)}
              className={`text-[#000] tracking-widest shadowlight !bg-[#F6D663] hover:!text-[#fff] ${isOverlay ? 'px-8 !text-2xl bg-white justify-start' : ''}`}
            >
              {link.label}
            </Button>
          );
        }
        return (
          <a
            key={index}
            href={link.href}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleNavigation(link.href, link.isAnchor);
            }}
            className={`text-white pantonlight tracking-wide underlined transition-all ${isOverlay ? 'text-3xl text-left opacity-100 hover:opacity-70' : 'hover:opacity-70'}`}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.services-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen, setIsDropdownOpen]);

  // Gestion du hash dans l'URL lors du chargement initial
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

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
      <DropDown />
    </>
  );
};

export default Navbar;