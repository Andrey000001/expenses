import { useQuery } from '@tanstack/react-query';
import instance from '@/api/api';
import type { UseExpensesParams } from './types';

function useExpensesQuery({ currentPage, itemsPerPage }: UseExpensesParams) {
  return useQuery({
    queryKey: ['expenses', currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await instance.get('/expenses', {
        params: { page: currentPage, limit: itemsPerPage },
      });

      return data;
    },
  });
}
export default useExpensesQuery;
