import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ListCategoriesService } from "../services/ListCategoriesService";
import { CreateCategoryController } from "./CreateCategoryController";
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

export { createCategoryController, listCategoriesController };
