import { useState, useEffect } from 'react';

export default function KeyDisplay() {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handle = (e: KeyboardEvent) => setKey(e.key);
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  return <div className="text-xl">You pressed: <span className="font-bold">{key}</span></div>;
}
