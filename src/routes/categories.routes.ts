import { Router } from 'express';
import multer from 'multer';

import { CreateCateogryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';

const categoriasRoutes = Router();
const upload = multer({
  dest: "./tmp"
});

const createCategoryController = new CreateCateogryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoryController =  new ListCategoryController();

categoriasRoutes.post("/", createCategoryController.handle);

categoriasRoutes.get("/",listCategoryController.handle);

categoriasRoutes.post("/import", upload.single("file"), importCategoriesController.handle);

export { categoriasRoutes };