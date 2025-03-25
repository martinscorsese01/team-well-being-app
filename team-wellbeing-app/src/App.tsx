import React, { useState } from 'react';
import './App.css';
import WellbeingForm from './components/WellbeingForm';
import WellbeingList from './components/WellbeingList';
import { WellbeingEntry } from './types/WellbeingEntry';

function App() {
  const [entries, setEntries] = useState<WellbeingEntry[]>([]);

  const handleAddEntry = (entry: Omit<WellbeingEntry, 'id' | 'date'>) => {
    const newEntry: WellbeingEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    setEntries([newEntry, ...entries]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Wellbeing Tracker</h1>
      </header>
      <main className="App-main">
        <WellbeingForm onSubmit={handleAddEntry} />
        <WellbeingList entries={entries} />
      </main>
    </div>
  );
}

export default App;
