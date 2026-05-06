import type { SupportCardProps } from '../model/types';
const SupportCard = ({ iconSupport, iconClose }: SupportCardProps) => {
  return (
    <div className="mt-auto  m-h-[15%] mb-2 rounded-sm bg-white p-2">
      <div className="flex justify-between mb-1">
        <div className="flex">
          {iconSupport}
          <h3 className="font-bold">Need Support?</h3>
        </div>
        {iconClose}
      </div>
      <p className="text-gray-500 font-medium mb-3">
        contact with one of our experts to get supports
      </p>
      <button className="w-full pt-2 pb-2 border-gray-500 border rounded-md text-black font-semibold cursor-pointer">
        Contact Us
      </button>
    </div>
  );
};

export default SupportCard;
