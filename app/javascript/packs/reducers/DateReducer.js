const initialState = {
  isFetching: false,
  user: {},
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
  }
};

export default dateReducer;
