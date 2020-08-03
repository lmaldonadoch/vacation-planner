import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateCreate, dateSetup } from '../actions/DateActions';

const Dates = ({ match }) => {
  const { country, city } = match.params;

  const userState = useSelector((state) => state.user);
  const destinationsState = useSelector((state) => state.destinations);
  const datesState = useSelector((state) => state.dates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      dateSetup({
        country: country,
        cities: [{ attributes: { city: city } }],
      })
    );
  }, []);

  const setDestination = (e) => {
    e.preventDefault();
    e.persist();

    const formValues = [...e.target].map((input) => input.value);

    console.log(formValues);

    const destination = destinationsState.destinations.filter(
      (destination) => destination.attributes.place === formValues[1]
    );

    const image = destination[0].images.filter(
      (selectedCity) => selectedCity.attributes.city === formValues[2]
    );

    const imageId = image[0].id;
    const destinationId = destination[0].id;
    const userId = userState.user.id;

    dispatch(
      dateCreate({
        user_id: userId,
        destination_id: destinationId,
        image_id: imageId,
        start_date: formValues[3],
        end_date: formValues[4],
      })
    );
  };

  console.log(datesState);

  const updateCountry = (e) => {
    const { value } = e.target;

    dispatch(
      dateSetup({
        country: value,
        cities: destinationsState.destinations.filter(
          (destination) => destination.attributes.place === value
        )[0].images,
        start_date: datesState.date.start_date,
        end_date: datesState.date.end_date,
      })
    );
  };

  return (
    <div className="Dates col-12 col-md-10">
      <form className="schedule-date" onSubmit={setDestination}>
        <div className="form-group">
          <label>Your name</label>
          <input type="text" value={userState.user.name} readOnly />
        </div>

        <select
          name="country"
          onChange={updateCountry}
          className="country"
          value={datesState.date.country}
        >
          {destinationsState.destinations.map((destination) => (
            <option
              value={destination.attributes.place}
              key={destination.attributes.place}
            >
              {destination.attributes.place}
            </option>
          ))}
        </select>

        <select name="city" className="country">
          {datesState.date.cities.map((destination) => (
            <option
              value={destination.attributes.city}
              key={destination.attributes.city}
            >
              {destination.attributes.city}
            </option>
          ))}
        </select>

        <div className="form-group">
          <label>When are you going?</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>When are you coming back?</label>
          <input type="date" />
        </div>

        <button className="schedule-button" type="submit">
          <i className="fas fa-calendar-alt"></i> Schedule Your Trip!
        </button>
      </form>
    </div>
  );
};

export default Dates;
