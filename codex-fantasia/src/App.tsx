// import React from 'react'; // No longer needed with new JSX transform
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import theme from './styles/theme';
import Home from './pages/Home';
import Games from './pages/Games'; // Import the Games page
import GameDetails from './pages/GameDetails'; // Import the GameDetails page

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Codex Fantasia
              </RouterLink>
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/games">Games</Button>
            {/* Add more navigation buttons here */}
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ marginTop: 2, marginBottom: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId" element={<GameDetails />} /> {/* Add route for game details */}
            {/* Define other routes here */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
