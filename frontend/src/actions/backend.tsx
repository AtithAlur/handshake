import axios from 'axios';

const BACKEND_ENDPOINT = 'http://localhost:8080/api';
const GET_CHIRPS_ENDPOINT = BACKEND_ENDPOINT + '/chirps';
const POST_CHIRPS_ENDPOINT = BACKEND_ENDPOINT + '/chirps';
const VOTE_CHIRPS_ENDPOINT = BACKEND_ENDPOINT + '/chirps/:chirp_id/vote_chirp';

class Backend {
  static fetchChirps() {
    return axios.get(GET_CHIRPS_ENDPOINT)
  }

  static postChirp(text: string) {
    let data = {text: text};
    return axios.post(POST_CHIRPS_ENDPOINT, data)
  }

  static voteChirp(id: string, data: object){
    let endpoint = VOTE_CHIRPS_ENDPOINT.replace(':chirp_id', id);
    return axios.put(endpoint, data);
  }
}

export default Backend;

