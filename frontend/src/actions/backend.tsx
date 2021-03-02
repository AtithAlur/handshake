import axios from 'axios';

const BACKEND_ENDPOINT = 'http://localhost:8080/api';
const GET_CHIRPS_ENDPOINT = BACKEND_ENDPOINT + '/chirps';

class Backend {
  static fetchChirps() {
    return axios.get(GET_CHIRPS_ENDPOINT)
  }
}

export default Backend;

