import { Get, Inject } from "@nestjs/common";
import { ListAllAtividadesUseCase } from "./listAll.usecase";

export class ListAllAtividadescontroller {
    constructor(
        @Inject('ListAllAtividadesUseCase')
        private readonly atividadesRepository: ListAllAtividadesUseCase,
    ) { }


    @Get()
    async handle() {
        return await this.atividadesRepository.execute();

    }
}