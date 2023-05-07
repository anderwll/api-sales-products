import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from './base-entity.entity';
import { OrderEntity } from './order.entity';

@Entity({ name: 'clients' })
export class ClientEntity extends BaseEntity {
    @Column()
    fantasy!: string;

    @Column({ name: 'cpf_cnpj' })
    cpfCnpj!: string;

    @Column()
    phone!: string;

    @Column()
    address!: string;

    @Column()
    email!: string;

    // @ManyToOne(() => OrderEntity, (entity) => entity.client)
    // order?: OrderEntity;
}
