import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer'; // Import Auth0 middleware
import gameRoutes from './routes/game.routes'; // Import game routes

dotenv.config(); // Load environment variables from .env file

// Auth0 Configuration
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE as string,
    issuerBaseURL: process.env.AUTH0_DOMAIN as string,
});

const app = express();
const port = process.env.PORT || 3001; // Use port from env or default to 3001

app.use(express.json()); // Middleware to parse JSON bodies

// Apply JWT check to all /api routes
app.use('/api', checkJwt);

// Use game routes (now protected)
app.use('/api/games', gameRoutes);

// Simple route for testing server root
app.get('/', (req: Request, res: Response) => {
    res.send('Codex Fantasia Server is running!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 