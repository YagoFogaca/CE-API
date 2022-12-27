import { Injectable } from "@nestjs/common";
import { ISupplyEntity } from "src/supply/entities/supply.entity";
import { SupplyRepository } from "../supply.repository";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptions.parms";

@Injectable()
export class FindByIdSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(id: string): Promise<ISupplyEntity> {
    const supply = await this.supplyRepository.findById(id);
    if (!supply) {
      throw new Exception(
        Exceptions.NotFoundData,
        "Nenhum insumo com esse id."
      );
    }
  }
}
