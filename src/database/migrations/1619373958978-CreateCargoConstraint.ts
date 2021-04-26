import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateCargoConstraint1619373958978 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('users',
          new TableForeignKey({
            name: 'Cargo',
            columnNames: ['cargo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'cargos',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'

          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'Cargo');
    }

}
