import Category from '../models/Category';

interface Request {
    title: string,
}

class CreateCategoryService {
    public async execute({ title }: Request): Promise<Category>{
        

    }
}
export default CreateCategoryService;