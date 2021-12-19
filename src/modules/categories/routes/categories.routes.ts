import { Router } from "express";
import multer from "multer";

import {
    createCategoryController,
    listCategoriesController,
    importCategoryController,
} from "../controllers";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    importCategoryController.handle(request, response);
});

export { categoriesRoutes };
