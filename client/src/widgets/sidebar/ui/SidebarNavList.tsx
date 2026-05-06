import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '@/widgets/sidebar/model/SidebarContext';

import type { SidebarNavListProps } from '@/widgets/sidebar/model/types';
import type { SidebarNavItem } from '@/widgets/sidebar/model/types';

const SidebarNavList = ({ items }: SidebarNavListProps) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <div>
      {items?.map(({ to, icon, text }: SidebarNavItem) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex mb-5  ${expanded ? 'gap-2 pl-3 pt-2 pb-2' : 'items-center justify-center w-[40px] h-[40px]  '} rounded-sm  ${isActive ? 'bg-white text-black' : 'text-gray-500'}`
          }
        >
          {icon}
          {expanded && <span className="font-semibold">{text}</span>}
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarNavList;
