// import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}
class CreateTransactionService {
  public async execute({title, type, value, category}:Request): Promise<Transaction> {
   
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      title, type, value
    });

    await transactionsRepository.save(transaction);

    return transaction;

  }
}

export default CreateTransactionService;
