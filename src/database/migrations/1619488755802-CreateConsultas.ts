import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConsultas1619488755802 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'consultas',
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
                name: 'data_agendada',
                type: 'timestamp'
              },
              {
                name: 'descricao',
                type: 'varchar',
                isNullable: true
              },
              {
                name: 'medico_id',
                type: 'uuid'
              }
            ]
          })
        )

        await queryRunner.createForeignKey('consultas',
          new TableForeignKey({
            name: 'Prontuario',
            columnNames: ['prontuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'prontuarios',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          })
        )

        await queryRunner.createForeignKey('consultas',
          new TableForeignKey({
            name: 'Usuario',
            columnNames: ['medico_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('consultas', 'Usuario');
      await queryRunner.dropForeignKey('consultas', 'Prontuario');
      await queryRunner.dropTable('consultas');
    }

}
