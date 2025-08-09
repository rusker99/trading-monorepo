-- CreateTable
CREATE TABLE trading."User" (
    "id" SERIAL NOT NULL,
    "userName" varchar(100) NOT NULL,
    "firstName" varchar(50) NOT NULL,
    "lastName" varchar(50) NOT NULL,
    "email" varchar(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

ALTER TABLE trading."User" ADD CONSTRAINT User_uk UNIQUE ("userName");

-- CreateTable
CREATE TABLE trading."AccountPerformance" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "amount" DECIMAL(9,2) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AccountPerformance_pkey" PRIMARY KEY ("id")
);

ALTER TABLE trading."AccountPerformance" ADD CONSTRAINT AccountPerformance_uk UNIQUE ("date", "userId");

-- AddForeignKey
ALTER TABLE trading."AccountPerformance" ADD CONSTRAINT "AccountPerformance_userId_fkey" FOREIGN KEY ("userId") REFERENCES trading."User"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
