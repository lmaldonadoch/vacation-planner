import axios from 'axios';
import types from './types'

export const destinationsLoad = () => async dispatch => {
  try {
    dispatch({
      type: types.FETCHING_DESTINATIONS,
    });

    axios.get('/api/v1/destinations.json').then(response => {
      const places = response.data.data;
      places.forEach(place => {
        // eslint-disable-next-line no-param-reassign
        place.images = response.data.included.filter(image => {
          if (image.attributes.destination_id.toString() === place.id) {
            return image;
          }
          return false;
        });
      });
      dispatch({
        type: types.RECEIVED_DESTINATIONS,
        payload: places,
      });
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_FETCHING_DESTINATIONS,
      payload: error,
    });
  }
};

export const cityCreate = city => async dispatch => {
  try {
    dispatch({
      type: types.CREATING_CITY,
    });

    axios
      .post(
        '/api/v1/images',
        {
          image: city,
        },
        { withCredentials: true },
      )
      .then(response => {
        dispatch({
          type: types.CITY_CREATED,
          payload: response.data,
        });
      });
  } catch (error) {
    dispatch({
      type: types.ERROR_CREATING_CITY,
      payload: error,
    });
  }
};

export const countryCreate = country => async dispatch => {
  try {
    dispatch({
      type: types.CREATING_COUNTRY,
    });

    axios
      .post(
        '/api/v1/destinations',
        {
          destination: country,
        },
        { withCredentials: true },
      )
      .then(response => {
        dispatch({
          type: types.COUNTRY_CREATED,
          payload: response.data.data,
        });
      });
  } catch (error) {
    dispatch({
      type: types.ERROR_CREATING_COUNTRY,
      payload: error,
    });
  }
};
