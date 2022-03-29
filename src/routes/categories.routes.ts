import { Router } from 'express';

import CreateCategoryService from '../services/CreateCategoryService';

const transactionsRouter = Router();


transactionsRouter.post('/', async (request, response) => {
  
  const { title } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({
    title
  });

  return response.json(category);

});
export default transactionsRouter;
