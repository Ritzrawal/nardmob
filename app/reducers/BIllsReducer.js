const initialState = {
  billlist: [],
  cashbill: [],
  opinionbill: [],
  amendment: [],
  loading: false,
  commentdata: [],
  billdetail: [],
  success: false,
  hasMore: true,
};

// Reducers (Modifies The State And Returns A New State)
const BillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        loading: true,
      };
    case 'BILL_REQUEST':
      return {
        ...state,
        loading: true,
        hasMore: true,
        data: [],
      };
    case 'billlist': {
      switch (action.screen) {
        case '1':
          var data;
          if (action.page === '1') {
            data = action.payload;
          } else {
            data = state.billlist.concat(action.payload);
          }
          return {
            ...state,
            loading: false,
            billlist: data,
          };

        case '2':
          var data;
          if (action.page === '1') {
            data = action.payload;
          } else {
            data = state.cashbill.concat(action.payload);
          }
          return {
            ...state,
            loading: false,
            cashbill: data,
          };
        case '3':
          var data;
          if (action.page === '1') {
            data = action.payload;
          } else {
            data = state.opinionbill.concat(action.payload);
          }
          return {
            ...state,
            loading: false,
            opinionbill: data,
          };
        case '4':
          var data;
          if (action.page === '1') {
            data = action.payload;
          } else {
            data = state.amendment.concat(action.payload);
          }
          return {
            ...state,
            loading: false,
            data: data,
          };
        default: {
          return state;
        }
      }
    }
    case 'billdetail': {
      return {
        ...state,
        loading: false,
        billdetail: action.payload,
        success: action.payload.success,
      };
    }

    default: {
      return state;
    }
  }
};

export default BillsReducer;
