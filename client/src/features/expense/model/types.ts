import type React from 'react';
import type { Dispatch } from 'react';

export type CreateExpenseDto = {
  name: string;
  amount: number;
  date: string;
};

export type AddExpenseFormProps = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export type ExpenseTableProps = {
  transactions: Transaction[];
};

export type Transaction = {
  id: number;
  amount: number;
  date: string;
};

export type UseExpensesParams = {
  currentPage: number;
  itemsPerPage: number;
};
