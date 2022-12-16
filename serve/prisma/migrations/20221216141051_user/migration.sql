-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_usuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_nome_usuario_key" ON "user"("nome_usuario");
