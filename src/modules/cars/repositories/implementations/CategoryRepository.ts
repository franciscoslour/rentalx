import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryDTO, ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {

  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name });
    return category;
  }

}

export { CategoryRepository };