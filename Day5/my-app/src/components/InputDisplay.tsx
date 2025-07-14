import { useState } from 'react';

export default function InputDisplay() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-2">
      <input
        className="w-60 px-2 py-1 border rounded"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something…"
      />
      <p className="text-gray-700">
        Current value:&nbsp;
        <span className={value ? '' : 'italic text-gray-400'}>
          {value || '—'}
        </span>
      </p>
    </div>
  );
}
