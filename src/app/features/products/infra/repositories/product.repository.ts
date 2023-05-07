import { appDataSource } from '../../../../shared/infra/db/data-source';
import { ProductEntity } from '../../../../shared/infra/db/entities/product.entity';
import { CreateProductDTO, ProductDetailDTO } from '../../domain/dtos';

export class ProductRepository {
    private _repository = appDataSource.getRepository(ProductEntity);

    async saveProduct(product: CreateProductDTO): Promise<ProductDetailDTO> {
        const entity = this._repository.create({
            description: product.description,
            price: product.price,
            unit: product.unit,
            amount: product.amount,
            active: true,
        });
        await this._repository.save(entity);

        return this.mapperToProductDetail(entity);
    }

    async existProductByDesc(description: string): Promise<boolean> {
        const exist = await this._repository.exist({
            where: {
                description,
            },
        });

        return exist;
    }

    private mapperToProductDetail(entity: ProductEntity) {
        return {
            id: entity.id,
            description: entity.description,
            price: entity.price,
            unit: entity.unit,
            amount: entity.amount,
            active: entity.active,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
