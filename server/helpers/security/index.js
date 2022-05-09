import api from './api';
import endpoints from './dictionaries/endpoints.dictionary';

console.log(endpoints)

export default {
  verifyAccesToken: api.verifyAccesToken,
  endpoints,
};
