import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProntuarios1619401112246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'prontuarios',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'paciente_id',
              type: 'uuid'
            },
            {
              name: 'observacoes',
              type: 'varchar',
              isNullable: true
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

      await queryRunner.createForeignKey('prontuarios',
        new TableForeignKey({
          name: 'Paciente',
          columnNames: ['paciente_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'pacientes',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('prontuarios', 'Paciente');
      await queryRunner.dropTable('prontuarios');
      
    }

}
