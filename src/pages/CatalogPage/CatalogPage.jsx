import css from './catalog-page.module.css';
import { useEffect, useState } from 'react';
import {
  selectAdverts,
  selectIsLoading,
} from '../../redux/adverts/adverts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/adverts/adverts-operations';
import CarList from '../../components/CarList/CarList';
import { SelectCarBrand } from '../../components/Select/FilterCarBrand/FilterCarBrand';
import { selectVisibleAdverts } from '../../redux/adverts/adverts-selectors';

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const filteredAdverts = useSelector(selectVisibleAdverts);

  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    console.log('Current page set to 1');
    console.log(currentPage);
    dispatch(fetchAll({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);
  useEffect(() => {
    setCurrentPage(1); 
  }, []);

  const loadMoreAdverts = () => {
    const nextPage = currentPage + 1;
    dispatch(fetchAll({ currentPage: nextPage, limit: 12 }));
    setCurrentPage(nextPage);
  };

  const totalPages = adverts.length;
  // const lastPage = totalPages / 12 < currentPage;
  const lastPage = totalPages < 12 || totalPages / 12 < currentPage;
  console.log("lastPage",lastPage)
  const showLoadMoreButton =
    !lastPage && !loading && filteredAdverts.length > 0;

  return (
    <div className={css.container}>
      <SelectCarBrand />

      <CarList filteredAdverts={filteredAdverts} />
      {filteredAdverts.length === 0 && (
        <div className={css.message}>
          There are no adverts for your request.Try setting other search
          parameters
        </div>
      )}
      {showLoadMoreButton && (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={loadMoreAdverts}
          disabled={loading}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
