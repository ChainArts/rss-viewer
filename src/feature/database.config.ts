import { registerAs } from "@nestjs/config";
import { parse } from "path";

export default registerAs(
    'database',
    () =>
        process.env.DB_TYPE === 'sqlite'
            ? {
                type: 'sqlite',
                database: process.env.DB_NAME,
                synchronize: process.env.DB_SYNC === 'true',
              }
            : {
                type: process.env.DB_TYPE as 'postgres' | 'mysql' ,
                database: process.env.DB_NAME,
                synchronize: process.env.DB_SYNC === 'true',
                host: process.env.DB_HOST,
                port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3360,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
              }
);