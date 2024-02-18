import css from './catalog-page.module.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/adverts/adverts-operations';
import CarList from '../../components/CarList/CarList';
import { SelectCarBrand } from '../../components/Select/FilterCarBrand/FilterCarBrand';
import { selectVisibleAdverts} from "../../redux/adverts/adverts-selectors";



const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const dispatch = useDispatch();
  const filteredAdverts = useSelector( selectVisibleAdverts);

  const adverts = useSelector(state => state.adverts.item);

 

  useEffect(() => {
    dispatch(fetchAll({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  const loadMoreAdverts = () => {
    const nextPage = currentPage + 1;
    dispatch(fetchAll({ page: nextPage, limit: 12 }));
    setCurrentPage(nextPage);
  };


  
  const totalPage=adverts.length;
  const lastPage = totalPage/12 < currentPage;

  return (
    <div className={css.container}>
      <SelectCarBrand
        />
    
      <CarList  filteredAdverts={filteredAdverts}/>
      {filteredAdverts.length === 0 && (
        <div className={css.message}>There are no adverts for your request.Try setting other search parameters</div>
      )}
{!lastPage && filteredAdverts.length > 0 ?
      (<button
        type="button"
        className={css.loadMoreBtn}
        onClick={loadMoreAdverts}
        disabled={adverts.loading}
      >
        Load more
      </button>)
      : ""}
    </div>
  );
};

export default CatalogPage;
