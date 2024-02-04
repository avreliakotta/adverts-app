import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector,useDispatch } from 'react-redux';
import {  useEffect} from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {fetchAll} from "../../redux/adverts/adverts-operations";


import { selectAdverts } from '../../redux/adverts/adverts-selectors';
const SwiperComponent = () => {
    const dispatch = useDispatch();
    const adverts = useSelector(selectAdverts);
  
    useEffect(() => {
      
      dispatch(fetchAll());
    }, [dispatch]);
  
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
//

// const SwiperComponent = () => {
//   const adverts = useSelector(selectAdverts);
 

//   return (
//     <>
//       <Swiper
//         modules={[Autoplay]}
//         direction="horizontal"
//         spaceBetween={10}
//         slidesPerView={3}
//         autoplay={{ delay: 2000 }}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={swiper => console.log(swiper)}
//         className="swiper-container"
//       >
//         {adverts.slice(0, 8).map((advert, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={advert.img}
//               alt={`Advert ${index}`}
//               style={{ width: '380px', height: '260px', borderRadius: '14px' }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default SwiperComponent;
