import { Box, Container, GridLegacy as Grid } from '@mui/material';
import React, { ReactNode } from 'react';
import NavBar from '../navigation/NavBar';

interface LayoutWithSidebarProps {
    sidebarContent: ReactNode; // Content for the sidebar
    children: ReactNode; // Main content
}

const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({ sidebarContent, children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <Container component="main" sx={{ marginTop: 2, marginBottom: 2, flexGrow: 1 }}>
                <Grid container spacing={3}> {/* Use Grid container */}
                    {/* Sidebar Grid Item */}
                    <Grid item xs={12} md={3}> {/* Add back 'item' prop for GridLegacy */}
                        {sidebarContent}
                    </Grid>

                    {/* Main Content Grid Item */}
                    <Grid item xs={12} md={9}> {/* Add back 'item' prop for GridLegacy */}
                        {children}
                    </Grid>
                </Grid>
            </Container>
            {/* Optional: Add a Footer component here later */}
        </Box>
    );
};

export default LayoutWithSidebar;
