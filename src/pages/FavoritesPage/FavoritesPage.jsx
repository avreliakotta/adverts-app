import { useSelector } from 'react-redux';
import css from './favorites-page.module.css';
import { useState } from 'react';
import { selectFavorites } from '../../redux/favorites/favorites-selectors';
import Modal from "../../components/Modal/Modal";
import { selectAdverts } from '../../redux/adverts/adverts-selectors';
import CarItem from '../../components/CarItem/CarItem';
import CardModalList from "../../components/CardModalList/CardModalList";
const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const carDataList=useSelector(selectAdverts);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Favorite Cars</h1>
      <ul className={css.favoriteList}>
        {favorites.map((favorite,index) => (
          <CarItem key={favorite.id} carData={favorite} index={index} onClick={() => openModal(index)}/>
        
        ))}
      </ul>
      {activeIndex !== null && (
        <Modal close={closeModal}>
           <CardModalList carDataList={carDataList} parentIndex={activeIndex} />
          
        </Modal>
        
      )}
    </div>
  );
};
export default FavoritesPage;
