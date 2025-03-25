import React from 'react';
import { useWellbeing } from '../context/WellbeingContext';
import { WellbeingEntry } from '../types/WellbeingEntry';

const getMoodStyle = (mood: WellbeingEntry['mood']) => {
  switch (mood) {
    case 'Excellent':
      return 'bg-green-100 text-green-800 ring-green-600/20';
    case 'Good':
      return 'bg-blue-100 text-blue-800 ring-blue-600/20';
    case 'Okay':
      return 'bg-yellow-100 text-yellow-800 ring-yellow-600/20';
    case 'Not Great':
      return 'bg-orange-100 text-orange-800 ring-orange-600/20';
    case 'Challenging':
      return 'bg-red-100 text-red-800 ring-red-600/20';
    default:
      return 'bg-gray-100 text-gray-800 ring-gray-600/20';
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const WellbeingList: React.FC = () => {
  const { entries, isLoading, error } = useWellbeing();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex justify-center items-center h-32">
          <div className="inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-gray-500">Loading entries...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-red-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-red-800">Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Team Wellbeing Entries
      </h2>

      {entries.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No entries yet</h3>
          <p className="mt-1 text-sm text-gray-500">Be the first to share your wellbeing status!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {entry.name}
                </h3>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ring-1 ring-inset ${getMoodStyle(entry.mood)}`}>
                  {entry.mood}
                </span>
              </div>

              {entry.notes && (
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {entry.notes}
                </p>
              )}

              <time className="block text-xs text-gray-400 font-medium">
                {formatDate(entry.date)}
              </time>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WellbeingList; 