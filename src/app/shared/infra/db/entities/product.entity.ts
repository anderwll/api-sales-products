import { Column, Entity } from 'typeorm';
import { Unit } from '../../../domain/enums';
import BaseEntity from './base-entity.entity';

@Entity({ name: 'products' })
export class ClientEntity extends BaseEntity {
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
}
