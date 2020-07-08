import axios from 'axios';
// import {getBilldetail} from './BillsApi';
const baseUrl = 'http://narad.meroshows.com/api/';
export const backgroundLikeSend = (
  token,
  billId,
  type,
  modalId,
) => async dispatch => {
  console.log('modalId', modalId);
  await axios
    .post(
      `${baseUrl}bills/${modalId}/like`,
      {
        modal_type: type,
        bill_id: billId,
      },

      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(res => {
      // const mainData = getState().BIllsReducer.billdetail.data;
      console.log('responae', res);

      dispatch({
        type: 'LIKED',
        payload: {
          type,
          modalId,

          res: res.data,
        },
      });
    })
    .catch(err => console.log('log' + err));
};
