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
    company!: string;

    @ManyToOne(() => OrderEntity, (entity) => entity.client)
    @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
    order?: OrderEntity;
}
