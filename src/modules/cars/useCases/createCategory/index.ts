import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCateogryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCateogryController(createCategoryUseCase);

export { createCategoryController };