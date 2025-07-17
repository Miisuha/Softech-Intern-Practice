import { useEffect, useState } from 'react';

export default function ColorFlasher() {
  const [color, setColor] = useState('white');

  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-20 flex items-center justify-center text-white font-bold"
      style={{ backgroundColor: color }}
    >
      Flashing Color
    </div>
  );
}
