import NavbarAut from '../components/NavbarAut';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import api from '../services/api'; // Certifique-se de que este axios está configurado com baseURL

function Simulacoes() {
  const [notas, setNotas] = useState({
    linguagens: '',
    matematica: '',
    humanas: '',
    natureza: '',
    redacao: '',
  });

  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [estado, setEstado] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setNotas({ ...notas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('accessToken');

      await api.post('/simulacoes/', {
        nota_linguagensCodigoseTecnologias: parseFloat(notas.linguagens),
        nota_matematicaeTecnologias: parseFloat(notas.matematica),
        nota_cienciasHumanaseTecnologias: parseFloat(notas.humanas),
        nota_cienciasNaturezaeTecnologias: parseFloat(notas.natureza),
        nota_redacao: parseFloat(notas.redacao),
        curso_desejado: curso,
        instituicao_desejada: instituicao,
        estado: estado
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const todasAcima600 = Object.values(notas).every(nota => parseFloat(nota) >= 600);
      if (todasAcima600) {
        setResultado("Parabéns! Suas chances de aprovação são altas.");
      } else {
        setResultado("Continue estudando! Algumas notas podem ser melhoradas.");
      }

    } catch (error) {
      setResultado("Erro ao enviar a simulação. Verifique os dados ou login.");
      console.error(error);
    }
  };

  const campos = [
    { name: 'linguagens', label: 'Linguagens, Códigos e suas Tecnologias' },
    { name: 'matematica', label: 'Matemática e suas Tecnologias' },
    { name: 'humanas', label: 'Ciências Humanas e suas Tecnologias' },
    { name: 'natureza', label: 'Ciências da Natureza e suas Tecnologias' },
    { name: 'redacao', label: 'Redação' },
  ];

  return (
    <>
      <NavbarAut />
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4, bgcolor: 'white', color: 'black' }}>
          <Typography variant="h4" gutterBottom >
            Simulador de Notas do ENEM
          </Typography>

          <form onSubmit={handleSubmit}>
            {campos.map((campo) => (
              <TextField
                key={campo.name}
                label={`Nota de ${campo.label}`}
                name={campo.name}
                value={notas[campo.name]}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ min: 0, max: 1000 }}
                required
              />
            ))}

            <TextField
              label="Curso Desejado"
              fullWidth
              margin="normal"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              required
            />

            <TextField
              label="Instituição Desejada"
              fullWidth
              margin="normal"
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              required
            />

            <TextField
              label="Estado"
              fullWidth
              margin="normal"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Simular
            </Button>
          </form>

          {resultado && (
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">{resultado}</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Simulacoes;

