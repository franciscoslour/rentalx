import { Router } from "express";
import { CreateUserUseController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


const usersRoutes = Router();

const createUserUseController = new CreateUserUseController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserUseController.handle);

usersRoutes.patch("/avatar", updateUserAvatarController.handle);

export { usersRoutes };