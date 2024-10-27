// src/components/Typography/Typography.tsx
import React from 'react';
import { typography } from './styles';

export interface TypographyProps {
  variant: keyof typeof typography;
  type: 'primary' | 'secondary' | 'tertiary';
  component?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(({
  variant,
  type = 'primary',
  component = 'div',
  children,
  className = '',
  ...props
}, ref) => {
  const getTypographyClasses = () => {
    const variantStyle = typography[variant];
    return `${variantStyle.base} ${variantStyle.variants[type]} ${className}`;
  };

  return React.createElement(
    component,
    {
      className: getTypographyClasses(),
      ref,
      ...props
    },
    children
  );
});

Typography.displayName = 'Typography';