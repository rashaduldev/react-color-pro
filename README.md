# react-color-pro

A lightweight, framework-agnostic color picker component for React applications. Built with TypeScript and styled with Tailwind CSS, `react-color-pro` offers a flexible API, supports modern frameworks like React and Preact, and has a tiny bundle size (~4.37 kB gzipped) with zero runtime dependencies. It includes a full-featured color picker and modular sub-components for custom use cases.

## Package Details

[![NPM Version](https://img.shields.io/npm/v/react-color-pro)](https://www.npmjs.com/package/react-color-pro)
[![License](https://img.shields.io/npm/l/react-color-pro)](https://github.com/rashaduldev/react-color-pro/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/react-color-pro)](https://www.npmjs.com/package/react-color-pro)
[![GitHub Repo](https://img.shields.io/badge/github-code-blue?logo=github)](https://github.com/rashaduldev/react-color-pro)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://rcp-home.vercel.app)
[![NPM](https://img.shields.io/badge/NPM-Live-red?logo=npm)](https://www.npmjs.com/package/react-color-pro)



## Features

- **Ultra lightweight**: ~4.37 kB gzipped, no runtime dependencies except React.
- **Framework-agnostic**: Works with React, Preact, Next.js, Remix, and more.
- **TypeScript support**: Full type definitions included.
- **Customizable**: Tailwind CSS styles, compatible with Bootstrap or custom CSS.
- **Modular**: Includes `HueSlider`, `SaturationPicker`, and `HexInput` components.
- **Accessible**: Keyboard navigation and mobile-friendly.
- **Utility functions**: `rgbToHex`, `hexToRgb`, `hslToRgb` for color manipulation.

## Comparison with Other Packages

`react-color-pro` is designed to be lightweight and dependency-free. Here’s how it compares to other color picker libraries:

| Package Name         | Bundle Size | Gzipped Size | Dependencies |
|----------------------|-------------|--------------|--------------|
| react-color-pro      | 10.39 kB    | 4.37 kB      | 0            |
| react-color          | 143.7 kB    | 36.4 kB      | 7            |
| react-input-color    | 54.1 kB     | 18.7 kB      | 6            |
| rc-color-picker      | 114.5 kB    | 32.8 kB      | 5            |

### Why choose react-color-pro?

- Smallest bundle size for faster load times.
- Zero dependencies (except React) to reduce bloat.
- Modern, modular design with TypeScript support.

## 🚀 Usage Examples

---

### ⚛️ React (Basic Usage)

```tsx
import React, { useState } from "react";
import { ColorPicker } from "react-color-pro";

const App = () => {
  const [color, setColor] = useState("#14AE88");

  return (
    <div className="p-6">
      <h2>🎨 Pick a Color</h2>
      <ColorPicker value={color} onChange={setColor} />
      <p className="mt-4">Selected Color: <span style={{ color }}>{color}</span></p>
    </div>
  );
};

export default App;
```
### 🔮 Preact

```tsx
/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { ColorPicker } from "react-color-pro";

export default function PreactApp() {
  const [color, setColor] = useState("#14AE88");

  return (
    <div>
      <ColorPicker value={color} onChange={setColor} />
      <p>Color: {color}</p>
    </div>
  );
}

```
### 🧱 Laravel (Blade + CDN)

```tsx
<!-- resources/views/color-picker.blade.php -->
<div id="color-picker-root"></div>

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-color-pro/dist/react-color-pro.umd.js"></script>

<script>
  const { ColorPicker } = window.ReactColorPro;
  const e = React.createElement;

  ReactDOM.render(
    e(ColorPicker, { value: "#14AE88", onChange: (val) => console.log(val) }),
    document.getElementById("color-picker-root")
  );
</script>

```
### ⚙️ Plain HTML + JS (No Framework)

```tsx
<div id="picker-container"></div>

<!-- Load via CDN -->
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-color-pro/dist/react-color-pro.umd.js"></script>

<script>
  const { ColorPicker } = ReactColorPro;

  ReactDOM.render(
    React.createElement(ColorPicker, {
      value: "#14AE88",
      onChange: (value) => console.log("Color:", value),
    }),
    document.getElementById("picker-container")
  );
</script>

```
### 🌈 Tailwind CSS Integration

```tsx
<ColorPicker
  value={color}
  onChange={setColor}
  className="border p-4 rounded-lg shadow-lg"
/>

```
### 🎨 Bootstrap Usage

```tsx
<div className="card p-3">
  <h5 className="mb-3">Pick a Color</h5>
  <ColorPicker value={color} onChange={setColor} />
</div>

```
## Installation
## 📦 CDN vs NPM

| Method | Recommended For | Example |
|--------|------------------|---------|
| **NPM** | React / Preact / Next.js apps | `npm install react-color-pro` |
| **CDN** | Laravel / WordPress / Raw HTML | `https://cdn.jsdelivr.net/npm/react-color-pro/dist/react-color-pro.umd.js` |