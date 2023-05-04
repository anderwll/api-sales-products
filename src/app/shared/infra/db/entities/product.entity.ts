import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Unit } from '../../../domain/enums';
import BaseEntity from './base-entity.entity';
import { OrderEntity } from './order.entity';

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
    @Column()
    description!: string;

    @Column()
    price!: number;

    @Column({ type: 'enum', enum: Unit })
    unit!: Unit;

    @Column()
    amount!: number; // estoque

    @Column()
    active!: boolean;

    @ManyToOne(() => OrderEntity, (entity) => entity.listProducts)
    order?: OrderEntity;
}
