// src/models/Game.ts

// Define the structure for a Platform
export interface Platform {
  id: string | number; // Allow string or number ID
  name: string;
  // Add other platform details if needed (e.g., abbreviation, icon name)
}

// Define the main Game data structure
export interface Game {
  id: string | number; // Unique identifier for the game
  title: string;
  thumbnailUrl?: string; // Optional thumbnail image URL
  platforms?: Platform[]; // Array of platforms the game is available on
  estimatedPlaytime?: string; // e.g., "10-15 hours"
  beginnerFriendliness?: number; // e.g., rating from 1 to 5
  // Add other relevant fields from the PRD/Checklist later:
  // releaseDate?: Date;
  // developer?: string;
  // synopsis?: string;
  // etc.
} 