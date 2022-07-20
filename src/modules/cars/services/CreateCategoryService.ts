
import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoryRepository: ICategoryRepository) { }

  execute({ name, description }: IResquest): void {
    const category = this.categoryRepository.findByName(name);
    if (category) throw new Error('Category already exists');
    this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryService };