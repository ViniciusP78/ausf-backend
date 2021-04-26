import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePacientes1619390294173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'pacientes',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'nome',
              type: 'varchar'
            },
            {
              name: 'data_nascimento',
              type: 'date'
            },
            {
              name: 'sexo',
              type: 'char'
            },
            {
              name: 'cidade_nascimento',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'nome_mae',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'nome_pai',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'logradouro',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'telefone',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'peso',
              type: 'float',
              isNullable: true
            },
            {
              name: 'altura',
              type: 'float',
              isNullable: true
            },
            {
              name: 'RG',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'CPF',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'cartao_sus',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'escolaridade',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'etnia',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'sexualidade',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'sus_dependente',
              type: 'boolean',
              isNullable: true
            },
            {
              name: 'gestante',
              type: 'boolean',
              isNullable: true
            },
            {
              name: 'deficiente_fisico',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'fumante',
              type: 'boolean',
              isNullable: true
            },
            {
              name: 'usa_alcool',
              type: 'boolean',
              isNullable: true
            },
            {
              name: 'usa_drogas',
              type: 'boolean',
              isNullable: true
            }
          ]
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('pacientes');
    }

}
