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
