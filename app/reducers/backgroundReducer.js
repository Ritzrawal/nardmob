const initState = {
  likesMessage: [],
  likesCount: [],
};

export const backgroundReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LIKED':
      // console.log('like count', action.payload);
      return {
        ...state,
        likesCount: action.payload.res.data.likes_count,
        likesMessage: action.payload.message,
      };

    default:
      return state;
  }
};
