
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {


  handle(request: Request, response: Response): Response {
    const { file } = request;
    const importCategoriesUserCase = container.resolve(ImportCategoriesUseCase);
    importCategoriesUserCase.execute(file);
    return response.send();
  }

}

export { ImportCategoriesController };