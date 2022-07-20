import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const specificationService = new CreateSpecificationService(specificationRepository);
  specificationService.execute({ name, description });
  return response.status(201).send();
});


specificationRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();
  return response.json(specifications);
})

export { specificationRoutes }