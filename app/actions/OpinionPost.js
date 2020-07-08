import axios from 'axios';

export const opinionSend = (
  token,
  billId,
  opinion,
  medaiUrl,
) => async dispatch => {
  var formdata = new FormData();
  formdata.append('opinion', opinion);
  formdata.append('media_url', {
    uri: medaiUrl.uri,
    name: medaiUrl.fileName,
    type: medaiUrl.type,
  });
  console.log('checking formdata', formdata);
  const baseUrl = 'http://narad.meroshows.com/api/';
  console.log('mediaurl ', medaiUrl);
  await axios
    .post(
      `${baseUrl}bills/${billId}/opinion`,
      formdata,

      {
        headers: {
          Authorization: token,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then(res => {
      console.log('opiniondata', res);

      dispatch({
        type: 'OPINION',
        payload: res.data,
      });
    })
    .catch(err => console.log('log' + err));
};
