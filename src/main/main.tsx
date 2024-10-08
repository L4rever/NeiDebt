import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

document.body.innerHTML = '<div id="root"></div>';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<h1>Hello world</h1>);
