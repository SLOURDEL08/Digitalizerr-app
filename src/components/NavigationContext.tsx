// NavigationContext.tsx
import React, { createContext, useContext, useState, useRef } from 'react';

interface NavigationContextType {
  isServicesHovered: boolean;
  isScrolled: boolean;
  setIsServicesHovered: (value: boolean) => void;
  setIsScrolled: (value: boolean) => void;
  timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
}

export const NavigationContext = createContext<NavigationContextType>({
  isServicesHovered: false,
  isScrolled: false,
  setIsServicesHovered: () => {},
  setIsScrolled: () => {},
  timeoutRef: { current: null },
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <NavigationContext.Provider value={{ 
      isServicesHovered, 
      isScrolled,
      setIsServicesHovered,
      setIsScrolled,
      timeoutRef
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);