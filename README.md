# BMI Calculator Extension (Manifest V3)

A clean, modern, and lightweight Chrome/Edge browser extension to calculate Body Mass Index (BMI) quickly. It supports both Metric and Imperial units and features an animated visual gauge showing classification ranges.

## Features

- **Dual Unit Support**: Easy switching between Metric (kg, cm) and Imperial (lbs, in) units.
- **Visual Gauge**: An animated category slider indicating whether the user is:
  - 🔵 **Underweight** (< 18.5)
  - 🟢 **Normal Weight** (18.5 – 24.9)
  - 🟠 **Overweight** (25.0 – 29.9)
  - 🔴 **Obese** (≥ 30.0)
- **Responsive & Modern Design**: Built with clean gradients, custom inputs, and a glassmorphic unit toggle.
- **Manifest V3 Compliant**: Built using the latest browser extension standards.

## Installation

To load this extension locally in your browser:

1. **Download/Clone** this repository to your local machine.
2. Open your browser and navigate to the extensions page:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
3. Toggle on **Developer mode** (usually in the top-right or sidebar).
4. Click on **Load unpacked** in the top-left.
5. Select the folder containing this project (the directory containing `manifest.json`).

## Project Structure

- `manifest.json` — Extension configuration settings.
- `index.html` — Extension popup interface.
- `popup.js` — Calculations, unit toggles, and gauge animations.
- `popup.css` — Modern custom styling and animations.

## Technologies Used

- HTML5
- CSS3 (Variables, Linear Gradients, Transitions)
- JavaScript (Vanilla ES6)
