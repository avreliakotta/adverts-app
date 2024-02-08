import css from './car-list.module.css';
import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';

import { selectAdverts } from '../../redux/adverts/adverts-selectors';

const CarList = ({ selectedBrand }) => {
  const carDataList = useSelector(selectAdverts);
 
  
  if (!carDataList) {
    return <div>Loading...</div>;
  }
  

  return (
    <>
      <ul className={css.list}>
        {carDataList &&
          carDataList

            .filter(carData => !selectedBrand || carData.make === selectedBrand)
            .map((carData, index) => {
              return (
                <CarItem
                  key={`${carData.id}_${index}`}
                  carData={carData}
                  index={index}
                />
              );
            })}
      </ul>
    </>
  );
};
export default CarList;
