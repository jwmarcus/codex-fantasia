import { Button, Container, Typography } from '@mui/material';
import React from 'react';
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

            {isAuthenticated ? (
                <Button variant="contained" color="secondary" onClick={logout}>
                    Log Out (Placeholder)
                </Button>
            ) : (
                <Button variant="contained" color="primary" onClick={login}>
                    Log In (Placeholder)
                </Button>
            )}

            {/* Add login form elements here later */}
        </Container>
    );
};

export default Login; 