import { useState, useEffect } from 'react';

export default function MirrorInputs() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  useEffect(() => {
    setInputB(inputA);
  }, [inputA]);

  return (
    <div className="space-y-2">
      <input
        className="border rounded px-3 py-1"
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
        placeholder="Input A"
      />
      <input
        className="border rounded px-3 py-1"
        value={inputB}
        readOnly
      />
    </div>
  );
}
