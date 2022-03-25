import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Properties extends BaseSchema {
  protected tableName = 'properties'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('propertyName')
      table.string('description')
      table.string('adress')
      table.string('typeOfProperty')
      table.boolean('available')
      //number
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
