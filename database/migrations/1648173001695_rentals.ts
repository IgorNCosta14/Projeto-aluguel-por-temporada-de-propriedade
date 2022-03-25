import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rentals extends BaseSchema {
  protected tableName = 'rentals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')
      table.uuid('user_id')
      table.uuid('property_id')
      table.boolean('rentFinished')
      table.float('totalRate')
      table.timestamp('start_Date', { useTz: true })
      table.timestamp('end_Date', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
