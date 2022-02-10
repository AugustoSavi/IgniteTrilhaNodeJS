import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ImportCategoryService } from "../services/ImportCategoryService";
import { ListCategoriesService } from "../services/ListCategoriesService";
import { CreateCategoryController } from "./CreateCategoryController";
import { ImportCategoryController } from "./ImportCategoryController";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = new CategoriesRepository();

// Criação de Category
const createCategoryService = new CreateCategoryService(categoriesRepository);
export function createCategoryController(): CreateCategoryController {
    return new CreateCategoryController(createCategoryService);
}

// Listagement des categories
const listCategoriesService = new ListCategoriesService(categoriesRepository);
export function listCategoriesController(): ListCategoriesController {
    return new ListCategoriesController(listCategoriesService);
}

// Upload File
const importCategoryService = new ImportCategoryService(categoriesRepository);
export function importCategoryController(): ImportCategoryController {
    return new ImportCategoryController(importCategoryService);
}
