import { Column, Entity } from 'typeorm';
import BaseEntity from './base-entity.entity';

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
}
