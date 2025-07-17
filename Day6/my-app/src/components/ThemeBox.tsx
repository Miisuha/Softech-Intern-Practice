import { useState, useEffect } from 'react';

export default function ThemeBox() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#1f2937'; // dark gray
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="mt-4 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}
