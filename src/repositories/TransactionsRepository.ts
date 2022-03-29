import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  // public async getBalance(): Promise<Balance> {
    
  //   const transaction = this.find();
  //   const { income, outcome } = (await transaction).reduce((accumulator:Balance, transaction:Transaction) => {
  //     switch (transaction.type){
  //       case 'income':
  //         transaction.value += accumulator.income;
  //         break;
  //       case 'outcome':
  //         transaction.value += accumulator.outcome;
  //         break;
  //       default:
  //         break;
  //     }
  //     return accumulator;
  //   }, {
  //     income: 0,
  //     outcome: 0,
  //     total: 0
  //   });
  //   return { income, outcome, total: income - outcome}
  // }
}

export default TransactionsRepository;
