import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      onClick={() => setIsOn(prev => !prev)}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
