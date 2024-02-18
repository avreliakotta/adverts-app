const step = 10;
const maxPrice = 450;
const priceOptions = [];
export const makePriceOptions=()=>{
for (let i = step; i <= maxPrice; i += step) {
  priceOptions.push(i);
}
return priceOptions;
}