import axios from 'axios';

export const destinationsLoad = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_DESTINATIONS',
    });

    axios.get('/api/v1/destinations').then(
      (response) => console.log(response)
      // .then((response) =>
      //   dispatch({
      //     type: 'RECEIVED_DESTINATIONS',
      //     payload: response,
      //   })
    );
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_DESTINATIONS',
      payload: error,
    });
  }
};
