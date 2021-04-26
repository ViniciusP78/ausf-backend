import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import User from "../../models/User";
import { UserSeed } from '../seeds/User.seed';

export class UserSeed1619388816220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(User).save(UserSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
