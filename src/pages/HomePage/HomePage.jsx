import SwiperComponent from '../../components/Swiper/Swiper';
import css from './home-page.module.css';


const HomePage = () => {
  return(
  <div className={css.container}>
     <h1 className={css.mainTitle}>Welcome to our website</h1>
     <p className={css.text}>We offer car renting for reasonable prices. We have a wide range of cars, so you will defenately find something for you</p>
    <SwiperComponent/>
  </div>
  ) 
};
export default HomePage;
