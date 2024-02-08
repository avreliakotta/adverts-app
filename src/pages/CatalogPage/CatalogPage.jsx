import css from './catalog-page.module.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/adverts/adverts-operations';
import CarList from '../../components/CarList/CarList';
import { SelectCarBrand } from '../../components/Select/SelectCarBrand';
import { setBrand } from '../../redux/filter/filter-slise';
import { selectAutoBrand } from '../../redux/favorites/favorites-selectors';
const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectAutoBrand);
  const adverts = useSelector(state => state.adverts.item);

  // useEffect(() => {

  //   dispatch(fetchAll({ page: currentPage, limit: 12 }));
  // }, [dispatch,currentPage]);

  useEffect(() => {
    dispatch(fetchAll({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  const loadMoreAdverts = () => {
    const nextPage = currentPage + 1;
    dispatch(fetchAll({ page: nextPage, limit: 12 }));
    setCurrentPage(nextPage);
  };

  const handleBrandChange = event => {
    const brand = event.target.value;
    dispatch(setBrand(brand));
  };

  const handleSearch = () => {
    dispatch(setBrand(''));
  };
  const totalPage=adverts.length;
  const lastPage = totalPage/12 < currentPage;

  return (
    <div className={css.container}>
      <SelectCarBrand
        selectedBrand={selectedBrand}
        onChange={handleBrandChange}
        onSearch={handleSearch}
      />
      <CarList selectedBrand={selectedBrand} />
{!lastPage ?
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
