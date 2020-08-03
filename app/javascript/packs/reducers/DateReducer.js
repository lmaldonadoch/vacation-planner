const initialState = {
  isFetching: false,
  user: {},
  date: {
    country: '',
    city: '',
    start_date: '',
    end_date: '',
  },
};

const dateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATING_DATE':
      return {
        ...state,
        isFetching: true,
      };
    case 'DATE_CREATED':
      return {
        ...state,
        isFetching: false,
        user: payload.user,
      };
    case 'ERROR_SETTING_DATE':
      return {
        ...state,
        isFetching: false,
      };

    case 'DATE_SETUP':
      return {
        ...state,
        date: payload.date,
      };

    default:
      return {
        ...state,
      };
  }
};

export default dateReducer;
