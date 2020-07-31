const initialState = {
  name: null,
  appointments: [{}],
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
