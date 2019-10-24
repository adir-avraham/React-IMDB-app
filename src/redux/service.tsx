import axios from 'axios';

function getSerieses(searchValue: any) {

    return axios.get(`http://www.omdbapi.com/?apikey=8036fcb6&s=${searchValue}&type=series`)

}

function getGames(searchValue: any) {

    return axios.get(`http://www.omdbapi.com/?apikey=8036fcb6&s=${searchValue}&type=game`)

}

export default { getSerieses, getGames }