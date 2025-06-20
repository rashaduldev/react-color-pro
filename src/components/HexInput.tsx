import React from 'react';

interface HexInputProps {
  color: string;
  onChange: (color: string) => void;
}

const HexInput: React.FC<HexInputProps> = ({ color, onChange }) => {
  return (
    <div className="mt-2 flex items-center">
      <span className="mr-2 text-gray-700">#</span>
      <input
        type="text"
        value={color.replace('#', '')}
        onChange={(e) => {
          const value = e.target.value;
          const hex = value.match(/^[0-9A-Fa-f]{0,6}$/) ? `#${value}` : color;
          if (hex.length === 7) onChange(hex);
        }}
        className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={6}
        placeholder="Hex Color"
      />
    </div>
  );
};

export default HexInput;