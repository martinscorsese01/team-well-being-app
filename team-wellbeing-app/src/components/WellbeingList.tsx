import React from 'react';
import { useWellbeing } from '../context/WellbeingContext';

const WellbeingList: React.FC = () => {
  const { entries, isLoading, error } = useWellbeing();

  if (isLoading) {
    return <div className="loading">Loading entries...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <h2>Team Wellbeing Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.name}</strong> - {entry.mood}
              <div className="entry-date">
                {new Date(entry.date).toLocaleDateString()}
              </div>
              {entry.notes && <p>{entry.notes}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WellbeingList; 