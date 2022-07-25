
import { Request, Response } from 'express';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {

  constructor(private importCategoriesUserCase: ImportCategoriesUseCase){}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoriesUserCase.execute(file);
    return response.send();
  }

}

export { ImportCategoriesController };