import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Simulacoes from './pages/Simulacoes';
import Informacoes from './pages/Informacoes';
//import Login from './pages/Login';
//import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
    <div className= "App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulacoes" element={<Simulacoes />} />
          <Route path="/informacoes" element={<Informacoes />} /> 
          {/*<Route path="/login" element={<Login />} />*/}
          {/*<Route path="/cadastro" element={<Cadastro />} />*/}
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>   
  );
}

export default App;

