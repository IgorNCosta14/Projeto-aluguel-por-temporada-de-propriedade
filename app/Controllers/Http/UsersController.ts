import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, email, cpf, password } = request.only(["name", "email", "cpf", "password"]);
    const user = await User.create({
      name,
      email,
      cpf,
      password
    })
    return user;
  }
}
