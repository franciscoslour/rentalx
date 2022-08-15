import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoryRepository = null;
const importCategoriesUserCase = new ImportCategoriesUseCase(categoryRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUserCase);

export { importCategoriesController };