import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest{
  name:string;
  description:string;
}
class CreateSpecificationService {

  constructor(private specificationRepository: ISpecificationRepository){}

  execute({ name, description}:IRequest) {
    const specification = this.specificationRepository.findByName(name);
    if(specification) throw new Error("Specification already exists");
    this.specificationRepository.create({name, description});
  }

}

export { CreateSpecificationService,IRequest };