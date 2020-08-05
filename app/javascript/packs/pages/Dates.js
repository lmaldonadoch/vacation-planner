import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateCreate, dateSetup } from '../actions/DateActions';
import { userLoggedIn } from '../actions/UserActions';

const Dates = ({ match }) => {
  const { country, city } = match.params;

  const userState = useSelector((state) => state.user);
  const destinationsState = useSelector((state) => state.destinations);
  const datesState = useSelector((state) => state.dates);
  const dispatch = useDispatch();

  console.log(destinationsState);

  useEffect(() => {
    if (country) {
      dispatch(
        dateSetup({
          country: country,
          cities: [{ attributes: { city: city } }],
        })
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
        })
      );
    }
  }, []);

  const setDestination = (e) => {
    e.preventDefault();
    e.persist();

    const formValues = [...e.target].map((input) => input.value);

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
        country: formValues[1],
        city: formValues[2],
      })
    );
  };

  useEffect(() => {
    if (datesState.status === 'created') {
      dispatch(userLoggedIn());
    }
  }, [datesState.status]);

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
    <div className="Dates col-12 col-md-10 d-flex flex-column align-items-center justify-content-center">
      <div className="schedule-trips-container">
        {userState.vacationDates.map((trip) => (
          <div
            className="scheduled-trip d-flex w-80 flex-column justify-content-center"
            key={trip.id}
          >
            <p>
              You have a trip scheduled from {trip.start_date} to{' '}
              {trip.end_date} to:
            </p>
            <h5>
              {trip.city}, {trip.country}
            </h5>
          </div>
        ))}
      </div>
      <div className="title">
        <h2>Schedule your trip!</h2>
        <p>Select the Country and City/Destination you would like to visit</p>
      </div>
      <form
        className="schedule-date d-flex flex-column"
        onSubmit={setDestination}
      >
        <div className="form-group">
          <label>Your name</label>
          <input type="text" value={userState.user.name} readOnly />
        </div>

        <div className="selector-container d-flex justify-content-between">
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
        </div>

        <div className="form-group">
          <label>What is your departure date?</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>What is your return date?</label>
          <input type="date" required />
        </div>

        <button className="schedule-button" type="submit">
          <i className="fas fa-calendar-alt"></i> Schedule Your Trip!
        </button>
      </form>
    </div>
  );
};

export default Dates;
