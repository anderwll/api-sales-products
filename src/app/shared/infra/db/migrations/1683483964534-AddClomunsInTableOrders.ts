import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddClomunsInTableOrders1683483964534 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('orders', [
            new TableColumn({ name: 'amount', type: 'float', isNullable: false }),
            new TableColumn({ name: 'total', type: 'float', isNullable: false }),
            new TableColumn({ name: 'discount', type: 'float' }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('orders', ['amount', 'total', 'discount']);
    }
}
