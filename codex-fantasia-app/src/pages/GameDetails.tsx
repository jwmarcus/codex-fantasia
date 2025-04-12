import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Game } from '../models/Game';

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
                target.alt = `Placeholder for ${game.title}`;
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
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph><strong>Platform:</strong> {
              game.platforms && game.platforms.length > 0
                ? game.platforms.map(p => p.name).join(', ')
                : 'N/A'
            }</Typography>
            <Typography variant="body1" paragraph><strong>Genre:</strong> {game.genre || 'N/A'}</Typography>
            <Typography variant="body1" paragraph><strong>Combat Style:</strong> {game.combatStyle || 'N/A'}</Typography>

            {game.tags && game.tags.length > 0 && (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Tags:</strong>
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {game.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Box>
            )}

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