import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/outfit"
import "@fontsource/roboto"
import favicon from '../src/assets/favicon.ico';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon; 
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
