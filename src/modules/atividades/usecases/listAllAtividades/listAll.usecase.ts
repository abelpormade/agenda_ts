import { Inject } from "@nestjs/common";
import { AtividadeRepositoryInterface } from "../../models/interfaces/atividadeRepositoryInterface";

export class ListAllAtividadesUseCase {

    constructor(
        @Inject('AtividadeRepositoryInterface')
        private  atividadeRepository: AtividadeRepositoryInterface,
    ){}

    async execute() {
        return await this.atividadeRepository.listAll();
    }

}
