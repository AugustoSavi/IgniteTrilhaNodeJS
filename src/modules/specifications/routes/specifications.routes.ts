import { Router } from "express";

import {
    createSpecificationController,
    listSpecificationsController,
} from "../controllers/index";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
