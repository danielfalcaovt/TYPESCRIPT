import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  "type":"postgres",
  "host":"localhost",
  "port":5432,
  "username":"postgres",
  "password":"brbr109br",
  "database":"comercial",
  "migrations":["./src/shared/typeorm/migrations/*.ts"],
  "entities":["./src/shared/modules/products/typeorm/entities/*.ts"]
});

const main = async () => {
   console.time('main');
   await appDataSource.initialize();
};

main().catch(err => {
   console.error(err);
   process.exit(1);
});
