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
