import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
    type: 'postgres',
    host: 'motty.db.elephantsql.com',
    port: 5432,
    username: 'pmfakupe',
    password: 'qBadWkd8sIiUB8C4ZFBnsvC-VzSDu70m',
    database: 'pmfakupe',
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
});
