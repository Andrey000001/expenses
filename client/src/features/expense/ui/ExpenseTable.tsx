import { format } from 'date-fns';

import type { ExpenseTableProps, Transaction } from '../model/types';
import { useCurrentUser } from '@/features/auth/model/useCurrentUser';

const ExpenseTable = ({ transactions }: ExpenseTableProps) => {
  const { name } = useCurrentUser();
  return (
    <div>
      <div className="rounded-lg border-collapse border-gray-200 shadow-sm p-5">
        <table className="min-w-full font-sans text-md text-left border-gray-500  divide-y divide-gray-300">
          <thead className="text-gray-500">
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col" className="py-4">
                To/From
              </th>
              <th scope="col" className="py-4">
                Amount
              </th>
              <th scope="col" className="py-4">
                Status
              </th>
              <th scope="col" className="py-4">
                Date
              </th>
              <th scope="col" className="py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions?.map(({ id, amount, date }: Transaction) => {
              const formattedDate = format(date, 'yyyy-MM-dd');

              return (
                <tr key={id}>
                  <td className="py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4">{name}</td>
                  <td className="py-4">{'$' + ' ' + amount}</td>
                  <td className="py-4">{'-'}</td>
                  <td className="py-4">{formattedDate}</td>
                  <td>{/* <Dropdown /> */}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
