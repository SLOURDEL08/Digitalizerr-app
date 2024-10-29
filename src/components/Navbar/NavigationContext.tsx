import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <NavigationContext.Provider 
      value={{ 
        isScrolled, 
        setIsScrolled,
        isDropdownOpen,
        setIsDropdownOpen
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};