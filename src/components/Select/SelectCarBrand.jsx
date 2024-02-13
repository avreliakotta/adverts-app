import css from './select-car-brand.module.css';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand } from '../../redux/filter/filter-slise';
import sprite from '../../img/symbol-defs.svg';
import SelectRentalPrice from './SelectRentalPrice/SelectRentalPrice';
import RangeInput from '../RangeInput/RangeInput';
import { selectAutoBrand } from '../../redux/favorites/favorites-selectors';
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
  'Land Rover',
  'Chrysler',
  'Kia',
  'Land',
];

export const SelectCarBrand = () => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectAutoBrand);
  const [searchText, setSearchText] = useState(selectedBrand);
  const [isOpen, setIsOpen] = useState(false);
 
 

  const handleSearchClick = () => {
    dispatch(setBrand(searchText === '' ? null : searchText));
    setSearchText('');
  };

  const handleBrandChange = event => {
    const { value } = event.target;
    setSearchText(value);
    setIsOpen(false);
  };
  const handleResetClick = () => {
    setSearchText('');
    dispatch(setBrand(null));
  };
  
 
 
  // const handleOptionClick = (event) => {
   
  //   if (event.target.nodeName !== 'LI') return;
  //   const value = event.target.textContent;
  //   setSearchText(value);
  //   setIsOpen(false);
  // }
  
  const handleOptionClick = (event) => {
    console.log('handleOptionClick is executed');
    if (event.target.nodeName !== 'LI') return;
    const value = event.target.textContent;
    setSearchText(value);
   
      setIsOpen(false);
    
}


 
  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <label htmlFor="Brand" className={css.selectLabel}>
          Car brand
        </label>

        <div className={css.iconWrapper}>
          {/* <select
            name="brand"
            id="brand"
            value={searchText}
            onChange={handleBrandChange}
            className={css.select}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          > */}
          <input
            type="text"
            value={searchText}
            name="brand"
            onChange={handleBrandChange}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            className={css.select}
            placeholder='Enter the text'
            
          />
            {/* <option value="" disabled hidden className={css.defaultOption}>
              Enter the text
            </option> */}
             <ul className={`${css.optionList} ${isOpen ? css.optionListOpen : css.optionListClosed}`}   onMouseDown={handleOptionClick}    >
            {carBrandOptions.map((brand, index) => (
              <li className={css.brandOption} key={index}   
               >
                {brand}
              </li>
            ))}
            </ul>
          {/* </select> */}
          <svg
            className={`${css.selectIcon} ${
              isOpen ? css.selectIcon : css.iconDown
            }`}
          >
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </div>
      </div>
      <SelectRentalPrice />
      <RangeInput />
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
}
