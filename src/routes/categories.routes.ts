import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

const categoriasRoutes = Router();
const upload = multer({
  dest: "./tmp"
});

categoriasRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriasRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriasRoutes };