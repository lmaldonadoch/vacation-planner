import axios from 'axios';
import types from './types';

export const dateCreate = date => async dispatch => {
  try {
    dispatch({
      type: types.CREATING_DATE,
    });

    axios
      .post(
        '/api/v1/vacation_dates',
        {
          date,
        },
        { withCredentials: true },
      )
      .then(response => {
        dispatch({
          type: types.DATE_CREATED,
          payload: response,
        });
      });
  } catch (error) {
    dispatch({
      type: types.ERROR_SETTING_DATE,
      payload: error,
    });
  }
};

export const dateSetup = date => dispatch => {
  dispatch({
    type: types.DATE_SETUP,
    payload: date,
  });
};

export const dateStateReset = () => dispatch => {
  dispatch({
    type: types.DATE_STATE_RESET,
  });
};
