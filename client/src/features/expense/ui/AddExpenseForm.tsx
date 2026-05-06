import React, { useState } from 'react';
import Button from '@/shared/ui/Button';
import useAddExpense from '../model/useAddExpense';
import type { AddExpenseFormProps } from '../model/types';
const AddExpenseForm = ({ setIsOpen }: AddExpenseFormProps) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const addMutation = useAddExpense();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = new Date(date).toISOString();

    addMutation.mutate({ name, amount: Number(amount), date: formattedDate });

    setName('');
    setAmount('');
    setDate('');
    setIsOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-7 flex-col h-full justify-center"
    >
      <label className="text-md font-extrabold ">
        Name
        <input
          type="text"
          className="pl-4 border w-full rounded h-10 "
          name="name"
          value={name}
          placeholder="Product"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="text-md font-extrabold ">
        Amount
        <input
          type="number"
          className="pl-4 border w-full rounded h-10 "
          name="amount"
          value={amount}
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label className="text-md font-extrabold ">
        Date
        <input
          type="date"
          className="pl-4 border w-full rounded h-10 "
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <Button
        type="submit"
        className="w-full p-2 hover:bg-gray-400 font-extrabold bg-gray-300 border rounded-sm"
      >
        Send
      </Button>
    </form>
  );
};

export default AddExpenseForm;
