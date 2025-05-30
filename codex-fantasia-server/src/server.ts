import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer'; // Import Auth0 middleware
import gameRoutes from './routes/game.routes'; // Import game routes

dotenv.config(); // Load environment variables from .env file

// Validate required environment variables
const requiredEnvVars = [
  'AUTH0_ISSUER_BASE_URL',
  'AUTH0_AUDIENCE',
  'AUTH0_CLIENT_ID',
  'AUTH0_CLIENT_SECRET',
  'DATABASE_URL'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  console.error('Please check your .env file. You can use .env.example as a reference.');
  process.exit(1);
}

// Auth0 Configuration
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_ISSUER_BASE_URL}`,
  tokenSigningAlg: 'RS256'
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