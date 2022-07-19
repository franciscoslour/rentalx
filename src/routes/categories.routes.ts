import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriasRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriasRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoriaService = new CreateCategoryService(categoryRepository);
  categoriaService.execute({ name, description });
  return response.status(201).send();
});

categoriasRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();
  return response.json(categories);
})

export { categoriasRoutes };