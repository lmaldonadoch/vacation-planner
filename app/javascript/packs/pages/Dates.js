import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateCreate, dateSetup } from '../actions/DateActions';

const Dates = ({ match }) => {
  const { country, city } = match.params;

  const userState = useSelector((state) => state.user);
  const destinationsState = useSelector((state) => state.destinations);
  const datesState = useSelector((state) => state.dates);
  const dispatch = useDispatch();

  let cities = [];

  useEffect(() => {
    destinationsState.destinations.forEach((destination) => {
      cities.push(destination.attributes.place);
    });

    dispatch(
      dateSetup({
        country: country,
        city: city,
        start_date: '',
        end_date: '',
      })
    );
  }, []);

  const setDestination = () => {
    const destination = destinationsState.destinations.filter(
      (destination) => destination.attributes.place === datesState.date.country
    );

    const image = destination[0].images.filter(
      (selectedCity) => selectedCity.attributes.city === datesState.date.city
    );

    const image_id = image[0].id;

    const destination_id = destination[0].id;

    const user_id = userState.user.id;
  };

  const updateCity = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  useEffect(() => {
    setDestination;
  }, [datesState.date.country, datesState.date.city]);

  console.log();

  return (
    <div className="Dates col-12 col-md-10">
      <form>
        <div className="form-group">
          <label>Your name</label>
          <input type="text" value={userState.user.name} readOnly />
        </div>

        <select name="country" onChange={updateCity} className="country">
          {destinationsState.destinations.map((destination) => {
            if (destination.attributes.place === datesState.date.country) {
              return (
                <option
                  value={destination.attributes.place}
                  key={destination.attributes.place}
                  selected="selected"
                >
                  {destination.attributes.place}
                </option>
              );
            }
            return (
              <option
                value={destination.attributes.place}
                key={destination.attributes.place}
              >
                {destination.attributes.place}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default Dates;
