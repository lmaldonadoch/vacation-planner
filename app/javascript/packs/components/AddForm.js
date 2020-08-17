import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  cityCreate,
  destinationsLoad,
  countryCreate,
} from '../actions/DestinationActions';

const AddForm = ({ formType }) => {
  const destinationsState = useSelector(state => state.destinations);
  const dispatch = useDispatch();
  const history = useHistory();
  const [cityForCountry, setCityForCountry] = useState({
    image_url: null,
    destination_id: null,
    city: null,
    city_description: null,
  });

  const addCity = e => {
    e.preventDefault();
    e.persist();
    const formValues = [...e.target].map(input => input.value);

    dispatch(
      cityCreate({
        image_url: formValues[2],
        destination_id: formValues[0],
        city: formValues[1],
        city_description: formValues[3],
      }),
    );
  };

  const addCountry = e => {
    e.preventDefault();
    e.persist();
    const formValues = [...e.target].map(input => input.value);

    dispatch(
      countryCreate({
        place: formValues[0],
        country_description: formValues[1],
      }),
    );

    setCityForCountry({
      image_url: formValues[3],
      destination_id: null,
      city: formValues[2],
      city_description: formValues[4],
    });
  };

  useEffect(() => {
    if (destinationsState.destinations.length === 1) {
      dispatch(
        cityCreate({
          image_url: cityForCountry.image_url,
          destination_id: destinationsState.destinations[0].id,
          city: cityForCountry.city,
          city_description: cityForCountry.city_description,
        }),
      );
    }
  }, [destinationsState.destinations]);

  useEffect(() => {
    if (destinationsState.status === 'created') {
      dispatch(destinationsLoad);
      history.push('/');
    }
  }, [destinationsState.status]);

  if (!formType) return <form />;
  if (formType === 'city') {
    return (
      <form
        onSubmit={addCity}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <p>Select the country that this City/Destination belongs to</p>
        <select name="country" className="country">
          {destinationsState.destinations.map(destination => (
            <option value={destination.id} key={destination.attributes.place}>
              {destination.attributes.place}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter the city name" required />
        <input
          type="text"
          placeholder="Enter the URL for an image of this city"
          required
        />
        <textarea placeholder="Enter the City description" required />
        <button type="submit">Add City</button>
      </form>
    );
  }
  return (
    <form
      onSubmit={addCountry}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <input
        type="text"
        placeholder="Please provide the name of the Country"
        required
      />
      <textarea placeholder="Enter the Country description" required />
      <h3>Please add a City for this new Country</h3>
      <input type="text" placeholder="Enter the city name" required />
      <input
        type="text"
        placeholder="Enter the URL for an image of this city"
        required
      />
      <textarea placeholder="Enter the City description" required />
      <button type="submit">Add Country</button>
    </form>
  );
};

AddForm.propTypes = {
  formType: PropTypes.string,
};

AddForm.defaultProps = {
  formType: null,
};

export default AddForm;
