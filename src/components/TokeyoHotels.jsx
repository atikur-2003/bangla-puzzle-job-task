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
    name: "Hotel room in Taitō-ku",
    price: "$72 for 2 nights",
    rating: 4.3,
    image:
      "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Guesthouse in Itabashi-ku",
    price: "$44 for 2 nights",
    rating: 3.8,
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Hotel room in Taitō-ku",
    price: "$70 for 2 nights",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Apartment in Suginami-ku",
    price: "$70 for 2 nights",
    rating: 4.1,
    image:
      "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Hostel in Toshima-k",
    price: "$70 for 2 nights",
    rating: 3.9,
    image:
      "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Room in Setagaya-ku",
    price: "$70 for 2 nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Aparthotel in Kita",
    price: "$70 for 2 nights",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Room in Sumida-ku",
    price: "$70 for 2 nights",
    rating: 3.7,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const TokeyoHotels = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className=" px-4 md:px-10">
      {/* Title + Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center ">
          <h2 className=" text-base md:text-xl font-semibold cursor-pointer">
            Available next month in Tokyo
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

export default TokeyoHotels;
