import React from 'react';
import './App.css';
import WellbeingForm from './components/WellbeingForm';
import WellbeingList from './components/WellbeingList';
import { WellbeingProvider } from './context/WellbeingContext';

function App() {
  return (
    <WellbeingProvider>
      <div className="App">
        <header className="App-header">
          <h1>Team Wellbeing Tracker</h1>
        </header>
        <main className="App-main">
          <WellbeingForm />
          <WellbeingList />
        </main>
      </div>
    </WellbeingProvider>
  );
}

export default App;
