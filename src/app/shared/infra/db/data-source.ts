import { DataSource } from 'typeorm';
import entities from './entities';
import migrations from './migrations';
import 'dotenv/config';

export const appDataSource = new DataSource({
    type: 'postgres',
    url:
        process.env.BD_URL ||
        'postgres://anderwll:b0IJvSfC8Y5DyG6SjUvRjZv7NoJWZafB@dpg-cg56j6seoogsv95htkmg-a.oregon-postgres.render.com/my_first_db',
    database: 'pmfakupe',
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    entities,
    migrations,
});
