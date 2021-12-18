import { Router } from "express";

import { categoriesRoutes } from "./categories/routes/categories.routes";
import { specificationsRoutes } from "./specifications/routes/specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
