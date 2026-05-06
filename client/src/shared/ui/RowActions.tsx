import { useEffect, useRef, useState } from 'react';
import { RiMenuAddFill } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

const RowActions = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <RiMenuAddFill />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute border border-gray-300 rounded-md h-8  flex items-center justify"
        >
          <button role="menuitem" className="hover:bg-gray-300 h-full p-1">
            <CiEdit size={25} className="cursor-pointer" />
          </button>
          <button role="menuitem" className="hover:bg-gray-300 h-full p-1">
            {<MdDeleteForever size={25} className="cursor-pointer " />}
          </button>
        </div>
      )}
    </div>
  );
};

export default RowActions;
