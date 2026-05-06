import useExpensesQuery from '@/features/expense/model/useExpensesQuery';
import Dropdown from '@/shared/ui/RowActions';
import Button from '@/shared/ui/Button';
import { useState } from 'react';
import Modal from '@/shared/ui/Modal';
import AddExpenseForm from '@/features/expense/ui/AddExpenseForm';
import ExpenseTable from '@/features/expense/ui/ExpenseTable';
const ExpensesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(5);

  const itemsPerPage = 3;

  const { data, isPending, error } = useExpensesQuery({
    itemsPerPage,
    currentPage,
  });
  const { data: dataTransactions, totalCount } = data ?? {};

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{`An error has occured:  + ${error.message}`}</div>;

  return (
    <div>
      <ExpenseTable transactions={dataTransactions} />
      <Button
        onClick={() => setIsOpen(true)}
        className={
          'w-full cursor-pointer pt-2 pb-2 bg-gray-300 hover:bg-gray-200 mt-2 border shadow-sm border-transparent rounded-sm '
        }
      >
        Add
      </Button>
      {isOpen && (
        <Modal title="Modal" isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <AddExpenseForm setIsOpen={setIsOpen} />
        </Modal>
      )}
    </div>
  );
};

export default ExpensesPage;
