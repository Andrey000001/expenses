import { useState } from 'react';
// ICONS
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';

const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoEllipsisVerticalSharp className="text-white " />
      </button>
      {open && (
        <div>
          <button
            className="absolute
          top-1/2 -translate-y-1/2
          right-5 -translate-x-1/2 "
          >
            <CiLogout
              onClick={onLogout}
              className="text-white cursor-pointer hover:text-gray-500"
              size={20}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
