import process from 'process'
import { PrismaClient } from '../src/generated/prisma'

const db = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)

    // Seed Games
    const game1 = await db.game.upsert({
        where: { title: 'Final Fantasy VI' }, // Use a unique field for upsert
        update: {},
        create: {
            title: 'Final Fantasy VI',
            alternativeTitles: ['FF6', 'Final Fantasy 3'],
            developer: 'Square',
            publisher: 'Square',
            releaseDate: new Date('1994-04-02T00:00:00.000Z'),
            genre: 'RPG',
            subgenre: 'JRPG',
            beginnerFriendliness: 4,
            modernPlayabilityScore: 5,
            estimatedCompletionTime: 'Main: 35h, Comp: 60h',
            synopsis: 'A seminal JRPG featuring a large ensemble cast fighting against a tyrannical empire in a world blending magic and technology.',
            isEntryPoint: true,
        },
    })

    const game2 = await db.game.upsert({
        where: { title: 'Chrono Trigger' },
        update: {},
        create: {
            title: 'Chrono Trigger',
            alternativeTitles: ['CT'],
            developer: 'Square',
            publisher: 'Square',
            releaseDate: new Date('1995-03-11T00:00:00.000Z'),
            genre: 'RPG',
            subgenre: 'JRPG',
            beginnerFriendliness: 5,
            modernPlayabilityScore: 5,
            estimatedCompletionTime: 'Main: 23h, Comp: 40h',
            synopsis: 'A beloved time-traveling adventure with multiple endings, unique combat mechanics, and artwork by Akira Toriyama.',
            isEntryPoint: true,
        },
    })

    const game3 = await db.game.upsert({
        where: { title: 'Earthbound' },
        update: {},
        create: {
            title: 'Earthbound',
            alternativeTitles: ['Mother 2'],
            developer: 'Ape Inc., HAL Laboratory',
            publisher: 'Nintendo',
            releaseDate: new Date('1994-08-27T00:00:00.000Z'), // Japan release
            genre: 'RPG',
            subgenre: 'JRPG',
            beginnerFriendliness: 3,
            modernPlayabilityScore: 4,
            estimatedCompletionTime: 'Main: 30h, Comp: 45h',
            synopsis: 'A quirky and satirical modern-day RPG where a young boy and his friends battle bizarre enemies to stop an alien invasion.',
            isEntryPoint: false, // Part of Mother series, but standalone story
        },
    })

    console.log(`Seeded game: ${game1.title} (ID: ${game1.id})`)
    console.log(`Seeded game: ${game2.title} (ID: ${game2.id})`)
    console.log(`Seeded game: ${game3.title} (ID: ${game3.id})`)

    // Add seeding for PlayabilityInfo later

    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await db.$disconnect()
    }) 