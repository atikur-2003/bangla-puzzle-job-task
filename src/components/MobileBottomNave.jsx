import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const MobileBottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-gray-300 bg-white shadow-md  flex justify-center gap-2 md:gap-10 items-center py-2 md:flex lg:hidden z-50">
      <div className="flex gap-1 items-center text-pink-600">
        <IoSearchOutline size={25} />
        <span className="text-xs font-medium">Explore</span>
      </div>
      <div className="flex gap-1 items-center text-gray-700">
        <FaRegHeart size={20} />
        <span className="text-xs font-medium">Wishlists</span>
      </div>
      <div className="flex gap-1 items-center text-gray-700">
        <FaRegCircleUser size={20}/>
        <span className="text-xs font-medium">Log in</span>
      </div>
    </div>
  );
};

export default MobileBottomNav;
