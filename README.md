# Pondok Pesantren Al-Anwar Website

This repository contains the static website for **Pondok Pesantren Al-Anwar Pakijangan**. The pages are built with HTML and enhanced with Tailwind CSS and Flowbite components.

## Setup

1. Install the JavaScript dependencies:
   ```bash
   npm install
   ```

2. Build the Tailwind CSS file from `input.css`:
   ```bash
   npx tailwindcss -i input.css -o output.css --watch
   ```
   The project also includes the `@tailwindcss/browser` script for quick browser-based usage.

3. Serve the HTML files locally with a simple static server (for example using [`serve`](https://www.npmjs.com/package/serve)):
   ```bash
   npx serve .
   ```

Open the shown local URL in your browser to view the site.
