import { OrderRepository } from '../../infra/repositories';
import { CreateOrderDTO, OrderDetailDTO } from '../dtos';

export class CreateOrderUseCase {
    async execute(createOrderDTO: CreateOrderDTO): Promise<OrderDetailDTO | any> {
        const orderRepository = new OrderRepository();

        // const exist = await productRepository.existProductByDesc(createProductDTO.description);

        // if (exist) throw new CustomError('This product is already registered.');

        // const order = createOrderUseCaseDTO.productId.map((p) =>
        //     orderRepository.saveOrder({
        //         clientId: createOrderUseCaseDTO.clientId,
        //         representativeId: createOrderUseCaseDTO.representativeId,
        //         productId: p,
        //         amount: createOrderUseCaseDTO.amount,
        //         discount: createOrderUseCaseDTO.discount,
        //         total: 0,
        //     }),
        // );

        const orderAssing = Object.assign(createOrderDTO, { total: 0 });

        const order = await orderRepository.saveOrder(orderAssing);

        return order;
    }
}
