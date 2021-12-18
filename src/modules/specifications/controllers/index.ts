import { SpecificationsRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";
import { ListSpecificationsService } from "../services/ListSpecificationsService";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance();

// Create a specification
const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationService
);

// Listagem de specification

const listSpecificationsService = new ListSpecificationsService(
    specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsService
);

export { createSpecificationController, listSpecificationsController };
