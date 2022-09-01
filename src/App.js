// Imports
import React from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage'
import EdgeExtension from './pages/edgeextension'
import EncryptionAlgorithm from './pages/encryptionalgorithm'
import PongGame from './pages/ponggame'
import InvestmentData from "./pages/investmentdatacollector";
import Resume from "./pages/resume"
import NotFound from './pages/notfound'
import NavBar from './NavBar';
// Start App
// The Routes route to different parts of the website
function App() {
  return (
      <div className="App">
          <NavBar />
          <div id="page-body">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/edge-extension" element={<EdgeExtension />} />
              <Route path="/encryption-algorithm" element={<EncryptionAlgorithm />} />
              <Route path="/pong-game" element={<PongGame />} />
              <Route path="/investment-data-collector" element={< InvestmentData />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={< NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
