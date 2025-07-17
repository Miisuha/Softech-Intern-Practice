import { useEffect } from 'react';

export default function MountNotice() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return <p className="text-green-600 text-base">Check console for mount log.</p>;
}
