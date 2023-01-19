-- DropForeignKey
ALTER TABLE "entrySupply" DROP CONSTRAINT "entrySupply_id_user_fkey";

-- DropForeignKey
ALTER TABLE "exitSupply" DROP CONSTRAINT "exitSupply_id_user_fkey";

-- AlterTable
ALTER TABLE "entrySupply" ALTER COLUMN "id_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "exitSupply" ALTER COLUMN "id_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "entrySupply" ADD CONSTRAINT "entrySupply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exitSupply" ADD CONSTRAINT "exitSupply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
