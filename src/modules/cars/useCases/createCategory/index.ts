import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCateogryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default () => {
  const categoryRepository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  const createCategoryController = new CreateCateogryController(createCategoryUseCase);
  return createCategoryController;
}

