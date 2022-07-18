import { Router } from 'express';
import { v4 as uuidV4} from 'uuid';

const categoriasRoutes = Router();

const categories = [];

categoriasRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = {
    id: uuidV4(),
    name,
    description
  }
  categories.push(category);
  return response.status(201).send();
});

export { categoriasRoutes };