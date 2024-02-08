import css from './range-input.module.css';
const RangeInput = () => {
  return (
    <div className={css.range}>
      <label htmlFor="from-to" className={css.label}>
        Car mileage / km
      </label>
      <div className={css.inputContainer}>
        <input
          type="text"
          name="from"
          placeholder="From"
          className={css.from}
        />
        <input type="text" name="to" placeholder="To" className={css.to} />
      </div>
    </div>
  );
};
export default RangeInput;
