import React, { createContext, useContext } from 'react';

//step1 creat context
export const NameContext = createContext('');

//step2 put the values we want in the provider
export const NameProvider = (props) => {
  const { children } = props;

  const context = {
    name: 'Kaung',
  };

  return (
    <NameContext.Provider value={context}>{children}</NameContext.Provider>
  );
};

//step 3 creat a usehook to pass on the value
export const useName = () => {
  const context = useContext(NameContext);
  return {
    ...context,
  };
};
