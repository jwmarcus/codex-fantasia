// src/models/Game.ts

// Define the structure for a Platform
export interface Platform {
  id: string | number; // Allow string or number ID
  name: string;
  abbreviation?: string; // e.g., SNES, PSX
  // Add other platform details if needed (e.g., icon name)
}

// Define the main Game data structure
export interface Game {
  id: string | number; // Unique identifier for the game
  title: string;
  thumbnailUrl?: string; // Optional thumbnail image URL
  imageUrl?: string; // Optional larger image URL (used in GameDetails)
  platforms?: Platform[]; // Array of platforms the game is available on
  releaseYear?: number; // Added from GameDetails errors
  developer?: string; // Added from GameDetails errors
  description?: string; // Added from GameDetails errors
  genre?: string; // Added from GameDetails errors
  combatStyle?: string; // Added from GameDetails errors
  tags?: string[]; // Added from GameDetails errors
  estimatedPlaytime?: string; // e.g., "10-15 hours"
  beginnerFriendliness?: number; // e.g., rating from 1 to 5
  // Add other relevant fields from the PRD/Checklist later:
  // synopsis?: string;
  // etc.
} 