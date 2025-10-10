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
    name: "Apartment in Bukit Bintang",
    price: "$72 for 2 nights",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "Place to stay in Cheras",
    price: "$44 for 2 nights",
    rating: 3.8,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Apartment in Bukit Bintang",
    price: "$70 for 2 nights",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Apartment in Bukit Bintang",
    price: "$70 for 2 nights",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Condo in PULAPOL",
    price: "$70 for 2 nights",
    rating: 3.9,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Apartment in Bukit Bintang",
    price: "$70 for 2 nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Condo in PULAPOL",
    price: "$70 for 2 nights",
    rating: 4.0,
    image:
      "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Place to stay in Cheras",
    price: "$70 for 2 nights",
    rating: 3.7,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=60",
  },
];

const KualalampurHotels = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mt-30 md:mt-52 px-4 md:px-10 py-8">
      {/* Title + Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center ">
          <h2 className=" text-base md:text-xl font-semibold cursor-pointer">
            Popular Homes in Kuala Lampur{" "}
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
              <span className="absolute top-3 left-2 font-semibold text-xs bg-gray-200 px-2 py-1 w-[75px] md:w-[102px] rounded-2xl md:rounded-full">Guest Favorite</span>
              <span className="absolute top-3 right-2 text-white"><CiHeart size={30}/></span>
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

export default KualalampurHotels;
