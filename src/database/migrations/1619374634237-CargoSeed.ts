import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import Cargo from "../../models/Cargo";
import { CargoSeed } from '../seeds/Cargo.seed';

export class CargoSeed1619374634237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(Cargo).save(CargoSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
