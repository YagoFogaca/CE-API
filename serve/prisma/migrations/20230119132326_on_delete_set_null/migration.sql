-- DropForeignKey
ALTER TABLE "supply" DROP CONSTRAINT "supply_id_user_fkey";

-- AlterTable
ALTER TABLE "supply" ALTER COLUMN "id_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "supply" ADD CONSTRAINT "supply_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
