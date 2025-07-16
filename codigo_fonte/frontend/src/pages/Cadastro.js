import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import NavbarAut from '../components/NavbarAut';

function Cadastro() {
  const handleCadastro = (e) => {
    e.preventDefault();
    // lógica de envio do cadastro
  };

  return (
    <>
      <NavbarAut />
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Typography variant="h5" component="h1" gutterBottom>
            Cadastre-se
          </Typography>
          <form onSubmit={handleCadastro} style={{ width: '100%' }}>
            <TextField
              label="Nome"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Confirmar Senha"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Criar Conta
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Cadastro;

