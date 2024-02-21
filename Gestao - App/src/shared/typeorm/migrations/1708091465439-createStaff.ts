import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStaff1708091465439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
