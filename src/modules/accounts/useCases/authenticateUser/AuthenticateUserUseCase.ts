import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";


interface IRequest {
  email: string;
  password: string;
}


interface IResponse{
  user:{
    name:string;
    email:string;
  },
  token:string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new AppError("Email or password incorrect !");
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new AppError("Email or password incorrect !");

    const token = sign({}, "afd3b0718e9c44808994ac7553221144", {
      subject: user.id,
      expiresIn:"1d"
    })

    const tokenReturn: IResponse = {
      token,
      user:{
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }

}

export { AuthenticateUserUseCase }