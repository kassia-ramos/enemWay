// src/pages/Contato.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import NavbarAut from '../components/NavbarAut';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui futuramente entra a integração com o backend
    console.log('Mensagem enviada:', formData);
    setEnviado(true);
  };

  return (
    <>
      <NavbarAut />
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>Fale Conosco</Typography>
          
          {enviado ? (
            <Typography variant="body1" color="success.main">
              Obrigado pela sua mensagem! Entraremos em contato em breve.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 2 }}>
                Enviar Mensagem
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Contato;
