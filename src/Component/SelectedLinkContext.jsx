import React, { createContext, useState, useContext } from 'react';

// Create context for selected link
const SelectedLinkContext = createContext();

// Custom hook to use the selected link context
export const useSelectedLink = () => {
  const context = useContext(SelectedLinkContext);
  if (!context) {
    throw new Error('useSelectedLink must be used within a SelectedLinkProvider');
  }
  return context;
};

// Provider component to wrap your application and manage selected link state
export const SelectedLinkProvider = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleSelectLink = (link) => {
    setSelectedLink(link);
  };

  return (
    <SelectedLinkContext.Provider value={{ selectedLink, handleSelectLink }}>
      {children}
    </SelectedLinkContext.Provider>
  );
};
