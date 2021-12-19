import csvParse from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IImportCategorie {
    name: string;
    description: string;
}

class ImportCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategorie[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategorie[] = [];

            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.unlinkSync(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const categoryExists = this.categoriesRepository.findByName(name);

            if (!categoryExists) {
                this.categoriesRepository.create({ name, description });
            }
        });
    }
}

export { ImportCategoryService };
