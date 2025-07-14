import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
        onClick={() => setCount(c => c - 1)}
      >
        –
      </button>

      <span className="w-10 text-center text-xl">{count}</span>

      <button
        className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
        onClick={() => setCount(c => c + 1)}
      >
        +
      </button>
    </div>
  );
}
