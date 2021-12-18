import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";

class ListSpecificationsService {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationsService };
