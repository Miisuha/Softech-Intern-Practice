import { useEffect } from 'react';

export default function ColorSplash() {
  useEffect(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, []);

  const getRandomColor = () =>
    ['red', 'blue', 'green', 'purple'][Math.floor(Math.random() * 4)];

  return (
    <div className="p-6 text-white font-semibold text-xl">
      Background changed on mount
    </div>
  );
}
