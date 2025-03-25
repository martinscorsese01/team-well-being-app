import React, { useEffect, useState } from 'react';
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js';
import { useSupabase } from './context/SupabaseContext';
import Auth from './components/Auth';
import WellbeingForm from './components/WellbeingForm';
import WellbeingList from './components/WellbeingList';

function App() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }: { data: { session: Session | null } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (signed in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="relative mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Team Wellbeing Tracker
          </h1>
          {user && (
            <button
              onClick={handleSignOut}
              className="absolute top-0 right-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              Sign Out
            </button>
          )}
        </header>

        <main>
          {!user ? (
            <Auth />
          ) : (
            <div className="space-y-8">
              <WellbeingForm />
              <WellbeingList />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
