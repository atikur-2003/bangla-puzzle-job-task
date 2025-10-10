import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const mockHotelsData = [
  {
    id: 1,
    name: "Room in Mill Hill",
    price: "$72 for 2 nights",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Room in London",
    price: "$44 for 2 nights",
    rating: 3.8,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Room in Tottenham",
    price: "$70 for 2 nights",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Room in Camberwell",
    price: "$70 for 2 nights",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1578898886225-c7c894047899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Room in Hackney",
    price: "$70 for 2 nights",
    rating: 3.9,
    image:
      "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Room in Camberwell",
    price: "$70 for 2 nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Room in Eltham",
    price: "$70 for 2 nights",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Room in Paddington",
    price: "$70 for 2 nights",
    rating: 3.7,
    image:
      "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
];

const LondonHotels = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="my-8 px-4 md:px-10">
      {/* Title + Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center ">
          <h2 className=" text-base md:text-xl font-semibold cursor-pointer">
            Stay in London
          </h2>
          <span className="mt-1 hidden md:block">
            <FaChevronRight />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="bg-gray-100 border border-gray-100 rounded-full p-2 flex items-center justify-center cursor-pointer"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            ref={nextRef}
            className="bg-gray-100 border border-gray-100 rounded-full p-2 flex items-center justify-center cursor-pointer"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        speed={600}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        style={{ touchAction: "pan-y", paddingBottom: 8 }}
      >
        {mockHotelsData.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className="transition overflow-hidden">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-3xl cursor-pointer"
                />
                <span className="absolute top-3 left-2 font-semibold text-xs bg-gray-200 px-2 py-1 w-[75px] md:w-[102px] rounded-2xl md:rounded-full">
                  Guest Favorite
                </span>
                <span className="absolute top-3 right-2 text-white">
                  <CiHeart size={30} />
                </span>
              </div>
              <div className="px-2 mt-1">
                <h3 className="text-base font-medium cursor-pointer">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 cursor-auto">
                  <p className="font-medium mt-1">{hotel.price}</p>
                  <p className="flex items-center gap-0.5 mt-1">
                    <span>
                      <FaStar className="mb-0.5" />
                    </span>{" "}
                    {hotel.rating}{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LondonHotels;
