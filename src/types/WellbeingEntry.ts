export interface WellbeingEntry {
  id?: string;
  name: string;
  mood: 'Excellent' | 'Good' | 'Okay' | 'Not Great' | 'Challenging';
  notes?: string;
  date: Date;
} 