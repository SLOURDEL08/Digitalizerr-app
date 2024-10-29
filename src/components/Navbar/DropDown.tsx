import React, { useEffect, useRef } from 'react';
import { useNavigation } from './NavigationContext';
import { NAVIGATION_LINKS, SCROLL_OFFSET } from './navigationLinks';

const DropDown: React.FC = () => {
  const { isScrolled, isDropdownOpen, setIsDropdownOpen } = useNavigation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = async (href: string, isAnchor: boolean, e: React.MouseEvent) => {
    e.preventDefault();

    await new Promise(resolve => setTimeout(resolve, 100));

    if (isAnchor) {
      if (href.startsWith('/#')) {
        const currentPath = window.location.pathname;
        const targetHash = href.split('#')[1];

        if (currentPath === '/') {
          scrollToSection(targetHash);
        } else {
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }

    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`
        fixed right-80 w-64 pt-4 
        ease-in-out z-40
        transition-all duration-500
        ${isScrolled ? 'top-[130px]' : 'top-20'}
        ${isDropdownOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }
      `}
    >
      <div className="relative">
        <div
          className="
            absolute inset-0
            bg-black/50
            backdrop-blur-lg rounded-2xl
            z-0
          "
          style={{
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transform: 'translate3d(0,0,0)'
          }}
        />
        
        <div
          className={`
            relative rounded-xl
            transform transition-transform duration-300
            z-10 p-6 space-y-3
            ${isDropdownOpen ? 'scale-100' : 'scale-90'}
          `}
        >
          {NAVIGATION_LINKS.servicesLinks.map((service, index) => (
            <a
              key={index}
              href={service.href}
              onClick={(e) => handleLinkClick(service.href, service.isAnchor || false, e)}
              className="block text-white w-max underlined pantonlight text-md hover:opacity-70 transition-opacity duration-200"
              role="button"
              tabIndex={isDropdownOpen ? 0 : -1}
            >
              {service.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;