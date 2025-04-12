import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper
} from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Welcome to Codex Fantasia!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Your nostalgic guide to the golden age of JRPGs.
        </Typography>
        <Typography align="center" paragraph>
          Explore classic games, rediscover forgotten gems, and relive the adventures.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={RouterLink} 
            to="/games"
            size="large"
          >
            Browse Games
          </Button>
          {/* Add more links or content here later */}
        </Box>
      </Paper>
    </Container>
  );
};

export default Home; 