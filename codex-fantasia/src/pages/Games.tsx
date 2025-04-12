import React, { useState, useEffect, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import { Game } from '../models/Game'; // Removed as it's not explicitly used here
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
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Games: React.FC = () => {
  // Filter State
  const [selectedPlatform, setSelectedPlatform] = useState<string>(''); // Empty string means 'All'
  const [selectedCombatStyle, setSelectedCombatStyle] = useState<string>(''); // Empty string means 'All'

  // Data Loading State (no longer need state for the game data itself)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading completion (or fetch if it were async)
    // We don't need to set game data here anymore as we use gamesData directly
    try {
      // If this were an API call, you'd fetch here and handle loading/error
      // Since it's static, just mark loading as done
      setLoading(false);
    } catch (err) {
      console.error("Error during initial data load simulation:", err);
      setError('Failed to initialize game list.');
      setLoading(false);
    }
  }, []);

  // Compute unique filter options using useMemo for efficiency
  const uniquePlatforms = useMemo(() => 
    [...new Set(gamesData.map(game => game.platform))].sort()
  , []);
  const uniqueCombatStyles = useMemo(() => 
    [...new Set(gamesData.map(game => game.combatStyle))].sort()
  , []);

  // Filtered games based on selections
  const filteredGames = useMemo(() => {
    // Use the imported gamesData directly for filtering
    return gamesData.filter(game => {
      const platformMatch = selectedPlatform ? game.platform === selectedPlatform : true;
      const combatStyleMatch = selectedCombatStyle ? game.combatStyle === selectedCombatStyle : true;
      return platformMatch && combatStyleMatch;
    });
  }, [selectedPlatform, selectedCombatStyle]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ marginTop: 2 }}>
        Game Library
      </Typography>

      {/* Filter Controls - Using Box with Flexbox */}
      <Paper elevation={1} sx={{ padding: 2, marginBottom: 3 }}>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger
            gap: 2, // Spacing between filter items
            alignItems: 'center' // Align items vertically
          }}
        >
          {/* Platform Filter */}
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, flexGrow: { sm: 1 } }}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="platform-filter-label">Platform</InputLabel>
              <Select
                labelId="platform-filter-label"
                id="platform-filter"
                value={selectedPlatform}
                label="Platform"
                onChange={(e) => setSelectedPlatform(e.target.value as string)}
              >
                <MenuItem value=""><em>All Platforms</em></MenuItem>
                {uniquePlatforms.map(platform => (
                  <MenuItem key={platform} value={platform}>{platform}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Combat Style Filter */}
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, flexGrow: { sm: 1 } }}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="combat-style-filter-label">Combat Style</InputLabel>
              <Select
                labelId="combat-style-filter-label"
                id="combat-style-filter"
                value={selectedCombatStyle}
                label="Combat Style"
                onChange={(e) => setSelectedCombatStyle(e.target.value as string)}
              >
                <MenuItem value=""><em>All Combat Styles</em></MenuItem>
                {uniqueCombatStyles.map(style => (
                  <MenuItem key={style} value={style}>{style}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* Add more filter controls here following the Box pattern */}
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
                      secondary={`Developer: ${game.developer} | Platform: ${game.platform} | Year: ${game.releaseYear}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No games match the current filters." />
              </ListItem>
            )}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default Games; 