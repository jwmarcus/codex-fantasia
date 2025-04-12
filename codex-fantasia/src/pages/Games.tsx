import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Game } from '../models/Game';
import gamesData from '../data/games.json';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading data
    try {
      setGames(gamesData);
      setLoading(false);
    } catch (err) {
      console.error("Error loading game data:", err);
      setError('Failed to load game data.');
      setLoading(false);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ marginTop: 2 }}>
        Game Library
      </Typography>

      {loading && <CircularProgress />}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Paper elevation={2}>
          <List>
            {games.map((game) => (
              <ListItem key={game.id} disablePadding divider>
                <ListItemButton component={RouterLink} to={`/games/${game.id}`}>
                  <ListItemText
                    primary={game.title}
                    secondary={`Developer: ${game.developer} | Platform: ${game.platform} | Year: ${game.releaseYear}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default Games; 