import css from './select-car-brand.module.css';
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { setBrand } from '../../redux/filter/filter-slise';
import sprite from '../../img/symbol-defs.svg';
import SelectRentalPrice from './SelectRentalPrice/SelectRentalPrice';
import RangeInput from '../RangeInput/RangeInput';
const carBrandOptions = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const SelectCarBrand = ({ selectedBrand, onChange, onReset }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [searchText,setSearchText] = useState('');

  const handleSearchClick = () => {
    dispatch(setBrand(searchText));
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <label htmlFor="Brand" className={css.selectLabel}>
          Car brand
        </label>

        <div className={css.iconWrapper}>
          <select
            name="brand"
            id="brand"
            value={selectedBrand}
            onChange={onChange}
            className={css.select}
          >
            <option value="" disabled hidden className={css.defaultOption}>
              Enter the text
            </option>
            {carBrandOptions.map((brand, index) => (
              <option className={css.brandOption} key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <svg className={css.selectIcon}>
            <use href={`${sprite}#icon-chevron-down-1`}></use>
          </svg>
        </div>
      </div>
      <SelectRentalPrice />
      <RangeInput />
      <button
        type="button"
        className={css.searchBtn}
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};
