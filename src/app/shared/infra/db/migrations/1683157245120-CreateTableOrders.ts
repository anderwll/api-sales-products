import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableOrders1683157245120 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'client_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'representative_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['client_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'clients',
                        name: 'fk_orders_clients',
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['representative_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'users',
                        name: 'fk_orders_users',
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['product_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'products',
                        name: 'fk_orders_products',
                        onDelete: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders', true, true, true);
    }
}
