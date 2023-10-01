import React from 'react';

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="md:max-w-screen-xl flex flex-col justify-center items-center m-auto">
    {children}
  </div>
)

export default Container;
