import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ImportCategoryService } from "../services/ImportCategoryService";
import { ListCategoriesService } from "../services/ListCategoriesService";
import { CreateCategoryController } from "./CreateCategoryController";
import { ImportCategoryController } from "./ImportCategoryController";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = CategoriesRepository.getInstance();

// Criação de Category
const createCategoryService = new CreateCategoryService(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryService
);

// Listagement des categories
const listCategoriesService = new ListCategoriesService(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
    listCategoriesService
);

// Upload File
const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryService
);

export {
    createCategoryController,
    listCategoriesController,
    importCategoryController,
};
