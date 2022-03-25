import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsers extends BaseSchema {
  protected tableName = 'user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("name")
      table.string("email")
      table.string("cpf")
      table.string("password")
      table.boolean("isAdmin")
      table.timestamp("created_at", { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
