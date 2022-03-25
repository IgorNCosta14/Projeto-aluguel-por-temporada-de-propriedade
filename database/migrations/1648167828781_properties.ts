import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Properties extends BaseSchema {
  protected tableName = 'properties'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('propertyName').notNullable
      table.string('description')
      table.string('adress').notNullable
      table.string('typeOfProperty')
      table.boolean('available').notNullable
      table.float('daily_rate').notNullable
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
