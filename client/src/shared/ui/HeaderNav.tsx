import type { HeaderProps } from '../model/types';
const HeaderNav = ({ title, desc, actions, textButton }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between pb-4">
      <div>
        <h2 className="text-black font-bold text-2xl">{title}</h2>
        <p className="text-gray-500 font-medium">{desc}</p>
      </div>
      <div className="flex gap-4 items-center">
        {actions}
        <button className="w-50 h-12.5 rounded-sm border-gray-500 border cursor-pointer">
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
