import React, { createContext, useState, useContext, useEffect } from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';
import { supabase } from '../lib/supabase';

interface WellbeingContextType {
  entries: WellbeingEntry[];
  addEntry: (entry: Omit<WellbeingEntry, 'id' | 'date'>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const WellbeingContext = createContext<WellbeingContextType | undefined>(undefined);

export const WellbeingProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [entries, setEntries] = useState<WellbeingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch entries on component mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('wellbeing_entries')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;

      setEntries(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addEntry = async (newEntry: Omit<WellbeingEntry, 'id' | 'date'>) => {
    try {
      const entryWithDate = {
        ...newEntry,
        date: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('wellbeing_entries')
        .insert([entryWithDate])
        .select()
        .single();

      if (error) throw error;

      setEntries(prev => [data, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while adding entry');
      throw err;
    }
  };

  return (
    <WellbeingContext.Provider value={{ entries, addEntry, isLoading, error }}>
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