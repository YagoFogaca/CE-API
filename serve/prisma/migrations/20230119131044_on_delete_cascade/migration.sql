-- DropForeignKey
ALTER TABLE "entrySupply" DROP CONSTRAINT "entrySupply_id_supply_fkey";

-- DropForeignKey
ALTER TABLE "exitSupply" DROP CONSTRAINT "exitSupply_id_supply_fkey";

-- AddForeignKey
ALTER TABLE "entrySupply" ADD CONSTRAINT "entrySupply_id_supply_fkey" FOREIGN KEY ("id_supply") REFERENCES "supply"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exitSupply" ADD CONSTRAINT "exitSupply_id_supply_fkey" FOREIGN KEY ("id_supply") REFERENCES "supply"("id") ON DELETE CASCADE ON UPDATE CASCADE;
