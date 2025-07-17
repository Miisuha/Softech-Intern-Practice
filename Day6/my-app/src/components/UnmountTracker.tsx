import { useEffect } from 'react';

export default function UnmountTracker() {
  useEffect(() => {
    return () => console.log('Component unmounted!');
  }, []);

  return <div className="text-blue-500">UnmountTracker is active</div>;
}
