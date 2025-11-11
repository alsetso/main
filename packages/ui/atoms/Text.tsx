import { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'display' | 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
  children: ReactNode;
}

export function Text({ 
  as = 'p', 
  variant = 'body', 
  className = '', 
  children,
  ...props 
}: TextProps) {
  const Component = as;
  
  const variants = {
    display: 'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none',
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    subheading: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    body: 'text-base md:text-lg leading-relaxed',
    caption: 'text-sm md:text-base text-gray-600',
  };

  return (
    <Component 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

