import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="bg-white text-black p-4">{children}</div>;
};

export default Container;
