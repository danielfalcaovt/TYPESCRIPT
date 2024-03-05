import { DataSource } from "typeorm"

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "SGEA",
  migrations: [
    "./view/typeorm/migrations/*.ts"
  ]
});

await dataSource.initialize();