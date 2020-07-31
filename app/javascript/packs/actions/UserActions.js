import axios from 'axios';

const updateUser = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_USER',
    });

    const response = await axios
      .get('/api/v1/logged_in')
      .then(console.log(response));
  }
};
