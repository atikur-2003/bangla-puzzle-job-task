import { FiSearch } from "react-icons/fi";
import homeIcon from "../../assets/home-icon.png";
import airBallon from "../../assets/hot-air-balloon.png";
import deskBell from "../../assets/desk-bell.png";
import { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 z-50 shadow-sm px-4 py-5 font-semibold">
      <div className="bg-white border border-gray-300 rounded-full  px-5 py-2 flex gap-2 items-center justify-center">
        <FiSearch />
        <p>Start your search</p>
      </div>
      <div className="mt-5">
        <ul className={`flex items-center justify-center ${scrolled ? "gap-7" : "gap-5"} md:gap-14`}>
          <li className="flex items-center gap-1 cursor-pointer border-b-2 pb-2 text-[#0a0a0a] font-semibold mt-2 ">
            <img
              src={homeIcon}
              alt=""
              className={`w-6 md:w-8 ${scrolled ? "hidden" : "block"}`}
            />
            <p className={`md:text-sm ${scrolled ? "text-sm" : "text-xs"}`}>Homes</p>
          </li>
          <li className="relative flex items-center gap-1 cursor-pointer text-gray-600 text-xs md:text-sm">
            <div className={`${scrolled ? "hidden" : "block"}`}>
              <img src={airBallon} alt="" className="w-6 md:w-8" />
              <span className="absolute -top-4 left-9 bg-[#304262] p-1 text-white rounded-tl-xl rounded-r-xl text-[8px] font-semibold px-2 py-0.5">
                New
              </span>
            </div>
            <p className={`md:text-sm ${scrolled ? "text-sm" : "text-xs"}`}>Experiences</p>
          </li>
          <li className="relative flex items-center gap-1 cursor-pointer text-gray-600 text-xs md:text-sm">
            <div className={`${scrolled ? "hidden" : "block"}`}>
              <img src={deskBell} alt="" className={`w-6 md:w-8`} />
              <span className="absolute -top-4 left-9 bg-[#304262] p-1 text-white rounded-tl-xl rounded-r-xl text-[8px] font-semibold px-2 py-0.5">
                New
              </span>
            </div>
            <p className={`md:text-sm ${scrolled ? "text-sm" : "text-xs"}`}>Services</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MobileNavbar;
