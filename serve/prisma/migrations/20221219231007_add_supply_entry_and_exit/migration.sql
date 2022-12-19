-- CreateTable
CREATE TABLE "supply" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "quant_estoque" INTEGER NOT NULL,
    "unidade" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entrySupply" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_supply" TEXT NOT NULL,
    "quant" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entrySupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exitSupply" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_supply" TEXT NOT NULL,
    "quant" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exitSupply_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "supply_id_key" ON "supply"("id");

-- CreateIndex
CREATE UNIQUE INDEX "entrySupply_id_key" ON "entrySupply"("id");

-- CreateIndex
CREATE UNIQUE INDEX "exitSupply_id_key" ON "exitSupply"("id");

-- AddForeignKey
ALTER TABLE "supply" ADD CONSTRAINT "supply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrySupply" ADD CONSTRAINT "entrySupply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrySupply" ADD CONSTRAINT "entrySupply_id_supply_fkey" FOREIGN KEY ("id_supply") REFERENCES "supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exitSupply" ADD CONSTRAINT "exitSupply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exitSupply" ADD CONSTRAINT "exitSupply_id_supply_fkey" FOREIGN KEY ("id_supply") REFERENCES "supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
