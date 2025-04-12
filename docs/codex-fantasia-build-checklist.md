# Codex Fantasia: Build Process & MVP Feature Checklist

## Project Setup Checklist

### Environment Setup
- [ ] Initialize Git repository
- [ ] Set up project structure with Vite + React + TypeScript
- [ ] Configure ESLint and Prettier
- [ ] Set up basic CI/CD pipeline
- [ ] Create development, staging, and production environments

### Project Foundation
- [ ] Define folder structure for components, hooks, utils, etc.
- [ ] Set up routing with React Router
- [ ] Create global state management (Context API or Redux)
- [ ] Implement basic authentication system
- [ ] Create placeholder pages for main routes

### Design System Implementation
- [ ] Create color palette with nostalgic JRPG-inspired colors
- [ ] Set up typography with retro and modern font combinations
- [ ] Build reusable UI component library:
  - [ ] Buttons (standard, primary, pixel-styled)
  - [ ] Cards (game cards, resource cards)
  - [ ] Navigation elements
  - [ ] Forms and inputs
  - [ ] Filters and search components
- [ ] Create pixel art decorative elements
- [ ] Implement responsive grid system
- [ ] Design layout templates for various page types

### Backend Setup
- [ ] Set up Node.js + Express backend
- [ ] Configure PostgreSQL database
- [ ] Set up Prisma ORM and create initial schemas
- [ ] Implement basic API endpoints for games and users
- [ ] Configure authentication and authorization middleware

## MVP Feature Checklist

### 🎮 Game Catalog & Playability Focus

#### Core Game Database
- [ ] Create database schema for games table
- [ ] Build API endpoints for game retrieval
- [ ] Implement basic game listing component
- [ ] Create detailed game profile page template

#### Essential Game Info
- [ ] Game title, release date, developer fields
- [ ] Platform availability component with icons
- [ ] Modern availability indicator (where to buy/play)
- [ ] Beginner-friendliness rating system
- [ ] Estimated playtime component
- [ ] Screenshot gallery (3-5 per game)

#### Playability Information
- [ ] "How to Play This Now" section with:
  - [ ] Digital store links component
  - [ ] Subscription service availability
  - [ ] Platform comparison component
  - [ ] Version differences summary

#### Initial Data Population
- [ ] Create seed data for 10 "pillar" JRPGs
- [ ] Add detailed playability info for these titles
- [ ] Gather and add screenshot collections
- [ ] Implement data validation

### 🔍 Smart Discovery System

#### Browse & Filter
- [ ] Implement grid and list view toggle
- [ ] Create basic filter component for:
  - [ ] Platform availability
  - [ ] Playtime (short/medium/long)
  - [ ] Beginner-friendliness
  - [ ] Release era
  - [ ] Battle system type
- [ ] Build advanced search functionality
- [ ] Create timeline view component

#### Recommendation Engine
- [ ] Design and implement "If You Liked X, Try Y" component
- [ ] Create "Gateway Games" recommendation section
- [ ] Build tag-based similarity system
- [ ] Implement basic algorithm for personalized recommendations

#### Curated Collections
- [ ] Create collection data structure
- [ ] Build collection display component
- [ ] Seed initial collections:
  - [ ] "Perfect Starting Points"
  - [ ] "10-hour JRPGs"
  - [ ] "Story-focused Adventures"
  - [ ] "Unique Battle Systems"

### 🔗 Resource Aggregation

#### Resource Directory
- [ ] Create database schema for external resources
- [ ] Build resource card component
- [ ] Implement resource display by category
- [ ] Create resource submission and moderation system

#### External Content Integration
- [ ] Design and implement external link display
- [ ] Create resource rating system
- [ ] Build link verification system
- [ ] Implement resource categorization (guides, communities, videos)

### 👤 User Accounts & Game Tracking

#### Authentication
- [ ] Implement registration flow
- [ ] Create login system
- [ ] Build password reset functionality
- [ ] Set up basic user profile page

#### Game Tracking
- [ ] Create "Played" list functionality
- [ ] Implement "Currently Playing" status
- [ ] Build "Want to Play" wishlist
- [ ] Design and implement game completion tracking
- [ ] Create personal rating system

#### User Preferences
- [ ] Build user preferences page
- [ ] Implement theme settings (light/dark/pixel)
- [ ] Create platform ownership settings
- [ ] Build genre preference selection

## Development Phases & Milestones

### Phase 1: Foundation (Weeks 1-3)
- Project setup and environment configuration
- Design system implementation
- Basic backend and database setup
- Initial route structure and navigation

#### Milestone: Project Skeleton
✅ Running application with working navigation and design system

### Phase 2: Core Features (Weeks 4-8)
- Game database and catalog implementation
- Basic discovery functionality
- User authentication and profiles
- Initial game tracking features

#### Milestone: Technical Preview
✅ Functional application with basic features and seeded data for 10 games

### Phase 3: Discovery Enhancement (Weeks 9-12)
- Complete recommendation engine
- Advanced filtering implementation
- Resource directory integration
- Curated collections

#### Milestone: Beta Release
✅ Feature-complete MVP with full discovery system and 20+ games

### Phase 4: Polish & Launch (Weeks 13-16)
- Performance optimization
- Responsive design refinement
- Bug fixing and edge case handling
- User feedback implementation

#### Milestone: Public Launch
✅ Polished application with 30+ games and complete feature set

## Vibe Check Guidelines

Throughout development, regularly evaluate if the implementation meets these key "vibe" criteria:

### Visual Vibe
- [ ] Achieves nostalgic aesthetic without feeling outdated
- [ ] Balances pixel art elements with modern usability
- [ ] Color palette evokes 16-bit era JRPG feeling
- [ ] Typography combines nostalgic headers with readable body text
- [ ] Animations have subtle JRPG-inspired flourishes

### Content Vibe
- [ ] Writing tone balances enthusiasm with helpfulness
- [ ] Game descriptions capture essence without overwhelming detail
- [ ] Resources are presented with context and purpose
- [ ] Navigation feels like an adventure, not a database
- [ ] Recommendations have personality, not just algorithms

### Interaction Vibe
- [ ] Micro-interactions include subtle game-like feedback
- [ ] Discovery process feels exploratory rather than transactional
- [ ] Transitions and animations evoke menu systems from classic JRPGs
- [ ] Loading states include nostalgic elements
- [ ] Success/completion states feel rewarding and game-like

After implementing each feature, conduct a "vibe review" to ensure it maintains the nostalgic yet accessible spirit of Codex Fantasia.

---

## Initial Game Seedlist (Priority Order)

1. **Final Fantasy VI** - Ideal gateway JRPG with multiple modern ports
2. **Chrono Trigger** - Highly accessible with excellent mobile/PC versions
3. **Earthbound** - Available on Nintendo Switch Online
4. **Final Fantasy VII** - Culturally significant with remaster available
5. **Suikoden II** - Recently remastered and still holds up well
6. **Dragon Quest V** - Excellent story focus with mobile port
7. **Lunar: Silver Star Story Complete** - Example of PS1 era accessibility
8. **Final Fantasy IX** - Modern port with quality-of-life enhancements
9. **Pokémon Crystal** - Accessible via 3DS Virtual Console
10. **Persona 4 Golden** - Modern classic available on multiple platforms

## Next Steps After MVP

- User-submitted collections and recommendations
- Game Club functionality for community playthroughs
- Mobile companion app for tracking
- Advanced accessibility information
- Expanded game database to 100+ titles
- "Play History" visualization tools
- API for developers to build on the platform

---

*Build document v1.0 - Last updated: April 12, 2025*