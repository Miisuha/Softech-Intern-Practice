import { useEffect, useState } from 'react';

export default function WindowDimensions() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 border rounded">
      <p className="text-lg font-medium">Window Size</p>
      <p className="text-sm text-gray-700">Width: {size.width}px</p>
      <p className="text-sm text-gray-700">Height: {size.height}px</p>
    </div>
  );
}
