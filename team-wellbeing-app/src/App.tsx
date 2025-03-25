import React from 'react';
import './App.css';
import WellbeingForm from './components/WellbeingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Wellbeing Check-in</h1>
      </header>
      <main className="App-main">
        <WellbeingForm />
      </main>
    </div>
  );
}

export default App;
