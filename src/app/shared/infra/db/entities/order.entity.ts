import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import BaseEntity from './base-entity.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';
import { ClientEntity } from './client.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
    @OneToOne(() => ClientEntity, (entity) => entity.order)
    client!: ClientEntity;

    @OneToOne(() => UserEntity, (entity) => entity.order)
    representative!: UserEntity;

    @OneToMany(() => ProductEntity, (entity) => entity.order)
    listProducts!: ProductEntity[];
}
