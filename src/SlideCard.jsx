import React, { useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";

const SlideCard = ({computer$office}) => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    
   
      
  return (
    <div className="flex justify-center items-center gap-1">
      <div>
        <button
          ref={prevRef}
          className=" cursor-pointer text-2xl  bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] flex justify-center items-center "
        >
          <IoChevronBackOutline />
        </button>
      </div>

      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
            // spaceBetween: 5,
          },
          414: {
            slidesPerView: 2,
            // spaceBetween: 5,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1025: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="grid grid-cols-2">
          <Card computer$office={computer$office}/>
        </SwiperSlide>
        {/* <SwiperSlide className="grid grid-cols-2">
          <Card computer$office={computer$office}/>
        </SwiperSlide> */}
       
        
      </Swiper>
      <div>
        <button
          ref={nextRef}
          className="cursor-pointer text-2xl  bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] flex justify- items-center  p-0 m-0 "
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default SlideCard;
