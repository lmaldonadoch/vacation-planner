import axios from 'axios';

export const dateCreate = (date) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATING_DATE',
    });

    axios
      .post(
        '/api/v1/vacation_dates',
        {
          date: date,
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch({
          type: 'DATE_CREATED',
          payload: response,
        });
      });
  } catch (error) {
    dispatch({
      type: 'ERROR_SETTING_DATE',
      payload: error,
    });
  }
};

export const dateSetup = (date) => (dispatch) => {
  dispatch({
    type: 'DATE_SETUP',
    payload: date,
  });
};
