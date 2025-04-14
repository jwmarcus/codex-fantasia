-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('PLAYED', 'PLAYING', 'WANT_TO_PLAY', 'BACKLOG', 'DROPPED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "auth0Sub" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "theme" TEXT DEFAULT 'light',
    "ownedPlatforms" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "preferredGenres" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "alternativeTitles" TEXT[],
    "releaseDate" TIMESTAMP(3),
    "developer" TEXT,
    "publisher" TEXT,
    "genre" TEXT,
    "subgenre" TEXT,
    "beginnerFriendliness" SMALLINT,
    "modernPlayabilityScore" SMALLINT,
    "estimatedCompletionTime" TEXT,
    "synopsis" TEXT,
    "isEntryPoint" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayabilityInfo" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "modernAvailability" TEXT[],
    "originalPlatform" TEXT,
    "digitalStoreLinks" TEXT[],
    "subscriptionServices" TEXT[],
    "regionRestrictions" TEXT,
    "languageOptions" TEXT[],
    "notableVersionDiffs" TEXT,
    "qualityOfLifeFeatures" TEXT[],
    "systemRequirements" TEXT,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "PlayabilityInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceLink" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sourceCreator" TEXT,
    "description" TEXT,
    "communityRating" DOUBLE PRECISION DEFAULT 0,
    "lastVerifiedAt" TIMESTAMP(3),
    "gameId" TEXT NOT NULL,

    CONSTRAINT "ResourceLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameEntry" (
    "id" TEXT NOT NULL,
    "status" "GameStatus" NOT NULL,
    "rating" SMALLINT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "UserGameEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Sub_key" ON "User"("auth0Sub");

-- CreateIndex
CREATE UNIQUE INDEX "UserGameEntry_userId_gameId_key" ON "UserGameEntry"("userId", "gameId");

-- AddForeignKey
ALTER TABLE "PlayabilityInfo" ADD CONSTRAINT "PlayabilityInfo_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceLink" ADD CONSTRAINT "ResourceLink_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameEntry" ADD CONSTRAINT "UserGameEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameEntry" ADD CONSTRAINT "UserGameEntry_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
