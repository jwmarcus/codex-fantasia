import { Router, Request, Response } from 'express'
import { db } from '../utils/db.server'

const router = Router()

// GET /api/games - List all games
router.get('/', async (req: Request, res: Response) => {
  try {
    const games = await db.game.findMany({
      // Basic findMany, add includes for relations later if needed
    })
    res.json(games)
  } catch (error) {
    console.error('Error fetching games:', error)
    res.status(500).json({ error: 'Failed to fetch games' })
  }
})

// GET /api/games/:id - Get a single game by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const game = await db.game.findUnique({
      where: { id },
      // Include related data like PlayabilityInfo and ResourceLinks later
      // include: { playabilityInfo: true, resourceLinks: true }
    })
    if (!game) {
      return res.status(404).json({ error: 'Game not found' })
    }
    res.json(game)
  } catch (error) {
    console.error(`Error fetching game ${id}:`, error)
    res.status(500).json({ error: 'Failed to fetch game' })
  }
})

// POST /api/games - Create a new game
router.post('/', async (req: Request, res: Response) => {
  const gameData = req.body // Add validation later

  try {
    // Basic create, add nested writes for relations later
    const newGame = await db.game.create({
      data: gameData,
    })
    res.status(201).json(newGame)
  } catch (error) {
    console.error('Error creating game:', error)
    // Add more specific error handling (e.g., validation errors) later
    res.status(500).json({ error: 'Failed to create game' })
  }
})

// PUT /api/games/:id - Update a game by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const gameData = req.body // Add validation later

  try {
    const updatedGame = await db.game.update({
      where: { id },
      data: gameData,
    })
    res.json(updatedGame)
  } catch (error) {
    console.error(`Error updating game ${id}:`, error)
    // Handle specific errors like P2025 (Record to update not found)
    // Check if error is an object with a 'code' property
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2025') {
      return res.status(404).json({ error: 'Game not found' })
    }
    res.status(500).json({ error: 'Failed to update game' })
  }
})

// DELETE /api/games/:id - Delete a game by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await db.game.delete({
      where: { id },
    })
    res.status(204).send() // No content on successful delete
  } catch (error) {
    console.error(`Error deleting game ${id}:`, error)
    // Handle specific errors like P2025 (Record to delete not found)
    // Check if error is an object with a 'code' property
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2025') {
      return res.status(404).json({ error: 'Game not found' })
    }
    // Consider handling related records (PlayabilityInfo, ResourceLink) if needed
    res.status(500).json({ error: 'Failed to delete game' })
  }
})

export default router 