import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidV4 } from 'uuid';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public cpf: string;

  @column()
  public password: string;

  @column()
  isAdmin: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  constructor () {
    super();
    if(!this.id) {
      this.id = uuidV4()
      this.isAdmin = false
    }
  }

}
