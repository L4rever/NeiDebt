import React from 'react';
import { createRoot } from 'react-dom/client';
document.body.innerHTML = '<div id="root"></div>';
var container = document.getElementById('root');
var root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement("h1", null, "Hello world"));
