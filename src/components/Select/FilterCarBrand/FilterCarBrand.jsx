import css from './filter-car-brand.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../redux/filter/filter-slise';
import sprite from '../../../img/symbol-defs.svg';

import { carBrandOptions } from './carBrandOptions';
import { selectAutoFilters } from '../../../redux/favorites/favorites-selectors';
import toast from 'react-hot-toast';
import { priceOptions } from './priceOptions';

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

  const handleSearchClick = () => {
    dispatch(setFilters({ brand, price, mileageFrom, mileageTo }));
  };
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }
    setTimeout(() => {
      toast.error('"From" should be less or equal "To"', {
        position: 'top-center',
      });
    }, 1000);
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
      default:
        console.log("Looks like you're using inputs incorrectly");
    }
  };

  const handleResetClick = () => {
    setBrand('');
    setPrice('');
    setMileageFrom("");
    setMileageTo("");
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
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          <div
            className={`${css.optionList} ${
              isBrandOpen ? css.optionListOpen : css.optionListClosed
            }`}
            onMouseDown={handleBrandOptionClick}
          >
            <ul className={css.brandList}>
              {carBrandOptions.map((brand, index) => (
                <li className={css.brandOption} key={index}>
                  {brand}
                </li>
              ))}
            </ul>
          </div>
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
          <div
            className={`${css.optionList} ${
              isPriceOpen ? css.optionPriceListOpen : css.optionPriceListClosed
            }`}
            onMouseDown={handlePriceOptionClick}
          >
            <ul className={css.priceList}>
              {priceOptions.map((num, index) => (
                <li className={css.brandOption} key={index} value={num}>
                  {num}
                </li>
              ))}
            </ul>
          </div>
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
          <div className={css.wrapper}>
          <span className={css.textLeft}>From</span>
          <input
            type="text"
            name="mileageFrom"
            value={formatNumberWithCommas(mileageFrom)}
            // value={mileageFrom}
            className={css.from}
            onChange={handleChange}
          />
          </div>
          <div className={css.wrapper}>
          <span className={css.textLeft}>To</span>
          <input
            type="text"
            name="mileageTo"
            value={formatNumberWithCommas(mileageTo)}
            // value={mileageTo}
            className={css.to}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
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
