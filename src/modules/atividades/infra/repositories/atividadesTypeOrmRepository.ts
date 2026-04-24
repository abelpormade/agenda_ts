import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { AtividadeRepositoryInterface } from "../../models/interfaces/atividadeRepositoryInterface";
import { AtividadesEntity } from "../entities/atividade.entity";

export class AtividadesTypeOrmRepository implements AtividadeRepositoryInterface {

    constructor(
    @Inject(AtividadesEntity)
    private readonly atividadesRepository: Repository<AtividadesEntity>,
  ) {}
  
  async listAll(): Promise<AtividadesEntity[]> {
        return await this.atividadesRepository.find();
    }

}