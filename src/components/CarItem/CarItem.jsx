import css from './car-item.module.css';
import sprite from '../../img/symbol-defs.svg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import CardModalList from '../CardModalList/CardModalList';
import { selectAdverts } from '../../redux/adverts/adverts-selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/favorites-slice';

import { selectFavorites } from '../../redux/favorites/favorites-selectors';

const CarItem = ({ carData, index}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const carDataList = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item.id === carData.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(carData));
    } else {
      dispatch(addToFavorites(carData));
    }
  };

  const openModal = index => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };
  const addressFromBackend = carData.address;
  const addressParts = addressFromBackend.split(',');
  if (addressParts.length < 3) {
    return <div>Loading...</div>;
  }
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  if (!carData || !carData.make || !carData.model) {
    return <div>Loading...</div>;
  }

  return (
    <li>
      <div className={css.imgWrapper}>
        <img
          className={css.carImage}
          src={carData.img}
          alt={`${carData.make} ${carData.model}`}
        />
        <button
          type="button"
          className={css.iconBtn}
          onClick={handleFavoriteToggle}
        >
          <svg className={css.heartIcon}>
            {isFavorite ? (
              <use href={`${sprite}#icon-Vector-1`}></use>
            ) : (
              <use href={`${sprite}#icon-heart-1`}></use>
            )}
          </svg>
        </button>
        <div className={css.contentWrapper}></div>
        <h2 className={css.titleCard}>
          {carData.make} <span className={css.model}>{carData.model}</span>,{' '}
          {carData.year}
        </h2>
        <p className={css.titleCard}>{`${carData.rentalPrice}`}</p>
      </div>
      <div className={css.addressWrapper}>
        <p className={css.text}>{`${city}`}</p>
        <p className={css.text}>{`${country}`}</p>
        <p className={css.text}>{`${carData.rentalCompany}`}</p>
      </div>
      <div className={css.infoWrapper}>
        <p className={css.text}>{`${carData.type}`}</p>
        <p className={css.text}>{`${carData.model}`}</p>
        <p className={css.text}>{`${carData.mileage}`}</p>
      </div>
      <button
        type="button"
        className={css.learnMoreBtn}
        onClick={() => {
          openModal(index);
        }}
        
      >
        Learn more
      </button>
      {activeIndex !== null && (
        <Modal index={activeIndex} close={closeModal}>
          <CardModalList carDataList={carDataList} parentIndex={activeIndex} />
        </Modal>
      )}
    </li>
  );
};
export default CarItem;
