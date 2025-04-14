import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import gameRoutes from './routes/game.routes' // Import game routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001; // Use port from env or default to 3001

app.use(express.json()); // Middleware to parse JSON bodies

// Use game routes
app.use('/api/games', gameRoutes);

// Simple route for testing server root
app.get('/', (req: Request, res: Response) => {
    res.send('Codex Fantasia Server is running!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 