import { Category } from "../model/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository{

  create({ name, description }: ICategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category ;
  
}

export {ICategoryDTO, ICategoryRepository};