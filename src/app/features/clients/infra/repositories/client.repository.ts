import { appDataSource } from '../../../../shared/infra/db/data-source';
import { ClientEntity } from '../../../../shared/infra/db/entities/client.entity';
import { ClientDetailDTO, CreateClientDTO } from '../../domain/dtos';

export class ClientRepository {
    private _repository = appDataSource.getRepository(ClientEntity);

    async saveClient(client: CreateClientDTO): Promise<ClientDetailDTO> {
        const entity = this._repository.create({
            fantasy: client.fantasy,
            cpfCnpj: client.cpfCnpj,
            phone: client.phone,
            address: client.address,
            email: client.email,
        });

        await this._repository.save(entity);

        return this.mapperToUserDetail(entity);
    }

    async existClientByCpfCnpj(cpfCnpj: string): Promise<boolean> {
        const exist = await this._repository.exist({ where: { cpfCnpj } });

        return exist;
    }

    private mapperToUserDetail(entity: ClientEntity) {
        return {
            id: entity.id,
            fantasy: entity.fantasy,
            cpfCnpj: entity.cpfCnpj,
            phone: entity.phone,
            address: entity.address,
            email: entity.email,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
