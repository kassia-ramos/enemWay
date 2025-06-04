import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero" id= "inicio">
        <div className="container">
          <h1>Planeje seu futuro acadêmico</h1>
          <p>O EnemWay te ajuda a entender suas chances de aprovação em universidades com base nas suas notas do ENEM.</p>
          <p>Faça seu Cadastro e teste nosso simulador!</p>
          <Link to="/Simulacoes" className="btn btn-primary">Simular Agora</Link>
        </div>
      </div>
      
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Como podemos te ajudar?</h2>
        
        {/* Programs Section */}
        <div className="programs" id="programas">
          <div className="program-card">
            <div className="program-icon">📊</div>
            <h3>ENEM</h3>
            <p>Entenda como funciona o Exame Nacional do Ensino Médio e como suas notas são calculadas.</p>
            <Link to="/enem" className="btn btn-primary">Saiba mais</Link>
          </div>
          
          <div className="program-card">
            <div className="program-icon">🎓</div>
            <h3>SISU</h3>
            <p>Conheça o Sistema de Seleção Unificada e como se candidatar às vagas nas universidades públicas.</p>
            <Link to="/sisu" className="btn btn-primary">Saiba mais</Link>
          </div>
          
          <div className="program-card">
            <div className="program-icon">🏫</div>
            <h3>PROUNI</h3>
            <p>Descubra como conseguir bolsas de estudo em instituições privadas com o Programa Universidade para Todos.</p>
            <Link to="/prouni" className="btn btn-primary">Saiba mais</Link>
          </div>
          
          <div className="program-card">
            <div className="program-icon">💰</div>
            <h3>FIES</h3>
            <p>Entenda como funciona o Financiamento Estudantil e como ele pode ajudar no seu ingresso no ensino superior.</p>
            <Link to="/fies" className="btn btn-primary">Saiba mais</Link>
          </div>
        </div>
        
        {/* Calendario*/}
        <div className="card" id="calendario">
          <h2 className="card-title">Calendário de Eventos</h2>
          <div className="card-content">
            <div className="calendar-header">
              <div>Dom</div>
              <div>Seg</div>
              <div>Ter</div>
              <div>Qua</div>
              <div>Qui</div>
              <div>Sex</div>
              <div>Sáb</div>
            </div>
            <div className="calendar">
              {[...Array(31)].map((_, i) => (
                <div 
                  key={i} 
                  className={`calendar-day ${[11, 12, 13, 14].includes(i + 1) ? 'event' : ''}`}
                  title={[11, 12, 13, 14].includes(i + 1) ? 'Inscrições ENEM' : ''}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3>Próximos eventos:</h3>
            <ul style={{ listStyleType: 'none', marginTop: '10px' }}>
              <li style={{ marginBottom: '8px' }}>
                <span style={{ color: '#3498db', fontWeight: 'bold' }}>11/05 - 14/05:</span> Período de inscrições para o ENEM 2025
              </li>
              <li style={{ marginBottom: '8px' }}>
                <span style={{ color: '#3498db', fontWeight: 'bold' }}>20/05 - 30/05:</span> Prazo para pagamento da taxa de inscrição
              </li>
              <li style={{ marginBottom: '8px' }}>
                <span style={{ color: '#3498db', fontWeight: 'bold' }}>03/06 - 09/06:</span> Período para solicitação de atendimento especializado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;