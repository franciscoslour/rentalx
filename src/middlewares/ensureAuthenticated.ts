import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IRequest{
  sub:string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader) throw new AppError(" Token missing !", 400);
  const [, token] = authHeader.split(" ");

  try{
    const {sub: userId} = verify(token, "afd3b0718e9c44808994ac7553221144") as IRequest;
    const userRepository = new UserRepository();
    const user = userRepository.findById(userId);
    if(!user) throw new AppError("User not found", 401);

    request.user = {
      id:userId
    }

    next();
  }catch{
    throw new AppError("Invalid token !", 401);
  }

}