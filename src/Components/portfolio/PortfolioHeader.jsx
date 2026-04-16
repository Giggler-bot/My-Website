import React from 'react';

const filters = [
  { label: 'All work', value: 'all' },
  { label: 'Development', value: 'development' },
  { label: 'Cinematography', value: 'cinematography' },
];

export default function Header({ activeFilter, onFilterChange }) {
  return (
    <div className="mb-8">
      <p className="text-lg font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
        Portfolio
      </p>

      <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
        Giggler Obed
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Software Developer · Filmmaker
      </p>

      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeFilter === f.value
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:text-black'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}