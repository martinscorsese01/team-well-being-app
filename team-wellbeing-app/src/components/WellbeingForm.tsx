import React, { useState } from 'react';
import { WellbeingEntry } from '../types/WellbeingEntry';
import { useWellbeing } from '../context/WellbeingContext';

const WellbeingForm: React.FC = () => {
  const { addEntry } = useWellbeing();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [entry, setEntry] = useState<Omit<WellbeingEntry, 'id' | 'date'>>({
    name: '',
    mood: 'Okay',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await addEntry(entry);
      setEntry({ name: '', mood: 'Okay', notes: '' }); // Reset form
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit entry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input 
        type="text" 
        placeholder="Your Name" 
        value={entry.name}
        onChange={(e) => setEntry({...entry, name: e.target.value})}
        required 
        disabled={isSubmitting}
      />
      <select 
        value={entry.mood}
        onChange={(e) => setEntry({...entry, mood: e.target.value as WellbeingEntry['mood']})}
        disabled={isSubmitting}
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
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Wellbeing Check'}
      </button>
    </form>
  );
};

export default WellbeingForm; 