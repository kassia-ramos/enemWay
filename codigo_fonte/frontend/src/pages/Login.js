import React from 'react';
import NavbarAut from '../components/NavbarAut';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // lógica de autenticação aqui
  };

  return (
    <>
    <NavbarAut />
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
    </>
  );
}

export default Login;
