import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const title = 'Base React app!';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App title={title} />);

if (module.hot) {
  module.hot.accept();
}