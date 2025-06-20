import React, { useRef, useEffect } from 'react';

interface SaturationPickerProps {
  hue: number;
  saturation: number;
  lightness: number;
  onChange: (saturation: number, lightness: number) => void;
}

const SaturationPicker: React.FC<SaturationPickerProps> = ({
  hue,
  saturation,
  lightness,
  onChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create saturation gradient (left to right)
    const satGradient = ctx.createLinearGradient(0, 0, width, 0);
    satGradient.addColorStop(0, `hsl(${hue}, 0%, 50%)`);
    satGradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);

    // Create lightness gradient (top to bottom)
    const lightGradient = ctx.createLinearGradient(0, 0, 0, height);
    lightGradient.addColorStop(0, 'rgba(255,255,255,1)');
    lightGradient.addColorStop(0.5, 'rgba(255,255,255,0)');
    lightGradient.addColorStop(0.5, 'rgba(0,0,0,0)');
    lightGradient.addColorStop(1, 'rgba(0,0,0,1)');

    ctx.fillStyle = satGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = lightGradient;
    ctx.fillRect(0, 0, width, height);
  }, [hue]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSat = x / canvas.width;
    const newLight = 1 - y / canvas.height;

    onChange(newSat, newLight);

    const handleMouseMove = (moveE: MouseEvent) => {
      const moveX = moveE.clientX - rect.left;
      const moveY = moveE.clientY - rect.top;
      const clampedSat = Math.max(0, Math.min(1, moveX / canvas.width));
      const clampedLight = Math.max(0, Math.min(1, 1 - moveY / canvas.height));
      onChange(clampedSat, clampedLight);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="relative w-full h-40">
      <canvas
        ref={canvasRef}
        width={256}
        height={160}
        className="w-full h-full rounded cursor-crosshair"
        onMouseDown={handleMouseDown}
      />
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${saturation * 100}%`,
          top: `${(1 - lightness) * 100}%`,
        }}
      />
    </div>
  );
};

export default SaturationPicker;