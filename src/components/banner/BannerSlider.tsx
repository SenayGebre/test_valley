"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchBanners } from '@/services/banner_service';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "./Banner.css"
import { IBanner } from '@/types/banner.type';


const BannerSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [banners, setBanners] = useState<IBanner[]>();

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768; // You can adjust the breakpoint as needed
      setIsMobile(isMobileView);
    };
    const loadBanners = async () => {
      const data = await fetchBanners();
      setBanners(data);
    };

    loadBanners();

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Swiper 
        // height={isMobile ? 200 : 333}
        navigation={true}
        initialSlide={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 0 : 32}
        slidesPerView={isMobile ? 0 : 1.3}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >

        {banners?.map((banner: IBanner) => (
          <SwiperSlide
          
          key={banner.mainBannerId}>
            <img src={banner.pcImageUrl} alt={`${banner.title}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;


