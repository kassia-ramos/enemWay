import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Simulacoes from './pages/Simulacoes';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Enem from './pages/Enem';
import SISU from './pages/SISU';
import Prouni from './pages/Prouni';
import Fies from './pages/Fies';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
    <div className= "App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulacoes" element={<Simulacoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/enem" element={<Enem />} />
          <Route path="/sisu" element={<SISU />} />
          <Route path="/prouni" element={<Prouni />} />
          <Route path="/fies" element={<Fies />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>   
  );
}

export default App;

