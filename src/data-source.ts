import "reflect-metadata"
import { config } from "dotenv";
config();
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD ?? '',
    database: process.env.DATABASE,
    connectorPackage:"mysql2",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
