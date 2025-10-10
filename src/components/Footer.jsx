import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-5 md:px-9 py-12">
      {/* footer top */}
      <div>
        <div className="border-b-1 border-gray-300 mb-4">
          <h1 className="text-2xl font-medium mb-5">
            Inspiration for future getaways
          </h1>
          <div className="flex gap-4 md:gap-7">
            <p className="font-medium border-b-2 pb-2">
              Travel tips and inspirations
            </p>
            <p className="text-gray-600">Airbnb-friendly apartments</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Family travel hub</h3>
            <p className=" text-sm">Tips and inspiration</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Family budget travel</h3>
            <p className=" text-sm">Get there for less</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Vacation ideas for any budget</h3>
            <p className=" text-sm">Make it special without making it spendy</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Travel Europe on a budget</h3>
            <p className=" text-sm">How to take the kids to Europe for less</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Outdoor adventure</h3>
            <p className=" text-sm">Explore nature with the family</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Bucket list national parks</h3>
            <p className=" text-sm">Must-see parks for family travel</p>
          </div>
          <div className="cursor-pointer text-gray-600 hover:text-black ">
            <h3 className="text-black">Kid-friendly state parks</h3>
            <p className=" text-sm">Check out these family-friendly hikes</p>
          </div>
        </div>
      </div>

      {/* footer middle links */}
      <div className="mt-10 flex flex-col md:flex-row gap-7 justify-between border-b border-gray-300 pb-8">
        <div className="border-b border-gray-300 md:border-none pb-7 md:pb-0">
          <h3 className="mb-2 text-lg">Support</h3>
          <ul className="space-y-3">
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Help Center
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Get help with a safety issue
            </li>
            <li className="text-gray-600 cursor-pointer hover:underline">
              AirCover
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Anti-discrimination
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Disability support
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Cancellation options
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Report neighborhood concern
            </li>
          </ul>
        </div>
        <div className="border-b border-gray-300 md:border-none pb-7 md:pb-0">
          <h3 className="mb-2 text-lg">Hosting</h3>
          <ul className="space-y-3">
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Airbnb your home
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Airbnb your experience
            </li>
            <li className="text-gray-600 cursor-pointer hover:underline">
              Airbnb your service
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              AirCover for Hosts
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Hosting resources
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Community forum
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Hosting responsibly
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Airbnb-friendly apartments
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Join a free Hosting class
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Find a co‑host
            </li>
          </ul>
        </div>
        <div className="border-b border-gray-300 md:border-none pb-7 md:pb-0">
          <h3 className="mb-2 text-lg">Airbnb</h3>
          <ul className="space-y-3">
            <li className=" text-gray-600 cursor-pointer hover:underline">
              2025 Summer Release
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Newsroom
            </li>
            <li className="text-gray-600 cursor-pointer hover:underline">
              Careers
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Investors
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Gift cards
            </li>
            <li className=" text-gray-600 cursor-pointer hover:underline">
              Airbnb.org emergency stays
            </li>
           
          </ul>
        </div>
        
      </div>

      {/* footer bottom */}
        <div className="mt-8 pb-10 lg:pb-0 flex gap-5 flex-col-reverse lg:flex-row justify-between">
            <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                <div className=" ">&copy; 2025 Airbnb,inc.</div>
                <div className="space-x-2">
                    <a href='#' className="hover:underline">Terms . </a>
                    <a href='#' className="hover:underline">Sitemap . </a>
                    <a href='#' className="hover:underline">Privacy . </a>
                </div>
                <div>
                    <p className="hover:underline cursor-pointer flex items-center gap-2 text-gray-500">Your Privacy Choices <span className="flex items-center  border border-blue-500 rounded-full"><TiTick className="text-blue-500 px-0.5"/><RxCross2 className="bg-blue-500 text-white rounded-r-full px-0.5"/></span></p>
                </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row items-start md:items-center justify-start md:justify-between ">
                <div className="flex gap-3 font-medium">
                    <p className="flex items-center gap-1 cursor-pointer"><GoGlobe/> English(US)</p>
                    <p className="flex items-center gap-1 cursor-pointer"><BsCurrencyDollar/> USD</p>
                </div>
                <div className="flex gap-4">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
