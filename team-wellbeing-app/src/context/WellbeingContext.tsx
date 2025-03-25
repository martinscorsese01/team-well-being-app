import React, { createContext, useState, useContext } from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';

interface WellbeingContextType {
  entries: WellbeingEntry[];
  addEntry: (entry: Omit<WellbeingEntry, 'id' | 'date'>) => void;
}

const WellbeingContext = createContext<WellbeingContextType | undefined>(undefined);

export const WellbeingProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [entries, setEntries] = useState<WellbeingEntry[]>([]);

  const addEntry = (newEntry: Omit<WellbeingEntry, 'id' | 'date'>) => {
    const entryWithDate = {
      ...newEntry,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    setEntries(prevEntries => [entryWithDate, ...prevEntries]);
  };

  return (
    <WellbeingContext.Provider value={{ entries, addEntry }}>
      {children}
    </WellbeingContext.Provider>
  );
};

export const useWellbeing = () => {
  const context = useContext(WellbeingContext);
  if (context === undefined) {
    throw new Error('useWellbeing must be used within a WellbeingProvider');
  }
  return context;
}; 