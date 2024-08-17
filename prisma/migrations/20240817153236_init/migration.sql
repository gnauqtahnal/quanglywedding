-- CreateTable
CREATE TABLE "reservation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "wish" TEXT,
    "join" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);
