import { Container, Typography } from '@mui/material';
import React from 'react';

const Profile: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                User Profile
            </Typography>
            <Typography variant="body1">
                This is the placeholder page for the user profile.
                Game tracking, preferences, and other settings will appear here.
            </Typography>
            {/* Add profile content here later */}
        </Container>
    );
};

export default Profile; 