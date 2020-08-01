import axios from 'axios';

export const userLoggedIn = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_USER',
    });

    const response = await fetch('/api/v1/logged_in');

    const info = await response.json();

    await dispatch({
      type: 'RECEIVED_USER',
      payload: info,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_USER',
      payload: error,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: 'DESTROYING_SESSION',
    });

    const response = await fetch('/api/v1/logout', { method: 'DELETE' });

    const info = await response.json();

    await dispatch({
      type: 'SESSION_DESTROYED',
      payload: info,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_DESTROYING_SESSION',
      payload: error,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  try {
    dispatch({
      type: 'LOGGING_IN_USER',
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
        { withCredentials: true }
      )
      .then((response) =>
        dispatch({
          type: 'USER_LOGGED_IN',
          payload: response,
        })
      );
  } catch (error) {
    dispatch({
      type: 'ERROR_SIGNING_USER',
      payload: error,
    });
  }
};

export const userRegistration = (user) => async (dispatch) => {
  try {
    dispatch({
      type: 'REGISTERING_USER',
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
        { withCredentials: true }
      )
      .then((response) =>
        dispatch({
          type: 'USER_REGISTERED',
          payload: response,
        })
      );
  } catch (error) {
    dispatch({
      type: 'REGISTRATION_ERROR',
      payload: error,
    });
  }
};
