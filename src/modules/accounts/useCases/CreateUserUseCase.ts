import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) throw new Error(`User ${email} already exists`)
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license
    })
  }

}

export { CreateUserUseCase };