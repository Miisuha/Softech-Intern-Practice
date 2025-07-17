import { useEffect, useState } from 'react';

export default function PageTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title || 'React App';
  }, [title]);

  return (
    <input
      className="border rounded px-3 py-1 mt-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter page title"
    />
  );
}
