import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navUser.css';

function NavUser() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const userMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.clear();
    handleMenuClose();
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate(-1); // volta para página anterior
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo à esquerda */}
        <Typography
          variant="h6"
          onClick={handleLogoClick}
          sx={{ cursor: 'pointer', flexGrow: 0 }}
        >
          EnemWay
        </Typography>

        {/* Link central - Minhas Simulações */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to="/minhas-simulacoes" color="inherit">
            Minhas Simulações
          </Button>
        </Box>

        {/* Ícone perfil à direita */}
        <Box>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={userMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>
              Sair
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavUser;
