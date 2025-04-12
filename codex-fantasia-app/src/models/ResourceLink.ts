// src/models/ResourceLink.ts

// Define the possible types for external resources
export type ResourceType = 'guide' | 'walkthrough' | 'fan site' | 'video' | 'community' | 'review' | 'other';

// Define the main ResourceLink data structure
export interface ResourceLink {
    id: string | number;
    title: string;
    url: string;
    description?: string;
    type: ResourceType;
    source?: string; // e.g., "IGN", "GameFAQs User XYZ", "RPGSite"
    // Add other fields later if needed for display/filtering:
    // gameId?: string | number; // Link to a specific game
    // communityRating?: number;
    // lastVerifiedDate?: Date;
} 