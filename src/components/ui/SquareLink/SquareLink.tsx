import React from 'react';

interface SquareLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const SquareLink: React.FC<SquareLinkProps> = ({ href, children, target }) => (
  <a href={href} target={target} className='border border-blue-200 dark:border-lime-400 dark:text-white hover:text-blue-600 dark:hover:text-lime-400 hover:scale-105 rounded-md shadow-md px-4 py-2 transition-all duration-200 ease-in-out'>
    {children}
  </a >
)
export default SquareLink;