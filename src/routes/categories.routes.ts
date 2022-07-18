import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriasRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriasRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = categoryRepository.findByName(name);
  if(category){
    return response.status(400).json({error: 'Category already exists'},)
  } 
  categoryRepository.create({name, description});
  return response.status(201).send();
});

categoriasRoutes.get("/", (request, response) =>{
  const categories  =  categoryRepository.list();
  return response.json(categories);
})

export { categoriasRoutes };