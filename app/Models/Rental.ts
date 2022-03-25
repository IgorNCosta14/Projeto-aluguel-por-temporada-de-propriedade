import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rental extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: string

  @column()
  public property_id: string

  @column()
  public rentFinished: boolean

  @column()
  public typeOfProperty: string

  @column()
  public available: boolean

  @column()
  public daily_rate: number

  @column.dateTime({autoCreate: false})
  public start_Date: DateTime

  @column.dateTime({autoCreate: false})
  public end_Date: DateTime

}
