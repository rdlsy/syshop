import axios from 'axios';

export const getMovies = async name => {
  const config = {
    API_ENDPOINT: 'https://www.filecity.co.kr/hoonmin/koreafilm_api.php'
  }
  const response = await axios.get(`${config.API_ENDPOINT}?title=${name}`);
  return response.data;
};