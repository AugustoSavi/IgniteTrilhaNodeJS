import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.create(category);
    }

    async list(): Promise<Category[]> {
        const category = await this.repository.find();
        return category;
    }

    async findByName(name: string): Promise<Category> {
        const category = this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };
