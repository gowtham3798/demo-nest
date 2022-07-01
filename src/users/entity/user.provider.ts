import { DataSource } from 'typeorm';
import { Users } from './user.entity';
export const databaseProviders = 
 {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Shine30498!',
        database: 'demo_nest',
        entities: [Users],
        synchronize: true,
    }