import { CustomError } from '../../../../shared/errors';
import { ProductRepository } from '../../infra/repositories';
import { CreateProductDTO, ProductDetailDTO } from '../dtos';

export class CreateProductUseCase {
    async execute(createProductDTO: CreateProductDTO): Promise<ProductDetailDTO> {
        const productRepository = new ProductRepository();

        const exist = await productRepository.existProductByDesc(createProductDTO.description);

        if (exist) throw new CustomError('This product is already registered.');

        const product = await productRepository.saveProduct(createProductDTO);

        return product;
    }
}
