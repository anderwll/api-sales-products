import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import BaseEntity from './base-entity.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';
import { ClientEntity } from './client.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
    @OneToOne(() => ClientEntity, (entity) => entity.order)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
    client!: ClientEntity;

    @OneToOne(() => UserEntity, (entity) => entity.listOrder)
    @JoinColumn({ name: 'representative_id', referencedColumnName: 'id' })
    representative!: UserEntity;

    @OneToMany(() => ProductEntity, (entity) => entity.order)
    @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    listProducts!: ProductEntity[];
}
