// Imports
import App from './App';
import {createRoot} from 'react-dom/client';
import{ BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
//Renders the App
root.render(<Router><App /></Router>);