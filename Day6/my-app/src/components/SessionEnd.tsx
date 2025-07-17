import { useEffect } from 'react';

export default function SessionEnd() {
  useEffect(() => {
    return () => {
      console.log('Session ended!');
    };
  }, []);

  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900">
      <p className="font-semibold">Session Active</p>
      <p>This will log "Session ended!" when removed.</p>
    </div>
  );
}
