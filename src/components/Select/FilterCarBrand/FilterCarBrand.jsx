import css from './filter-car-brand.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../redux/filter/filter-slise';
import sprite from '../../../img/symbol-defs.svg';

import { carBrandOptions } from './carBrandOptions';
import { selectAutoFilters } from '../../../redux/favorites/favorites-selectors';

import { makePriceOptions } from './priceOptions';

export const SelectCarBrand = () => {
  const dispatch = useDispatch();
  const {
    brand: existBrand,
    price: existPrice,
    mileageFrom: existFrom,
    mileageTo: existTo,
  } = useSelector(selectAutoFilters);

  const [brand, setBrand] = useState(existBrand || '');
  const [price, setPrice] = useState(existPrice || '');
  const [mileageFrom, setMileageFrom] = useState(existFrom || '');
  const [mileageTo, setMileageTo] = useState(existTo || '');

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const priceOptions = makePriceOptions();

  const handleSearchClick = () => {
    dispatch(setFilters({ brand, price, mileageFrom, mileageTo }));
  };
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }
  };
  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'brand':
        setBrand(value);
        break;

      case 'price':
        setPrice(value.toString());
        break;

      case 'mileageFrom':
        mileageTo !== '' && Number(mileageTo) <= value
          ? handleWrongValue(mileageTo, 'mileageFrom')
          : setMileageFrom(value.toString());
        break;

      case 'mileageTo':
        setMileageTo(value.toString());
        break;
        default:  console.log("Looks like you use inputs wrong'")
    }
  };

  const handleResetClick = () => {
    setBrand('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');
    dispatch(
      setFilters({ brand: '', price: null, mileageFrom: null, mileageTo: null })
    );
  };

  const handleBrandOptionClick = event => {
    if (event.target.nodeName !== 'LI') return;
    const value = event.target.textContent;
    setBrand(value);
    setIsBrandOpen(false);
  };
  const handlePriceOptionClick = event => {
    if (event.target.nodeName !== 'LI') return;
    const value = event.target.textContent;
    setPrice(value);
    setIsPriceOpen(false);
  };
  const handleBlur = () => {
    mileageFrom !== '' &&
      Number(mileageFrom) > mileageTo &&
      handleWrongValue(mileageFrom);
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <label htmlFor="Brand" className={css.selectLabel}>
          Car brand
        </label>

        <div className={css.iconWrapper}>
          <input
            type="text"
            value={brand}
            name="brand"
            onChange={handleChange}
            onFocus={() => setIsBrandOpen(true)}
            onBlur={() => setIsBrandOpen(false)}
            className={css.select}
            placeholder="Enter the text"
          />

          <ul
            className={`${css.optionList} ${
              isBrandOpen ? css.optionListOpen : css.optionListClosed
            }`}
            onMouseDown={handleBrandOptionClick}
          >
            {carBrandOptions.map((brand, index) => (
              <li className={css.brandOption} key={index}>
                {brand}
              </li>
            ))}
          </ul>

          <svg
            className={`${css.selectIcon} ${
              isBrandOpen ? css.selectIcon : css.iconDown
            }`}
          >
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </div>
      </div>

      <div className={css.selectWrapper}>
        <label htmlFor="Price" className={css.selectLabel}>
          Price/ 1 hour
        </label>

        <div className={css.iconWrapper}>
          <input
            type="text"
            value={`To ${price} $`}
            name="price"
            onChange={handleChange}
            onFocus={() => setIsPriceOpen(true)}
            onBlur={() => setIsPriceOpen(false)}
            className={css.select}
            placeholder="Price $"
          />

          <ul
            className={`${css.optionList} ${
              isPriceOpen ? css.optionListOpen : css.optionListClosed
            }`}
            onMouseDown={handlePriceOptionClick}
          >
            {priceOptions.map((num, index) => (
              <li className={css.brandOption} key={index} value={num}>
                {num}
              </li>
            ))}
          </ul>
          <svg
            className={`${css.selectIcon} ${
              isPriceOpen ? css.selectIcon : css.iconDown
            }`}
          >
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </div>
      </div>

      <div className={css.range}>
        <label htmlFor="from-to" className={css.label}>
          Car mileage / km
        </label>
        <div className={css.inputContainer}>
          <input
            type="text"
            name="mileageFrom"
            value={`From  ${mileageFrom}`}
            placeholder="From"
            className={css.from}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mileageTo"
            value={`To ${mileageTo}`}
            placeholder="To"
            className={css.to}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <ul className={css.buttonList}>
        <li>
          <button
            type="button"
            className={css.searchBtn}
            onClick={handleSearchClick}
          >
            Search
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.searchBtn}
            onClick={handleResetClick}
          >
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
};
