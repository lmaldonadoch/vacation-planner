const initialState = {
  destinations: [
    {
      destination: null,
      images: [],
    },
  ],
};

const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default destinationsReducer;
