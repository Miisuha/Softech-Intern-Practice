import { useState } from 'react';

const DATA = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export default function SearchFilter() {
  const [query, setQuery] = useState('');

  const filtered = DATA.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <input
        className="w-64 px-2 py-1 border rounded"
        placeholder="Search…"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul className="list-disc list-inside">
        {filtered.length ? (
          filtered.map(i => <li key={i}>{i}</li>)
        ) : (
          <li className="italic text-gray-500">No matches</li>
        )}
      </ul>
    </div>
  );
}
