import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import NavBar from '../navigation/NavBar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <Container component="main" sx={{ marginTop: 2, marginBottom: 2, flexGrow: 1 }}>
                {children} {/* Render page-specific content here */}
            </Container>
            {/* Optional: Add a Footer component here later */}
            {/* <Footer /> */}
        </Box>
    );
};

export default MainLayout; 