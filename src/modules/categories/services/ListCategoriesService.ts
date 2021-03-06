import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

class ListCategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoriesService };
