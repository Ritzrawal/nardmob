import axios from 'axios';
const baseUrl = 'http://narad.meroshows.com/api/';

export const getBillList = (token, page, bill_type_flag) => dispatch => {
  console.log('getbilllist', page + bill_type_flag);
  axios
    .get(`${baseUrl}bills?page=${page}&bill_type_flag=${bill_type_flag}`, {
      headers: {Authorization: token},
      page: page,
    })
    .then(res => {
      dispatch({
        type: 'billlist',

        payload: res.data.data,
        screen: bill_type_flag,
        page: page,
      });
    })
    .catch(err => console.log('log' + err));
};

export const getBillCardComment = (
  token,
  billId,
  type,
  modalId,
) => dispatch => {
  console.log('bill id ', billId);
  console.log('type ', type);
  console.log('infocard', modalId);
  axios
    .get(`${baseUrl}bill/${billId}/card/${modalId}`, {
      headers: {Authorization: token},
    })
    .then(res => {
      console.log('comment', res.data);
      dispatch({
        type: 'Billlist_Comment',
        payload: {
          data: res.data,
          billId,
          type,
          modalId,
        },
      });
    })
    .catch(err => console.log('comment' + err));
};

export const getBilldetail = (token, id) => dispatch => {
  axios
    .get(`${baseUrl}bills/${id}/details`, {
      headers: {Authorization: token},
    })
    .then(res => {
      dispatch({
        type: 'billdetail',
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
