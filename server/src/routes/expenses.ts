import { Router } from "express";
import { middleAuth } from "../middleware/auth";
import { addTransaction, deleteTransaction, getAllTransactions, updateTransaction } from "../controllers/expenses";

const expensesRouter = Router()


expensesRouter.get('/',middleAuth ,getAllTransactions)
expensesRouter.post('/',middleAuth ,addTransaction)
expensesRouter.patch('/:id',middleAuth ,updateTransaction)
expensesRouter.delete('/:id',middleAuth ,deleteTransaction)

export default expensesRouter