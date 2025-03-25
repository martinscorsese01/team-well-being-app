import React, { useState } from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';

interface WellbeingFormProps {
  onSubmit: (entry: Omit<WellbeingEntry, 'id' | 'date'>) => void;
}

const WellbeingForm: React.FC<WellbeingFormProps> = ({ onSubmit }) => {
  const [entry, setEntry] = useState<Omit<WellbeingEntry, 'id' | 'date'>>({
    name: '',
    mood: 'Okay',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(entry);
    setEntry({ name: '', mood: 'Okay', notes: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={entry.name}
        onChange={(e) => setEntry({...entry, name: e.target.value})}
        required 
      />
      <select 
        value={entry.mood}
        onChange={(e) => setEntry({...entry, mood: e.target.value as WellbeingEntry['mood']})}
      >
        <option>Excellent</option>
        <option>Good</option>
        <option>Okay</option>
        <option>Not Great</option>
        <option>Challenging</option>
      </select>
      <textarea 
        placeholder="Additional Notes (Optional)"
        value={entry.notes}
        onChange={(e) => setEntry({...entry, notes: e.target.value})}
      />
      <button type="submit">Submit Wellbeing Check</button>
    </form>
  );
};

export default WellbeingForm; 