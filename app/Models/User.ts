import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public cpf: string;

  @column()
  public password: string;

  @column()
  public isAdmin: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

}
