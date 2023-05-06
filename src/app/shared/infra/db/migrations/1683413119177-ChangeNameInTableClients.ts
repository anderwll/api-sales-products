import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeNameInTableClients1683413119177 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('clients', 'company', 'email');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('clients', 'email', 'company');
    }
}
