const initialstate = {
  data: [],
};
const apiReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'ALL_POST':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
