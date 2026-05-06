import { GrTransaction } from 'react-icons/gr';
import { SiExpensify } from 'react-icons/si';
import { BiCategory } from 'react-icons/bi';

export const sidebarItems = [
  {
    to: '/',
    icon: <GrTransaction className="w-5 h-5" />,
    text: 'Dashboard',
  },
  {
    to: '/category',
    icon: <SiExpensify className="w-5 h-5" />,
    text: 'Category',
  },
  {
    to: '/expenses',
    icon: <BiCategory className="w-5 h-5" />,
    text: 'Expenses',
  },
];