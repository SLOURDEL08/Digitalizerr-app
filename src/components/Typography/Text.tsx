// src/components/Typography/Text.tsx
import React from 'react';
import { Typography } from './Typography';

interface TextComponentProps {
  className?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export const Title = React.forwardRef<HTMLHeadingElement, TextComponentProps>(({ 
  children, 
  className = '', 
  type = 'primary',
  ...props 
}, ref) => (
  <Typography
    variant="title"
    type={type}
    component="h1"
    className={className}
    ref={ref}
    {...props}
  >
    {children}
  </Typography>
));

export const Subtitle = React.forwardRef<HTMLHeadingElement, TextComponentProps>(({ 
  children, 
  className = '', 
  type = 'primary',
  ...props 
}, ref) => (
  <Typography
    variant="subtitle"
    type={type}
    component="h2"
    className={className}
    ref={ref}
    {...props}
  >
    {children}
  </Typography>
));

export const Paragraph = React.forwardRef<HTMLParagraphElement, TextComponentProps>(({ 
  children, 
  className = '', 
  type = 'primary',
  ...props 
}, ref) => (
  <Typography
    variant="paragraph"
    type={type}
    component="p"
    className={className}
    ref={ref}
    {...props}
  >
    {children}
  </Typography>
));

Title.displayName = 'Title';
Subtitle.displayName = 'Subtitle';
Paragraph.displayName = 'Paragraph';