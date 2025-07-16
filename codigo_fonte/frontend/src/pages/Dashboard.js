import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavUser from '../components/NavUser'; 
import InformacoesSeletivos from '../components/InformacoesSeletivos'; 
import api from '../services/api';
import '../styles/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await api.get('/usuarios/me/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUser();
  }, []);

  const nome = userData.first_name
    ? `${userData.first_name} ${userData.last_name}`.trim()
    : userData.username || 'Usuário';

  return (
    <>
      <NavUser />

      <div className="dashboard-container">
        <div className="dashboard-welcome">
          Olá, {nome}! Seja bem-vindo(a) ao EnemWay.
        </div>

        <div className="dashboard-content-row">
          <div className="dashboard-box half-width">
            <h2>Informações dos Processos Seletivos</h2>
            <div className="dashboard-cards compact">
              <InformacoesSeletivos />
            </div>
          </div>

          <div className="simulador-box half-width">
            <h2>Simular Notas do ENEM</h2>
            <div className="dashboard-card">
              <div className="dashboard-icon">📝</div>
              <h3>Simulador ENEM</h3>
              <p>Teste suas chances de aprovação com base nas suas notas.</p>
              <button className="btn-dashboard" onClick={() => navigate('/simulacoes')}>
                Abrir Simulador
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

