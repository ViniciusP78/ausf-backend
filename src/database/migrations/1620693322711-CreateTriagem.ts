import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTriagem1620693322711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name:'triagem',
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
                    name: 'enfermeira_id',
                    type: 'uuid'
                },
                {
                    name: 'pressao',
                    type: 'varchar'
                },
                {
                    name: 'peso',
                    type: 'varchar'
                },
                {
                    name: 'altura',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                }
                        ]
            })
          )

          
        await queryRunner.createForeignKey('triagem',
        new TableForeignKey({
            name: 'Prontuario',
            columnNames: ['prontuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'prontuarios',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          })
    )

          await queryRunner.createForeignKey('triagem',
          new TableForeignKey({
            name: 'Users',
            columnNames: ['enfermeira_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          })
        )       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('triagem', 'Prontuario');
        await queryRunner.dropForeignKey('triagem', 'Users');
        await queryRunner.dropTable('triagem');
    }

}
