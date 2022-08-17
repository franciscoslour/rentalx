
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {

  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const category = await this.categoryRepository.findByName(name);
    if (category) throw new Error('Category already exists');
    this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase,IRequest };