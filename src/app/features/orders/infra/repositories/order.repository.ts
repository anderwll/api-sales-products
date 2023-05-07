import { appDataSource } from '../../../../shared/infra/db/data-source';
import { OrderEntity } from '../../../../shared/infra/db/entities/order.entity';
import { CreateOrderDTO, OrderDetailDTO } from '../../domain/dtos';

export class OrderRepository {
    private _repository = appDataSource.getRepository(OrderEntity);

    async saveOrder(order: CreateOrderDTO): Promise<OrderDetailDTO> {
        const entity = this._repository.create({
            clienteId: order.clientId,
            representativeId: order.representativeId,
            productId: order.productId,
            amount: order.amount,
            total: order.total,
            discount: order.discount,
        });
        await this._repository.save(entity);

        return this.mapperToOrderDetail(entity);
    }

    private mapperToOrderDetail(entity: OrderEntity) {
        return {
            id: entity.id,
            clientId: entity.clienteId,
            representativeId: entity.representativeId,
            productId: entity.productId,
            amount: entity.amount,
            total: entity.total,
            discount: entity.discount,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
