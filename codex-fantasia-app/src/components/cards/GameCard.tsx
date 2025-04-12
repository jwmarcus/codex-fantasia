import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Placeholder for game data structure - replace with actual model later
import { Game } from '../models/Game'; // Assuming models/Game.ts exists or will exist

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    // Placeholder image if game.thumbnailUrl is missing
    const imageUrl = game.thumbnailUrl || 'https://via.placeholder.com/300x180?text=No+Image';

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Make the whole card clickable, linking to the game's detail page */}
            <CardActionArea
                component={RouterLink}
                to={`/games/${game.id}`} // Link to the game detail route
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }} // Ensure action area fills card
            >
                <CardMedia
                    component="img"
                    height="180" // Adjust height as needed
                    image={imageUrl}
                    alt={game.title}
                    sx={{ objectFit: 'cover' }} // Cover ensures the image fills the area
                />
                <CardContent sx={{ flexGrow: 1 }}> {/* Ensure content area grows */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Silkscreen' }}>
                        {game.title}
                    </Typography>

                    {/* Placeholder for Platform Icons - Implement later */}
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', my: 1 }}>
                        {game.platforms?.map((platform) => (
                            <Chip key={platform.id} label={platform.name} size="small" />
                        )) || <Typography variant="caption">No platforms listed</Typography>}
                    </Box>

                    {/* Example: Display Playtime or Beginner Friendliness */}
                    {game.estimatedPlaytime && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            Playtime: {game.estimatedPlaytime}
                        </Typography>
                    )}
                    {game.beginnerFriendliness !== undefined && (
                        <Typography variant="body2" color="text.secondary">
                            Beginner Friendly: {game.beginnerFriendliness}/5
                        </Typography>
                    )}

                </CardContent>
            </CardActionArea>
            {/* Optional: Add actions outside the main link area if needed */}
            {/* <CardActions> ... </CardActions> */}
        </Card>
    );
};

export default GameCard; 