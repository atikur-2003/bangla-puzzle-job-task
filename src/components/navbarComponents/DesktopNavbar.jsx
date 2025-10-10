import { useState, useEffect } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import logo from "../../assets/Airbnb_Logo.png";
import homeIcon from "../../assets/home-icon.png";
import airBallon from "../../assets/hot-air-balloon.png";
import deskBell from "../../assets/desk-bell.png";

const DesktopNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 px-3 bg-gray-100 border-b border-gray-300 transition-all duration-300 ${
        scrolled ? "shadow-md py-6" : "py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Airbnb"
          className={`w-28 cursor-pointer ${
            scrolled ? "opacity-90" : "opacity-100"
          }`}
        />

        {/* Menu Bar */}
        <div className={`${scrolled ? "hidden" : "block"}`}>
          <ul className="flex items-center gap-5">
            <li className="flex items-center gap-2 cursor-pointer border-b-2 pb-2 text-[#0a0a0a] font-semibold mt-1">
              <img src={homeIcon} alt="" className="w-8" />
              Homes
            </li>
            <li className="relative flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black">
              <div className="hover:scale-125 duration-300 transition">
                <img src={airBallon} alt="" className="w-8 " />
                <span className="absolute -top-4 left-9 bg-[#304262] p-1 text-white rounded-tl-xl rounded-r-xl text-[10px] font-semibold px-2 py-0.5">
                  New
                </span>
              </div>
              Experiences
            </li>
            <li className="relative flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black">
              <div className="hover:scale-125 duration-300 transition">
                <img src={deskBell} alt="" className="w-8 " />
                <span className="absolute -top-4 left-9 bg-[#304262] p-1 text-white rounded-tl-xl rounded-r-xl text-[10px] font-semibold px-2 py-0.5">
                  New
                </span>
              </div>
              Services
            </li>
          </ul>
        </div>
        {/* Secondary nav (only visible when scrolled) */}
        {scrolled && (
          <div
            className={`flex items-center py-3 bg-white border border-gray-300 shadow-lg rounded-full text-sm text-black`}
          >
            <div className="border-r px-4 border-gray-200 cursor-pointer">
              <p className="font-medium">Anywhere</p>
            </div>
            <div
              className="border-r px-4
             border-gray-200 cursor-pointer"
            >
              <p className="font-medium">Anytime</p>
            </div>
            <div className="cursor-pointer px-4 flex gap-6 items-center justify-between">
              <p className="font-medium">Add guests</p>
              <div>
                <IoSearch
                  size={35}
                  className="text-white p-3 bg-red-500 rounded-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Right Menu */}
        <div className="hidden lg:flex items-center gap-3">
          <p className="text-sm font-semibold cursor-pointer hover:bg-gray-200/70 px-3 py-2 rounded-full">
            Become a host
          </p>
          <FiGlobe
            size={35}
            className="bg-gray-200/70 rounded-full p-2 cursor-pointer hover:bg-gray-300/70 transition duration-300"
          />
          <div className="bg-gray-200/70 rounded-full p-2 cursor-pointer hover:bg-gray-300/70 transition duration-300">
            <IoMenu size={20} />
          </div>
        </div>
      </nav>

      {/* search menu */}
      <div
        className={`flex items-center bg-white border border-gray-300 shadow-lg rounded-full max-w-4xl mx-auto my-6 text-sm text-black ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="w-2/6 border-r border-gray-200 px-5 py-4 hover:bg-gray-200 cursor-pointer hover:rounded-full">
          <p className="font-medium">Where</p>
          <p className="text-gray-500">Search Destination</p>
        </div>
        <div className="w-1/6 border-r border-gray-200  px-5 py-4 hover:bg-gray-200 cursor-pointer hover:rounded-full">
          <p className="font-medium">Check in</p>
          <p className="text-gray-500">Add dates</p>
        </div>
        <div className="w-1/6 border-r border-gray-200 cursor-pointer  px-5 py-4 hover:bg-gray-200 hover:rounded-full">
          <p className="font-medium">Check out</p>
          <p className="text-gray-500 text-sm">Add dates</p>
        </div>
        <div className="w-2/6 pl-5 pr-2 py-4 cursor-pointer hover:bg-gray-200 hover:rounded-full flex items-center justify-between">
          <div>
            <p className="font-medium">Who</p>
            <p className="text-gray-500 text-sm">Add guests</p>
          </div>
          <div>
            <IoSearch
              size={40}
              className="text-white p-3 bg-red-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;