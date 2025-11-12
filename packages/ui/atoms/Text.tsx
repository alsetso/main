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
    display: 'text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight',
    subheading: 'text-xl md:text-2xl lg:text-3xl font-medium tracking-tight',
    body: 'text-base md:text-lg leading-relaxed font-normal',
    caption: 'text-sm md:text-base text-gray-600 font-normal',
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

