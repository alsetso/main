import { HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: ReactNode;
}

export function Container({ 
  size = 'lg', 
  className = '', 
  children,
  ...props 
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div 
      className={`mx-auto px-6 md:px-8 lg:px-12 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

