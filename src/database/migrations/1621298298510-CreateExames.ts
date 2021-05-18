import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateExames1621298298510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'exames',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'prontuario_id',
                type: 'uuid'
              },
              {
                name: 'url',
                type: 'varchar'
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
            ]
          })
        )

        await queryRunner.createForeignKey('exames',
          new TableForeignKey({
            name: 'Prontuario',
            columnNames: ['prontuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'prontuarios',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('exames', 'Prontuario');
      await queryRunner.dropTable('exames');

    }

}
