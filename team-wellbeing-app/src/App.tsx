import React from 'react';
import './App.css';
import WellbeingForm from './components/WellbeingForm';
import WellbeingList from './components/WellbeingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Wellbeing Check-in</h1>
      </header>
      <main className="App-main">
        <WellbeingForm />
        <WellbeingList />
      </main>
    </div>
  );
}

export default App;
