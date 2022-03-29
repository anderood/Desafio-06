import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
    title: string,
}

class CreateCategoryService {
    public async execute({ title }: Request): Promise<Category>{
        
        const categoryRepository = getRepository(Category);
        
        const findCategory = await categoryRepository.findOne({title: title});

        if(findCategory){
            throw new Error("category used");            
        }

        const category = categoryRepository.create({
            title
        });

        await categoryRepository.save(category);

        return category;

    }
}
export default CreateCategoryService;