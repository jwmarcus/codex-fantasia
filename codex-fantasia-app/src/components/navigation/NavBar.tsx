import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Codex Fantasia
                    </RouterLink>
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">Home</Button>
                <Button color="inherit" component={RouterLink} to="/games">Games</Button>
                <Button color="inherit" component={RouterLink} to="/profile">Profile</Button>
                <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                {/* Add more navigation buttons here later as needed */}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar; 