// external libs
import { Outlet } from 'react-router-dom';

// ICONS
import { IoNotificationsOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

import HeaderNav from '@/shared/ui/HeaderNav';
import Sidebar from '@/widgets/sidebar/ui/Sidebar';
import SidebarNavItem from '@/widgets/sidebar/ui/SidebarNavList';
import { sidebarItems } from '@/widgets/config/sidebarItems';
import { useCurrentUser } from '@/features/auth/model/useCurrentUser';

const MainLayout = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return null;
  const { name } = currentUser;

  return (
    <div className="flex h-screen ">
      <Sidebar/>
      
      <main className="flex-1 h-screen overflow-hidden pl-2 pr-2 pt-5">
        <HeaderNav
          title={'Your Financial Dashboard'}
          desc={`Welcome back ,${name}`}
          actions={
            <>
              <CiSearch className="w-8 h-8" />
              <IoNotificationsOutline className="w-8 h-8" />
            </>
          }
          textButton={'Exchange Rate'}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
