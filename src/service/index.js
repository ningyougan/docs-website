import axios from 'axios';

export async function getMd(url) {
  return await axios.post(
    'http://10.134.115.92/commonService/api/getMarkdown',
    { api: '/service/components/2.0/' }
  );
}
