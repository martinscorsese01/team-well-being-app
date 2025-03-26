# Team Wellbeing App

## Introduction
The Team Wellbeing App is a modern application designed to help teams monitor and manage their collective mental health and wellbeing. This full-stack solution provides a secure, user-friendly platform for team members to track their daily mental health status, identify patterns, and promote a supportive work environment.

## Solution Overview
The application implements a modern web architecture:
- **Frontend**: React with TypeScript and Tailwind CSS for responsive UI
- **Backend**: Supabase for authentication, database, and real-time features
- **Deployment**: vercel with automated deployment

## Project Aim & Objectives

### Main Goal
To provide a secure and intuitive platform for team members to track and share their wellbeing data, fostering a culture of support and mental health awareness.

### Key Objectives
1. Implement secure user authentication with Supabase Auth
2. Enable real-time wellbeing data tracking and visualization
3. Ensure data privacy and protection of sensitive information
4. Provide an intuitive, responsive user interface with Tailwind CSS
5. Create a scalable application architecture

## Technical Considerations

### Performance
- Component-based architecture with React
- Optimized Supabase queries
- Efficient state management
- Responsive design for all device sizes

### Scalability
- Leveraging Supabase's PostgreSQL database
- Modular component structure
- Reusable UI components
- Separation of concerns in code organization

### Security
- JWT-based authentication with Supabase
- Row-level security in database
- Input validation and sanitization
- Secure environment variable management

### Code Structure
- `/src/components`: Reusable UI components
- `/src/context`: Application context providers
- `/src/hooks`: Custom React hooks
- `/src/types`: TypeScript type definitions
- `/src/utils`: Utility functions

## Main Components

### User Authentication
- Location: `/src/components/Auth`
- Integration with Supabase Auth
- Login/signup functionality
- Session management

### Wellbeing Form
- Location: `/src/components/WellbeingForm`
- Daily wellbeing tracking
- Mood and sentiment recording
- Personal notes and reflections

### Wellbeing List
- Location: `/src/components/WellbeingList`
- Historical wellbeing data display
- Data filtering and sorting
- Team-wide insights (for authorized users)

### Supabase Context
- Location: `/src/context/SupabaseContext`
- Centralized Supabase client management
- Authentication state management
- Database access methods

## Feature Overview

### User Management
- Secure authentication
- User profiles
- Role-based permissions

### Wellbeing Tracking
- Daily mood tracking
- Sentiment analysis
- Trend visualization

### Team Insights
- Aggregated wellbeing metrics
- Anonymized team reporting
- Historical data analysis

## Future Enhancements

### Planned Improvements
- Advanced analytics dashboard
- Team-wide notifications
- Calendar integration
- Custom reporting features
- Mobile-optimized experience

## Technical Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React hooks for state management
- Jest for testing

### Backend
- Supabase for authentication
- PostgreSQL database (via Supabase)
- Supabase realtime subscriptions
- Row-level security policies

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Supabase account and project

### Setup Steps
1. Clone the repository:
```bash
git clone https://github.com/martinscorsese01/team-well-being-app.git
cd team-well-being-app

Install dependencies:

bashCopynpm install

Configure environment variables:

bashCopy# Create .env.local file with Supabase credentials
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

Start the development server:

bashCopynpm start
Database Schema
Users Table

Managed by Supabase Auth

Wellbeing Entries

id: UUID (primary key)
user_id: UUID (foreign key to auth.users)
date: Date
mood_score: Integer (1-10)
notes: Text
created_at: Timestamp
updated_at: Timestamp

Testing Strategy

Unit tests with Jest
Component tests with React Testing Library
Integration tests for critical flows
Accessibility testing

License
MIT License
