import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Game } from '../models/Game';
import gamesData from '../data/games.json';
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  Box,
  Button,
} from '@mui/material';

const GameDetails: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const currentGameId = parseInt(gameId || '');
      if (isNaN(currentGameId)) {
        throw new Error("Invalid game ID provided in URL.");
      }
      const foundGame = gamesData.find(g => g.id === currentGameId);
      if (foundGame) {
        setGame(foundGame);
      } else {
        setError(`Game with ID ${currentGameId} not found.`);
      }
    } catch (err: unknown) {
      console.error("Error loading game details:", err);
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(`Failed to load game details: ${message}`);
    } finally {
      setLoading(false);
    }
  }, [gameId]);

  if (loading) {
    return <Container sx={{ textAlign: 'center', marginTop: 4 }}><CircularProgress /></Container>;
  }

  if (error) {
    return <Container sx={{ marginTop: 4 }}><Alert severity="error">{error}</Alert></Container>;
  }

  if (!game) {
    return <Container sx={{ marginTop: 4 }}><Alert severity="warning">No game data available.</Alert></Container>;
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Image Column */}
          <Box sx={{ flex: { md: '0 0 33.3333%' }, maxWidth: { md: '33.3333%' }, width: '100%' }}>
            <Box
              component="img"
              sx={{
                width: '100%',
                maxHeight: 400,
                objectFit: 'contain',
                border: '1px solid',
                borderColor: 'divider',
                display: 'block'
              }}
              alt={`Cover art for ${game.title}`}
              src={game.imageUrl}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder.png';
                target.alt = 'Placeholder image';
              }}
            />
          </Box>

          {/* Details Column */}
          <Box sx={{ flex: { md: 1 } }}> {/* Takes remaining space */}
            <Typography variant="h3" component="h1" gutterBottom>
              {game.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {game.developer} ({game.releaseYear})
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
              {game.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Platform:</strong> {game.platform}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Genre:</strong> {game.genre}
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              <Button variant="outlined" component={RouterLink} to="/games">
                Back to Game Library
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default GameDetails; 