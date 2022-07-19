
import { CategoryRepository } from "../repositories/CategoryRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoryRepository: CategoryRepository) { }

  execute({ name, description }: IResquest): void {
    const category = this.categoryRepository.findByName(name);
    if (category) throw new Error('Category already exists');
    this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryService };