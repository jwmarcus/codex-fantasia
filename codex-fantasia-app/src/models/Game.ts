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
  id: string;
  title: string;
  alternativeTitles: string[];
  releaseDate?: string; // Represent as string for simplicity, can parse later
  developer?: string;
  publisher?: string;
  genre?: string;
  subgenre?: string;
  beginnerFriendliness?: number;
  modernPlayabilityScore?: number;
  estimatedCompletionTime?: string;
  synopsis?: string;
  isEntryPoint?: boolean;
  createdAt: string; // Represent as string
  updatedAt: string; // Represent as string

  // Add related models later as needed
  // playabilityInfo?: PlayabilityInfo[];
  // resourceLinks?: ResourceLink[];
} 