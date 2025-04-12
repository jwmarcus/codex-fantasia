// import React from 'react'; // No longer needed with new JSX transform
import { AppBar, Button, Container, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Route, Link as RouterLink, Routes } from 'react-router-dom';
import GameDetails from './pages/GameDetails'; // Import the GameDetails page
import Games from './pages/Games'; // Import the Games page
import Home from './pages/Home';
import Login from './pages/Login'; // Import the Login page
import Profile from './pages/Profile'; // Import the Profile page
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Codex Fantasia
            </RouterLink>
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/games">Games</Button>
          <Button color="inherit" component={RouterLink} to="/profile">Profile</Button>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
          {/* Add more navigation buttons here */}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ marginTop: 2, marginBottom: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<GameDetails />} /> {/* Add route for game details */}
          <Route path="/profile" element={<Profile />} /> {/* Add route for profile */}
          <Route path="/login" element={<Login />} /> {/* Add route for login */}
          {/* Define other routes here */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
