import { useState, useEffect } from 'react';

export default function CountDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) alert(`Count is now ${count}`);
  }, [count]);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setCount((c) => c + 1)}
    >
      Count: {count}
    </button>
  );
}
