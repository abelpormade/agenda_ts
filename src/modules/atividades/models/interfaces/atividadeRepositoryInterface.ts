import { AtividadesEntity } from "../../infra/entities/atividade.entity";

export interface AtividadeRepositoryInterface {

    listAll(): Promise<AtividadesEntity[]>;
}