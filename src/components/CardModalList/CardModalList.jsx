
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/adverts-selectors';
import CardModal from '../CardModal/CardModal';
const CardModalList = ({ carData, parentIndex }) => {
  const carDataList = useSelector(selectAdverts);
 
  const currentCarData = carDataList[parentIndex];
 
  if (!currentCarData) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <CardModal
        key={`${currentCarData.id}_${parentIndex}`}
        carData={currentCarData}
      />
    </ul>
  );
};
export default CardModalList;
