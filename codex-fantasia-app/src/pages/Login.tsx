import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import PixelButton from '../components/buttons/PixelButton'; // Import PixelButton
import { useAuth } from '../context/AuthContext'; // Import useAuth to interact with context

const Login: React.FC = () => {
    const { login, logout, isAuthenticated } = useAuth(); // Use the hook

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Login / Authentication
            </Typography>
            <Typography variant="body1" paragraph>
                Authentication logic will be handled here (e.g., using Auth0).
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}> {/* Wrap buttons for layout */}
                {isAuthenticated ? (
                    <Button variant="contained" color="secondary" onClick={logout}>
                        Log Out (Standard)
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={login}>
                        Log In (Standard)
                    </Button>
                )}

                {/* Add PixelButton for comparison */}
                <PixelButton color={isAuthenticated ? 'secondary' : 'primary'} onClick={isAuthenticated ? logout : login}>
                    {isAuthenticated ? 'Log Out (Pixel)' : 'Log In (Pixel)'}
                </PixelButton>
            </Box>

            {/* Add login form elements here later */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Test Input:</Typography>
            <TextField
                label="Example Field"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Another Field"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Standard Field"
                variant="standard"
                fullWidth
                sx={{ mb: 2 }}
            />
        </Container>
    );
};

export default Login; 