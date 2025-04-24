import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from '../hooks/useApi'; // Import the useApi hook
import { Game } from '../models/Game';
// import gamesData from '../data/games.json'; // Remove static data import
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';

const Games: React.FC = () => {
  // Use the useApi hook for fetching games
  const { data: games, error, loading, callApi } = useApi<Game[]>();

  // Filter State
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedCombatStyle, setSelectedCombatStyle] = useState<string>('');

  // Fetch games when component mounts
  const fetchGamesCallback = useCallback(() => {
    callApi('/api/games');
  }, [callApi]);

  useEffect(() => {
    fetchGamesCallback();
  }, [fetchGamesCallback]);

  // Game list derived from hook state (provide default empty array)
  const gameList = useMemo(() => games || [], [games]);

  // Compute unique filter options from fetched data
  const uniquePlatforms = useMemo(() =>
    [...new Set(gameList.map(game => game.developer || 'Unknown'))].sort()
    , [gameList]);
  const uniqueCombatStyles = useMemo(() =>
    [...new Set(gameList.map(game => game.genre || 'Unknown'))].sort()
    , [gameList]);

  // Filtered games based on selections and fetched data
  const filteredGames = useMemo(() => {
    return gameList.filter(game => {
      const platformMatch = selectedPlatform ? (game.developer === selectedPlatform) : true;
      const combatStyleMatch = selectedCombatStyle ? (game.genre === selectedCombatStyle) : true;
      return platformMatch && combatStyleMatch;
    });
  }, [gameList, selectedPlatform, selectedCombatStyle]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ marginTop: 2 }}>
        Game Library
      </Typography>

      {/* Filter Controls */}
      <Paper elevation={1} sx={{ padding: 2, marginBottom: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: 'center'
          }}
        >
          {/* Platform Filter (Now using Developer as placeholder) */}
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, flexGrow: { sm: 1 } }}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="platform-filter-label">Developer</InputLabel> {/* Changed Label */}
              <Select
                labelId="platform-filter-label"
                id="platform-filter"
                value={selectedPlatform}
                label="Developer" // Changed Label
                onChange={(e) => setSelectedPlatform(e.target.value as string)}
              >
                <MenuItem value=""><em>All Developers</em></MenuItem> {/* Changed Text */}
                {uniquePlatforms.map(platform => (
                  <MenuItem key={platform} value={platform}>{platform}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Combat Style Filter (Now using Genre as placeholder) */}
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, flexGrow: { sm: 1 } }}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="combat-style-filter-label">Genre</InputLabel> {/* Changed Label */}
              <Select
                labelId="combat-style-filter-label"
                id="combat-style-filter"
                value={selectedCombatStyle}
                label="Genre" // Changed Label
                onChange={(e) => setSelectedCombatStyle(e.target.value as string)}
              >
                <MenuItem value=""><em>All Genres</em></MenuItem> {/* Changed Text */}
                {uniqueCombatStyles.map(style => (
                  <MenuItem key={style} value={style}>{style}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Paper>

      {/* Loading / Error State */}
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Game List */}
      {!loading && !error && (
        <Paper elevation={2}>
          <List>
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <ListItem key={game.id} disablePadding divider>
                  <ListItemButton component={RouterLink} to={`/games/${game.id}`}>
                    <ListItemText
                      primary={game.title}
                      secondary={`Developer: ${game.developer || 'N/A'} | Genre: ${game.genre || 'N/A'} | Released: ${game.releaseDate ? new Date(game.releaseDate).getFullYear() : 'N/A'}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItem>
                {/* Show different message if games loaded but filters match none */}
                <ListItemText primary={gameList.length > 0 ? "No games match the current filters." : "No games found."} />
              </ListItem>
            )}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default Games; 