import { useState } from 'react';

export default function HoverBox() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-52 h-20 flex items-center justify-center border rounded shadow-sm bg-white transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? 'Hello there!' : 'Hover over me'}
    </div>
  );
}
