import React, { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";

const SlideCard = ({computer$office}) => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const [isright, setIsright] = useState(false)
      
  return (
    <div className="flex justify-center items-center relative">
        <button
          style={{display: isright ? "block" : "none"}}
          ref={prevRef}
          className="absolute left-12 z-50 cursor-pointer text-2xl  bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] flex justify-center items-center"
        >
          <IoChevronBackOutline />
        </button>
      <Swiper
        // breakpoints={{
        //   375: {
        //     slidesPerView: 2,
        //     // spaceBetween: 5,
        //   },
        //   414: {
        //     slidesPerView: 2,
        //     // spaceBetween: 5,
        //   },
        //   640: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: 1,
        //   },
        //   1025: {
        //     slidesPerView: 2,
        //   },
        // }}
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
        className="w-full"
      >
        <SwiperSlide className="w-fit">
          <div className="w-full flex items-center justify-center gap-4">
          <Card computer$office={computer$office}/>
          <Card computer$office={computer$office}/>
          </div>
        </SwiperSlide>        
        <SwiperSlide className="">
          <div className="w-full flex items-center justify-center gap-4">
          <Card computer$office={computer$office}/>
          <Card computer$office={computer$office}/>
          </div>
        </SwiperSlide>        
      </Swiper>
        <button
          onClick={()=>setIsright(true)}
          ref={nextRef}
          className="absolute right-12 z-50 cursor-pointer text-2xl  bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] flex justify- items-center  p-0 m-0 "
        >
          <IoChevronForward />
        </button>
    </div>
  );
};

export default SlideCard;
