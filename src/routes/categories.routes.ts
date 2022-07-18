import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriasRoutes = Router();

categoriasRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryRepository = new CategoryRepository();
  categoryRepository.create({name, description});
  return response.status(201).send();
});

export { categoriasRoutes };