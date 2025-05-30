import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, CircularProgress, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import GameDetails from './pages/GameDetails';
import Games from './pages/Games';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
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
  const location = useLocation();
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/games" element={
            <MainLayout>
              <Games />
            </MainLayout>
          } />
          <Route path="/games/:gameId" element={
            <MainLayout>
              <GameDetails />
            </MainLayout>
          } />
          <Route path="/profile" element={
            <MainLayout>
              <Profile />
            </MainLayout>
          } />
          <Route path="/login" element={
            <MainLayout>
              <Login />
            </MainLayout>
          } />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
