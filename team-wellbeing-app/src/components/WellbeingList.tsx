import React from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';

interface WellbeingListProps {
  entries: WellbeingEntry[];
}

const WellbeingList: React.FC<WellbeingListProps> = ({ entries }) => {
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