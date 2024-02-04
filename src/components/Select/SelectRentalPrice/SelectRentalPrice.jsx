import css from "../select-rental-price.module.css";
import { useState } from "react";
import sprite from '../../../img/symbol-defs.svg';
const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100];
const SelectRentalPrice=()=>{
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };
    return(
        <div className={css.selectWrapper}>
        <label htmlFor="Price" className={css.selectLabel}>
            Price/ 1 hour
          </label>
          
            <div className={css.iconWrapper}>
              <select
                name="price"
                id="price"
                value={selectedValue} onChange={handleChange}
                className={css.select}
              >
                <option value="" disabled hidden className={css.defaultOption}>
                  Price $
                </option>
                {priceOptions.map((num, index) => (
                  <option className={css.brandOption} key={index} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <svg className={css.selectIcon}>
                <use href={`${sprite}#icon-chevron-down-1`}></use>
              </svg>
            </div>
          </div>
       
    )
}
export default SelectRentalPrice;