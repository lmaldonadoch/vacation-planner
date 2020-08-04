import axios from 'axios';

export const destinationsLoad = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_DESTINATIONS',
    });

    axios.get('/api/v1/destinations.json').then((response) => {
      let places = response.data.data;
      places.forEach((place) => {
        place['images'] = response.data.included.filter((image) => {
          if (image.attributes.destination_id.toString() === place.id) {
            return image;
          }
          return;
        });
      });
      dispatch({
        type: 'RECEIVED_DESTINATIONS',
        payload: places,
      });
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_DESTINATIONS',
      payload: error,
    });
  }
};

export const cityCreate = (city) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATING_CITY',
    });

    console.log(city, 'city value in actions');

    axios
      .post(
        '/api/v1/images',
        {
          image: city,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response, 'response from creating city');
        dispatch({
          type: 'CITY_CREATED',
          payload: response.data,
        });
      });
  } catch (error) {
    dispatch({
      type: 'ERROR_CREATING_CITY',
      payload: error,
    });
  }
};
