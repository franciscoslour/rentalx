import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriasRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriasRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();
  return response.json(categories);
})

export { categoriasRoutes };