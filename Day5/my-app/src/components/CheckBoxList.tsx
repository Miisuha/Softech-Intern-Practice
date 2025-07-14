import { useState } from 'react';

const ITEMS = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
] as const;

export default function CheckBoxList() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  return (
    <div className="space-y-1">
      {ITEMS.map(item => (
        <label key={item.id} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => toggle(item.id)}
          />
          {item.label}
        </label>
      ))}

      <p className="text-sm text-gray-600">
        Selected:&nbsp;
        {selected.length ? selected.join(', ') : 'None'}
      </p>
    </div>
  );
}
