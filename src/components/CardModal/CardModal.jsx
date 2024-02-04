import css from './card-modal.module.css';
const CardModal = ({ carData }) => {
  const addressFromBackend = carData.address;

  const addressParts = addressFromBackend.split(',');
  if (addressParts.length < 3) {
    return <div>Loading...</div>;
  }
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();
  if (!carData) {
    return null;
  }
  const rentalConditionsString = carData.rentalConditions;
  const conditionsArray = rentalConditionsString.split('\n');

  const mileage = carData.mileage;
  const formattedMileage = mileage.toLocaleString();
  return (
    <div className={css.modalCardWrapper}>
      <img
        className={css.carImage}
        src={carData.img}
        alt={`${carData.make} ${carData.model}`}
      />
      <h2 className={css.titleCard}>
        {carData.make} <span className={css.model}>{carData.model}</span>,{' '}
        {carData.year}
      </h2>
      <div className={css.contentWrapper}>
        <p className={css.text}>{`${city}`}</p>
        <p className={css.text}>{`${country}`}</p>
        <p className={css.text}>Id: {carData.id}</p>
        <p className={css.text}>Year: {carData.year}</p>
        <p className={css.text}>Type: {carData.type}</p>
      </div>
      <div className={css.infoWrapper}>
        <p className={css.text}>Fuel Consumption:{carData.fuelConsumption} </p>
        <p className={css.text}>Engine Size:{carData.engineSize} </p>
      </div>
      <p className={css.descriptionText}>{carData.description}</p>
      <h3 className={css.subtitle}>Accessories and functionalities:</h3>
      <div className={css.contentWrapper}>
        <p className={css.text}>{carData.accessories[0]}</p>
        <p className={css.text}>{carData.accessories[1]} </p>
        <p className={css.text}>{carData.accessories[2]} </p>
      </div>
      <div className={css.functionalitiesWrapper}>
        <p className={css.text}>{carData.functionalities[0]}</p>
        <p className={css.text}>{carData.functionalities[1]}</p>
        <p className={css.text}>{carData.functionalities[2]}</p>
      </div>
      <h3 className={css.subtitle}>Rental Conditions: </h3>
      <div className={css.specificationsWrapper}>
        {/* <p className={css.specifications}><span className={css.number}>{conditionsArray[0]}</span></p> */}
        <p className={css.specifications}>
          <span className={css.part}>
            {conditionsArray[0].includes(':') && 'Minimum age:'}
          </span>
          <span className={css.number}>
            {conditionsArray[0].includes(':') &&
              conditionsArray[0].split(':')[1]}
          </span>
        </p>
        <p className={css.specifications}>{conditionsArray[1]}</p>
        <p className={css.specifications}>{conditionsArray[2]}</p>
        <p className={css.specifications}>
          Mileage: <span className={css.number}>{formattedMileage}</span>
        </p>
        <p className={css.specifications}>
          {' '}
          Price: <span className={css.number}>{carData.rentalPrice}</span>
        </p>
      </div>
      <a href="tel:+380730000000" className={css.rentalBtn}>
        Rental car
      </a>
    </div>
  );
};
export default CardModal;
