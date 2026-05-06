import { useState } from 'react';
//ICONS
import { IoLogoOctocat } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

import SupportCard from '@/widgets/sidebar/ui/SupportCard';
import { useCurrentUser } from '@/features/auth/model/useCurrentUser';
import useLogout from '@/features/auth/model/useLogout';
import LogoutButton from '@/features/auth/ui/LogoutButton';
import { SidebarContext } from '@/widgets/sidebar/model/SidebarContext';
import SidebarNavList from './SidebarNavList';
import { sidebarItems } from '@/widgets/config/sidebarItems';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const onLogout = useLogout();

  const { email, name } = useCurrentUser();

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <aside className={`h-screen ${!expanded && 'flex'}`}>
        <nav
          className={`h-full flex flex-col items-center bg-black border-r shadow-sm pt-7 pb-7 pr-4 pl-4 max-w-2xs `}
        >
          <div
            className={` mb-10 ${expanded && 'flex w-full justify-between'}`}
          >
            <IoLogoOctocat
              className={`overflow-hidden text-sky-50   ${!expanded ? 'w-0' : 'w-10 h-10'}`}
            />
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className={`flex items-center justify-center rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100  w-[40px] h-[40px]`}
            >
              {expanded ? (
                <IoIosArrowBack className="w-6.25 h-6.25" />
              ) : (
                <IoIosArrowForward className="w-6.25 h-6.25" />
              )}
            </button>
          </div>
          <h4 className="text-gray-500 font-medium mb-2">MAIN</h4>

          <ul
            className={`w-full flex flex-col ${!expanded && ' items-center'}`}
          >
            <SidebarNavList items={sidebarItems} />
          </ul>
          <h4 className="text-gray-500 mb-3">OTHER</h4>

          {expanded && (
            <SupportCard
              iconSupport={<BiSupport className="w-6 h-6 mr-2 " />}
              iconClose={<IoMdClose className="w-5 h-5 cursor-pointer" />}
            />
          )}
          <div
            className={`border-t  pt-2  border-cyan-50  ${expanded ? 'flex pt-4' : 'mt-auto'}`}
          >
            <FaCircleUser className={`w-10 h-10 text-amber-50 `} />
            <div className={` ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
              {expanded && (
                <div className="flex justify-between items-center">
                  <div className="leading-4">
                    <h4 className="font-semibold  text-white">{name}</h4>
                    <span className="text-sm  text-gray-500">{email}</span>
                  </div>
                  <LogoutButton onLogout={onLogout} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
