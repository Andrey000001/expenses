import { useMutation } from '@tanstack/react-query';
import instance from '@/api/api';
import type { CreateExpenseDto } from './types';
export function useAddExpense() {
  return useMutation({
    mutationFn: (newExpense: CreateExpenseDto) =>
      instance.post('/expenses', newExpense),
  });
}

export default useAddExpense;
