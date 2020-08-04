import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityCreate } from '../actions/DestinationActions';
import { useHistory } from 'react-router-dom';

const AddForm = ({ form }) => {
  const destinationsState = useSelector((state) => state.destinations);
  const dispatch = useDispatch();
  const history = useHistory();

  const addCity = (e) => {
    e.preventDefault();
    e.persist();
    const formValues = [...e.target].map((input) => input.value);

    dispatch(
      cityCreate({
        image_url: formValues[1],
        destination_id: formValues[0],
        city: formValues[2],
        city_description: formValues[3],
      })
    );
  };

  useEffect(() => {
    if (destinationsState.status === 'created') {
      dispatch(destinationsLoad);
      history.push('/');
    }
  }, [destinationsState.status]);

  if (!form) return <form></form>;
  else if (form === 'city') {
    return (
      <form
        onSubmit={addCity}
        className="d-flex flex-column justify-content-center align-items-center h-100"
      >
        <label>Select the country that this City/Destination belongs to</label>
        <select name="country" className="country">
          {destinationsState.destinations.map((destination) => (
            <option value={destination.id} key={destination.attributes.place}>
              {destination.attributes.place}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter the image URL" />
        <input type="text" placeholder="Enter the city name" />
        <textarea placeholder="Enter the city description" />
        <button tye="submit">Add City</button>
      </form>
    );
  }
};

export default AddForm;
