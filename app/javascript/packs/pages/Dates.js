import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { dateCreate, dateSetup, dateStateReset } from '../actions/DateActions';
import { userLoggedIn } from '../actions/UserActions';
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const Dates = ({ match }) => {
  const { country, city } = match.params;

  const userState = useSelector(state => state.user);
  const destinationsState = useSelector(state => state.destinations);
  const datesState = useSelector(state => state.dates);
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const alert = document.getElementById('alert');

  useEffect(() => {
    if (country) {
      dispatch(
        dateSetup({
          country,
          cities: [{ attributes: { city } }],
        }),
      );
    } else {
      dispatch(
        dateSetup({
          country: destinationsState.destinations[0],
          cities: [
            {
              attributes: {
                city:
                  destinationsState.destinations[0].images[0].attributes.city,
              },
            },
          ],
        }),
      );
    }
  }, []);

  const setDestination = e => {
    e.preventDefault();
    e.persist();

    const formValues = [...e.target].map(input => input.value);

    if (formValues[4] < formValues[3]) {
      setError('There must be a mistake, unless your trip is going to be to the past, your return date should be after your departure date');
      return alert.classList.remove('d-none');
    }

    const destination = destinationsState.destinations.filter(
      destination => destination.attributes.place === formValues[1],
    );

    const image = destination[0].images.filter(
      selectedCity => selectedCity.attributes.city === formValues[2],
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
        country: formValues[1],
        city: formValues[2],
      }),
    );
    alert.classList.add('d-none');
    return setError(null);
  };

  useEffect(() => {
    if (datesState.status === 'created') {
      dispatch(userLoggedIn());
      dispatch(dateStateReset());
    }
  }, [datesState.status]);

  const updateCountry = e => {
    const { value } = e.target;

    dispatch(
      dateSetup({
        country: value,
        cities: destinationsState.destinations.filter(
          destination => destination.attributes.place === value,
        )[0].images,
        start_date: datesState.date.start_date,
        end_date: datesState.date.end_date,
      }),
    );
  };

  const decrementPage = () => {
    if (page > 0) setPage(prevState => (prevState -= 1));
  };

  const incrementPage = () => {
    if ((page + 1) * 5 < userState.vacationDates.length) setPage(prevState => (prevState += 1));
  };

  return (
    <div className="Dates col-12 col-md-10 d-flex flex-column align-items-center justify-content-center">
      <div className="trips-pagination d-flex align-items-center">
        <button
          onClick={decrementPage}
          id="decrement"
          className="left"
          type="button"
        >
          <i className="fas fa-caret-left" />
        </button>
        <div className="schedule-trips-container">
          {userState.vacationDates
            .slice(page * 5, Math.min((page + 1) * 5, userState.vacationDates.length)).map(trip => (
              <div
                className="scheduled-trip d-flex w-80 flex-column justify-content-center"
                key={trip.id}
              >
                <p>
                  You have a trip scheduled from
                  {' '}
                  {trip.start_date}
                  {' '}
                  to
                  {' '}
                  {trip.end_date}
                  {' '}
                  to:
                </p>
                <h5>
                  {trip.city}
                  ,
                  {trip.country}
                </h5>
              </div>
            ))}
        </div>
        <button
          onClick={incrementPage}
          id="increment"
          className="right"
          type="button"
        >
          <i className="fas fa-caret-right" />
        </button>
      </div>
      <div className="title">
        <h2>Schedule your trip!</h2>
        <p>Select the Country and City/Destination you would like to visit</p>
        <p className="alert" id="alert">{error}</p>
      </div>
      <form
        className="schedule-date d-flex flex-column"
        onSubmit={setDestination}
      >
        <div className="form-group">
          <p>Your name</p>
          <input type="text" value={userState.user.name} readOnly />
        </div>

        <div className="selector-container d-flex justify-content-between">
          <select
            name="country"
            onChange={updateCountry}
            className="country"
            value={datesState.date.country}
          >
            {destinationsState.destinations.map(destination => (
              <option
                value={destination.attributes.place}
                key={destination.attributes.place}
              >
                {destination.attributes.place}
              </option>
            ))}
          </select>

          <select name="city" className="country">
            {datesState.date.cities.map(destination => (
              <option
                value={destination.attributes.city}
                key={destination.attributes.city}
              >
                {destination.attributes.city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <p>What is your departure date?</p>
          <input type="date" required />
        </div>

        <div className="form-group">
          <p>What is your return date?</p>
          <input type="date" required />
        </div>

        <button className="schedule-button" type="submit">
          <i className="fas fa-calendar-alt" />
          {' '}
          Schedule Your Trip!
        </button>
      </form>
    </div>
  );
};

Dates.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default Dates;
