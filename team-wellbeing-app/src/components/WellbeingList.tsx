import React, { useState } from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';

const WellbeingList: React.FC = () => {
  const [entries, setEntries] = useState<WellbeingEntry[]>([]);

  return (
    <div>
      <h2>Team Wellbeing Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.name}</strong> - {entry.mood}
              {entry.notes && <p>{entry.notes}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WellbeingList; 