// import React from 'react'; // No longer needed with new JSX transform
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout'; // Import MainLayout
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
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/games" element={<MainLayout><Games /></MainLayout>} />
        <Route path="/games/:gameId" element={<MainLayout><GameDetails /></MainLayout>} /> {/* Add route for game details */}
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} /> {/* Add route for profile */}
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} /> {/* Add route for login */}
        {/* Define other routes here */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
