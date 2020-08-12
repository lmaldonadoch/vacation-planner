import axios from 'axios';
import types from './types'

export const userLoggedIn = () => async dispatch => {
  try {
    dispatch({
      type: types.FETCHING_USER,
    });

    axios.get('/api/v1/logged_in').then(response => {
      dispatch({
        type: types.RECEIVED_USER,
        payload: response.data,
      });
    })
  } catch (error) {
    dispatch({
      type: types.ERROR_FETCHING_USER,
      payload: error,
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch({
      type: types.DESTROYING_SESSION,
    });

    axios.delete('/api/v1/logout').then(response => {
      dispatch({
        type: types.SESSION_DESTROYED,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_DESTROYING_SESSION,
      payload: error,
    });
  }
};

export const userLogin = user => async dispatch => {
  try {
    dispatch({
      type: types.LOGGING_IN_USER,
    });

    axios
      .post(
        '/api/v1/sessions',
        {
          user: {
            email: user.email,
            password: user.password,
          },
        },
        { withCredentials: true },
      )
      .then(response => dispatch({
        type: types.USER_LOGGED_IN,
        payload: response.data,
      }));
  } catch (error) {
    dispatch({
      type: types.ERROR_SIGNING_USER,
      payload: error,
    });
  }
};

export const userRegistration = user => async dispatch => {
  try {
    dispatch({
      type: types.REGISTERING_USER,
    });

    axios
      .post(
        '/api/v1/registrations',
        {
          user: {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
          },
        },
        { withCredentials: true },
      )
      .then(response => dispatch({
        type: types.USER_REGISTERED,
        payload: response,
      }));
  } catch (error) {
    dispatch({
      type: types.REGISTRATION_ERROR,
      payload: error,
    });
  }
};
