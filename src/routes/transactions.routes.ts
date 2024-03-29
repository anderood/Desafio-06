import { Router } from 'express';
import multer from 'multer';

import { getCustomRepository, getRepository } from 'typeorm';
import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    const transactionRepository = getRepository(Transaction);
    
    const transactions = await transactionRepository.find();

    return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  
  const { title, value, type, category } = request.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title, value, type, category
  })

  return response.json(transaction);


});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTransaction = new DeleteTransactionService();

  await deleteTransaction.execute(id);

  response.status(204).send()
});

transactionsRouter.post('/import', upload.single('file'), async (request, response) => {
  const importTransactions = new ImportTransactionsService();

  const transaction = await importTransactions.execute(request.file.path);

  return response.json(transaction);
});

export default transactionsRouter;
