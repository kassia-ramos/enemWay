import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Navegação</h3>
          <Link to="/">Início</Link>
          <Link to="/informacoes">Programas</Link>
          <Link to="/calendario">Calendário</Link>
          <Link to="/simulador">Simulador</Link>
        </div>

        <div className="footer-section">
          <h3>Recursos</h3>
          <Link to="/enem">ENEM</Link>
          <Link to="/sisu">SISU</Link>
          <Link to="/prouni">PROUNI</Link>
          <Link to="/fies">FIES</Link>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <Link to="/contato">Fale Conosco</Link>
          <Link to="/faq">Perguntas Frequentes</Link>
          <Link to="/suporte">Suporte</Link>
        </div>
      </div>
      <div className="copyright container">
        <p>&copy; 2025 EnemWay. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

