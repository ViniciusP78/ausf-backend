import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCargos1619366997149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'cargos',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'titulo',
              type: 'varchar'
            },
            {
              name: 'status',
              type: 'boolean',
              default: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      )
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('cargos');
    }

}
