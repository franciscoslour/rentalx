import { inject, injectable } from "tsyringe";
import {hash} from "bcrypt";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {

  constructor( 
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({name, password, email, driver_license}: ICreateUserDTO): Promise<void>{
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