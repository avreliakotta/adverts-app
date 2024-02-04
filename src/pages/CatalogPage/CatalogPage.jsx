import css from './catalog-page.module.css';
import { useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAll, loadMore } from '../../redux/adverts/adverts-operations';
import CarList from '../../components/CarList/CarList';
import { SelectCarBrand } from '../../components/Select/SelectCarBrand';
import { setBrand } from '../../redux/filter/filter-slise';
import { selectAutoBrand } from '../../redux/favorites/favorites-selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectAutoBrand);
  const adverts = useSelector(state => state.adverts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const loadMoreAdverts = () => {
    dispatch(loadMore());
  };

  const handleBrandChange = event => {
    const brand = event.target.value;
    dispatch(setBrand(brand));
  };

  return (
    <div className={css.container}>
      <SelectCarBrand
        selectedBrand={selectedBrand}
        onChange={handleBrandChange}
      />
      <CarList selectedBrand={selectedBrand} />
      {adverts.loading ? (
        <p>Loading...</p>
      ) : (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={loadMoreAdverts}
          disabled={adverts.loading}
        >
          Load more
        </button>
      )}
    </div>
  );
};
export default CatalogPage;
