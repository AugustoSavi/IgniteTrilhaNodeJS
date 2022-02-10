import { Specification } from "../entities/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "./interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private Specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.Specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.Specifications.push(specification);
    }

    list(): Specification[] {
        return this.Specifications;
    }

    findByName(name: string): Specification {
        const specification = this.Specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
