import NavbarAut from '../components/NavbarAut';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';

function Simulacoes() {
  const [notas, setNotas] = useState({
    linguagens: '',
    matematica: '',
    humanas: '',
    natureza: '',
    redacao: '',
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setNotas({ ...notas, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação fictícia: se todas as notas forem >= 600, resultado positivo
    const todasAcima600 = Object.values(notas).every(nota => parseFloat(nota) >= 600);

    if (todasAcima600) {
      setResultado("Parabéns! Suas chances de aprovação são altas.");
    } else {
      setResultado("Continue estudando! Algumas notas podem ser melhoradas.");
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
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
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

