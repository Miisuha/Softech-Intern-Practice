import { useEffect } from 'react';

export default function WelcomeMessage() {
  useEffect(() => {
    alert('Welcome to the app!');
  }, []);

  return <div className="p-4 text-lg font-bold text-blue-600">WelcomeMessage Component</div>;
}