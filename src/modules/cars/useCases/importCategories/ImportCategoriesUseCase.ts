
import fs from "fs";
import { parse } from 'csv-parse';
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoriesUseCase {

  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async category => {
      const { name, description } = category;
      const categoryExist = await this.categoryRepository.findByName(name);
      if (!categoryExist) {
        await this.categoryRepository.create({ name, description });
      }
    });
  }

}

export { ImportCategoriesUseCase };