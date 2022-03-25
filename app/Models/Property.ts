import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public propertyName: string

  @column()
  public description: string

  @column()
  public address: string

  @column()
  public typeOfProperty: string

  @column()
  public available: boolean

  @column()
  public daily_rate: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
