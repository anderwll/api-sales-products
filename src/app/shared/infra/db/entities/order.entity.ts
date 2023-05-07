import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import BaseEntity from './base-entity.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';
import { ClientEntity } from './client.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
    @Column({ name: 'client_id' })
    clienteId!: string;

    @Column({ name: 'representative_id' })
    representativeId!: string;

    @Column({ name: 'product_id' })
    productId!: string;

    @Column()
    amount!: number;

    @Column()
    total!: number;

    @Column()
    discount!: number;

    @ManyToOne(() => ClientEntity, (entity) => entity.order)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
    client!: ClientEntity;

    @ManyToOne(() => UserEntity, (entity) => entity.order)
    @JoinColumn({ name: 'representative_id', referencedColumnName: 'id' })
    representative!: UserEntity;

    @ManyToMany(() => ProductEntity, (entity) => entity.order)
    @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    products!: ProductEntity[];
}
