import { useState } from 'react';

const COLORS = [
  { key: 'sky',    light: 'bg-sky-200',    solid: 'bg-sky-500' },
  { key: 'rose',   light: 'bg-rose-200',   solid: 'bg-rose-500' },
  { key: 'amber',  light: 'bg-amber-200',  solid: 'bg-amber-500' },
  { key: 'lime',   light: 'bg-lime-200',   solid: 'bg-lime-500' },
  { key: 'violet', light: 'bg-violet-200', solid: 'bg-violet-500' },
] as const;

export default function ColorPicker() {
  const [color, setColor] =
    useState<(typeof COLORS)[number]['key']>('sky');

  const palette = COLORS.find(c => c.key === color)!;

  return (
    <div className={`p-4 rounded-lg flex flex-wrap gap-2 transition-colors ${palette.light}`}>
      {COLORS.map(c => (
        <button
          key={c.key}
          className={`px-3 py-1 rounded text-white ${c.solid}`}
          onClick={() => setColor(c.key)}
        >
          {c.key}
        </button>
      ))}
    </div>
  );
}
