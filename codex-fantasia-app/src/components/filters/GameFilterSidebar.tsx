import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
// Import specific filter components here later (e.g., PlatformFilter, PlaytimeFilter)

// Define the structure for the filter state
interface FilterState {
    platforms: string[];
    playtime: string | null;
    friendliness: number | null;
    // Add other filter criteria here
}

interface GameFilterSidebarProps {
    // Callback function to apply filters
    onApplyFilters: (filters: FilterState) => void;
    // Initial filter state if needed
    initialFilters?: Partial<FilterState>;
}

const GameFilterSidebar: React.FC<GameFilterSidebarProps> = ({
    onApplyFilters,
    initialFilters = {}
}) => {
    // Manage the filter state internally
    const [filters, setFilters] = useState<FilterState>({
        platforms: initialFilters.platforms || [],
        playtime: initialFilters.playtime || null,
        friendliness: initialFilters.friendliness || null,
        // Initialize other filters
    });

    const handleApply = () => {
        onApplyFilters(filters);
    };

    // Placeholder for reset logic
    const handleReset = () => {
        const resetState: FilterState = {
            platforms: [],
            playtime: null,
            friendliness: null,
        };
        setFilters(resetState);
        onApplyFilters(resetState); // Apply the reset filters immediately
    };

    return (
        <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Silkscreen' }}>
                Filters
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Placeholder sections for different filter types */}
            <Box mb={3}>
                <Typography variant="subtitle1" gutterBottom>Platform</Typography>
                {/* Platform filter component will go here */}
                <Typography variant="caption">(Platform filter controls TBD)</Typography>
            </Box>

            <Box mb={3}>
                <Typography variant="subtitle1" gutterBottom>Playtime</Typography>
                {/* Playtime filter component will go here */}
                <Typography variant="caption"> (Playtime filter controls TBD)</Typography>
            </Box>

            <Box mb={3}>
                <Typography variant="subtitle1" gutterBottom>Beginner Friendliness</Typography>
                {/* Friendliness filter component will go here */}
                <Typography variant="caption">(Friendliness filter controls TBD)</Typography>
            </Box>

            {/* Add more filter sections as needed (Release Era, Battle System) */}

            <Divider sx={{ my: 2 }} />

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handleReset}>Reset</Button>
                <Button variant="contained" onClick={handleApply}>Apply</Button>
            </Box>

        </Paper>
    );
};

export default GameFilterSidebar; 