import React, {createContext, useState, useContext} from 'react';

interface SharedStateContextType {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

const SharedStateContext = createContext<SharedStateContextType | undefined>(
  undefined,
);

export const SharedStateProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <SharedStateContext.Provider value={{isEnabled, toggleSwitch}}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (context === undefined) {
    throw new Error('useSharedState must be used within a SharedStateProvider');
  }
  return context;
};
