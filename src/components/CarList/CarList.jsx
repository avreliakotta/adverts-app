import css from './car-list.module.css';
import CarItem from '../CarItem/CarItem';



const CarList = ({ filteredAdverts }) => {

  if (!filteredAdverts || filteredAdverts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className={css.list}>
        {filteredAdverts &&
          filteredAdverts.map((carData, index) => {
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
