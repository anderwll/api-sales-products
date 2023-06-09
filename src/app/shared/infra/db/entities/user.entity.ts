import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import BaseEntity from './base-entity.entity';
import { Profile } from '../../../domain/enums';
import { OrderEntity } from './order.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({ type: 'enum', enum: Profile })
    profile!: Profile;

    @OneToMany(() => OrderEntity, (entity) => entity.representative)
    order!: OrderEntity[];
}
