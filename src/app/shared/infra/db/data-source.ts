import { DataSource } from 'typeorm';
import 'dotenv/config';

export const appDataSource = new DataSource({
    type: 'postgres',
    url: process.env.BD_URL,
    database: 'pmfakupe',
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
});
