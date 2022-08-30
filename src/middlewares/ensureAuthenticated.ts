import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IRequest{
  sub:string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader) throw new Error(" Token missing !");
  const [, token] = authHeader.split(" ");

  try{
    const {sub: userId} = verify(token, "afd3b0718e9c44808994ac7553221144") as IRequest;
    const userRepository = new UserRepository();
    const user = userRepository.findById(userId);
    if(!user) throw new Error("User not found");
    next();
  }catch{
    throw new Error("Invalid token !");
  }

}