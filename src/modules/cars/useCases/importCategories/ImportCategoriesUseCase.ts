
import fs from "fs";
import { parse } from 'csv-parse';
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {

  constructor(private categoryRepository: CategoryRepository) { }

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
      const categoryExist = this.categoryRepository.findByName(name);
      if (!categoryExist) {
        this.categoryRepository.create({ name, description });
      }
    });
  }

}

export { ImportCategoriesUseCase };