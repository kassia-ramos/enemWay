import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simulacoes from './pages/Simulacoes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/simulacoes" element={<Simulacoes />} />
      </Routes>
    </Router>
  );
}

export default App;

