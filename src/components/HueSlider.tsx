import React from 'react';

interface HueSliderProps {
  hue: number;
  onChange: (hue: number) => void;
}

const HueSlider: React.FC<HueSliderProps> = ({ hue, onChange }) => {
  return (
    <div className="mt-2">
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gradient-to-r from-red via-yellow via-green via-cyan via-blue via-magenta to-red rounded appearance-none cursor-pointer"
      />
    </div>
  );
};

export default HueSlider;