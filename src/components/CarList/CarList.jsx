import css from './car-list.module.css';
import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';

import { selectAdverts } from '../../redux/adverts/adverts-selectors';

const CarList = ({ filteredAdverts }) => {
  const carDataList = useSelector(selectAdverts);

  if (!carDataList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className={css.list}>
        {filteredAdverts &&
          filteredAdverts

            // .filter(carData => !brand || carData.make === brand)

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
