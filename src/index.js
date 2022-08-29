// Imports
import App from './App';
import {createRoot} from 'react-dom/client';
import{ BrowserRouter as Router } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);
//Renders the App
root.render(<Router><App /></Router>);