import{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import SwiperComponent from '../../components/Swiper/Swiper';
import css from './home-page.module.css';
import {selectAdverts} from "../../redux/adverts/adverts-selectors";
import { fetchAll } from '../../redux/adverts/adverts-operations';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const adverts = useSelector(selectAdverts); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll({page:1, limit: 12} ));
    setLoading(false);
    }
  , [dispatch,adverts]);
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Welcome to our website</h1>
      <p className={css.text}>
        We offer car renting for reasonable prices. We have a wide range of
        cars, so you will defenately find something for you
      </p>

      {!loading && <SwiperComponent adverts={adverts} />}
    </div>
  );
};
export default HomePage;
