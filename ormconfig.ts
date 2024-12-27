import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "qweqwe",
  database: "pub_db",
  synchronize: false,
  logging: true,
  entities: ["./src/database/entities/**/*.ts"],
  migrations: ["./src/database/migrations/**/*.ts"],
});

export default AppDataSource;
