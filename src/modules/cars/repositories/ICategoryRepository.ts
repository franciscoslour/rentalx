import { Category } from "../entities/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository{

  create({ name, description }: ICategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  
}

export {ICategoryDTO, ICategoryRepository};