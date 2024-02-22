import { createSelector } from '@reduxjs/toolkit';
export const selectAdverts = state => state.adverts.item;
export const selectIsLoading = state => state.adverts.loading;
export const selectFilters = state => state.filter;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, { brand, price, mileageFrom, mileageTo }) => {
    const parseNumberWithCommas = (str) => {
      if (str === null) {
        return 0; 
      }
      return parseFloat(str.split(',').join(''));
    };
    const isReset = !brand && !price && !mileageFrom && !mileageTo;
    return adverts
    .filter(advert => {
     
      if (isReset) {
        return true;
      }
      
      return (
        (brand === '' || advert.make.toLowerCase().includes(brand.toLowerCase())) &&
        (!price || Number(advert.rentalPrice.slice(1)) <= Number(price)) &&
        (!mileageFrom || advert.mileage >= parseNumberWithCommas(mileageFrom)) &&
        (!mileageTo || advert.mileage <= parseNumberWithCommas(mileageTo))
      );
    });
   
  }
);
