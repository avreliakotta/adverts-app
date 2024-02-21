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
    // return adverts
    //   .filter(advert =>
    //     brand !== ''
    //       ? advert.make.toLowerCase().includes(brand.toLowerCase())
    //       : advert
    //   )
    //   .filter(advert => {
    //     const formattedPrice = Number(
    //       advert.rentalPrice.slice(1, advert.rentalPrice.length)
    //     );
    //     return price ? formattedPrice <= Number(price) : advert;
    //   })
    //   .filter(advert => {
    //     if (mileageFrom !== '') {
    //       return advert.mileage >= parseNumberWithCommas(mileageFrom);
    //     }
    //     return true;
    //   })
    //   .filter(advert => {
    //     if (mileageTo !== '') {
    //       return advert.mileage <= parseNumberWithCommas(mileageTo);
    //     }
    //     return true;
    //   });
      // .filter(advert=>
      //   Number(mileageFrom) ? advert.mileage >= Number(mileageFrom) : advert
      // )
      // .filter(advert =>
      //   Number(mileageTo) ? advert.mileage <= Number(mileageTo) : advert
      // );
  }
);
