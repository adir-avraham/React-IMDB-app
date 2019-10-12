import axios from 'axios';

function getSerieses() {
    return axios.get('http://www.omdbapi.com/?apikey=8036fcb6&s=friends&type=series')
}

export default { getSerieses }