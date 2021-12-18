import { Request, Response } from "express";

import { ListSpecificationsService } from "../services/ListSpecificationsService";

class ListSpecificationsController {
    constructor(private listSpecificationsService: ListSpecificationsService) {}

    handle(request: Request, response: Response): Response {
        const specifications = this.listSpecificationsService.execute();

        return response.json(specifications);
    }
}

export { ListSpecificationsController };
