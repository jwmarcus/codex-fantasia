import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook
import { AppBar, Box, Button, CircularProgress, Container, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Route, Link as RouterLink, Routes } from 'react-router-dom';
import GameDetails from './pages/GameDetails'; // Import the GameDetails page
import Games from './pages/Games'; // Import the Games page
import Home from './pages/Home';
import Login from './pages/Login'; // Import the Login page
import Profile from './pages/Profile'; // Import the Profile page
import theme from './styles/theme';

// Simple Authentication Button component
const AuthenticationButton: React.FC = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return <CircularProgress size={24} color="inherit" />;
  }

  if (isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" sx={{ color: 'inherit', mr: 1 }}>
          {user?.email || 'Logged In'}
        </Typography>
        <Button
          color="inherit"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </Button>
      </Box>
    );
  }

  return (
    <Button color="inherit" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header / Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="none">
                Codex Fantasia
              </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button component={RouterLink} to="/games" color="inherit">Games</Button>
              {/* Add other nav links here */}
              {/* Profile link only if authenticated */}
              {useAuth0().isAuthenticated && (
                <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
              )}
              <AuthenticationButton />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/login" element={<Login />} /> {/* Consider removing/repurposing this route */}
            <Route path="/profile" element={<Profile />} />
            {/* Add other routes here */}
          </Routes>
        </Container>

        {/* Footer (Optional) */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, mt: 'auto' }}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                Codex Fantasia
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
