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
      setEntry({ name: '', mood: 'Okay', notes: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit entry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Wellbeing Status</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm border border-red-200">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={entry.name}
            onChange={(e) => setEntry({...entry, name: e.target.value})}
            required
            disabled={isSubmitting}
            placeholder="Enter your name"
            className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
            How are you feeling today?
          </label>
          <select
            id="mood"
            value={entry.mood}
            onChange={(e) => setEntry({...entry, mood: e.target.value as WellbeingEntry['mood']})}
            disabled={isSubmitting}
            className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50 disabled:text-gray-500"
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Okay">Okay</option>
            <option value="Not Great">Not Great</option>
            <option value="Challenging">Challenging</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            value={entry.notes}
            onChange={(e) => setEntry({...entry, notes: e.target.value})}
            disabled={isSubmitting}
            placeholder="Share any additional thoughts..."
            rows={4}
            className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Wellbeing Check'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WellbeingForm; 