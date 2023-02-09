import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js'

// ee9dcaa1
const container = document.getElementById('container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);