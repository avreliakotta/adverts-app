import { createSelector } from '@reduxjs/toolkit';
export const selectAdverts = state => state.adverts.item;
export const selectIsLoading = state => state.adverts.loading;
export const selectFilters = state => state.filter;

export const selectVisibleAdverts= createSelector(
    [selectAdverts, selectFilters],
    (adverts, { brand, price, mileageFrom, mileageTo }) => {
      return adverts.filter(advert=> brand !== '' ? advert.make.toLowerCase().includes(brand.toLowerCase()) : advert)
      .filter(advert=> {
        const formattedPrice = Number(
          advert.rentalPrice.slice(1, advert.rentalPrice.length)
        );
        return price ? formattedPrice <= Number(price) : advert;
      })
      .filter(advert =>
        Number(mileageFrom) ? advert.mileage >= Number(mileageFrom) : advert
      )
      .filter(advert=>
        Number(mileageTo) ? advert.mileage <= Number(mileageTo) : advert
      );
    
    }
  );
 

  