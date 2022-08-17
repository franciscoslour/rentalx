import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();
  return response.json(specifications);
})

export { specificationRoutes }