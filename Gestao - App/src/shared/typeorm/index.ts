import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    "type":"postgres",
  "host":"localhost",
  "port":5432,
  "username":"postgres",
  "password":"brbr109br",
  "database":"gestao",
    "migrations":["./src/shared/typeorm/migrations/*.ts"],
    "entities":["./src/shared/modules/staff/typeorm/entities/*.ts"]
});

const main = async ()=>{
    console.time("main");
    await dataSource.initialize();
};

main().catch((err)=>{
    console.error(err);
    process.exit(1);
});