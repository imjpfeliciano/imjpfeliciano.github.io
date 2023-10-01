import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <div className="md:max-w-screen-xl flex flex-col justify-center items-center m-auto" {...rest}>
    {children}
  </div>
)

export default Container;
