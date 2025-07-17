import { useEffect } from 'react';

export default function Farewell() {
  useEffect(() => {
    return () => alert('Component removed!');
  }, []);

  return <div className="text-red-500">Farewell Component</div>;
}
