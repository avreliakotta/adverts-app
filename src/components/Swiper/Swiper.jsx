import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const SwiperComponent = ({adverts}) => {
 

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
    >
      {adverts.slice(0, 8).map((advert, index) => (
        <SwiperSlide key={index}>
          <img
            src={advert.img}
            alt={`Advert ${index}`}
            style={{ width: '380px', height: '260px', borderRadius: '14px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
