import { MigrationInterface, QueryRunner } from "typeorm";

export class addavatartocontacts1679408125469 implements MigrationInterface {
    name = 'addavatartocontacts1679408125469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "avatar" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "avatar"`);
    }

}
