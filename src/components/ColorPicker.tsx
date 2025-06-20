import React, { useState } from 'react';
import HueSlider from './HueSlider';
import SaturationPicker from './SaturationPicker';
import HexInput from './HexInput';
import { rgbToHex, hexToRgb, hslToRgb } from '../utils/colorUtils';

interface ColorPickerProps {
  initialColor?: string; // Hex color, e.g., "#ff0000"
  onChange?: (color: string) => void; // Callback for color changes
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColor = '#ff0000',
  onChange,
}) => {
  const [hex, setHex] = useState(initialColor);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(1);
  const [lightness, setLightness] = useState(0.5);

  const updateColor = (newHex: string) => {
    setHex(newHex);
    const rgb = hexToRgb(newHex);
    if (rgb) {
      // Convert RGB to HSL for sliders
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      setHue(hsl.h);
      setSaturation(hsl.s);
      setLightness(hsl.l);
      onChange?.(newHex);
    }
  };

  const handleHueChange = (newHue: number) => {
    setHue(newHue);
    const rgb = hslToRgb(newHue, saturation, lightness);
    const newHex = rgbToHex(rgb.r, rgb.g, rgb.b);
    setHex(newHex);
    onChange?.(newHex);
  };

  const handleSaturationChange = (newSat: number, newLight: number) => {
    setSaturation(newSat);
    setLightness(newLight);
    const rgb = hslToRgb(hue, newSat, newLight);
    const newHex = rgbToHex(rgb.r, rgb.g, rgb.b);
    setHex(newHex);
    onChange?.(newHex);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64">
      <SaturationPicker
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={handleSaturationChange}
      />
      <HueSlider hue={hue} onChange={handleHueChange} />
      <HexInput color={hex} onChange={updateColor} />
      <div
        className="h-8 w-full mt-2 rounded"
        style={{ backgroundColor: hex }}
      ></div>
    </div>
  );
};

// Helper function to convert RGB to HSL
const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
};

export default ColorPicker;