import axios from 'axios';

export function listaUsers(){
	const _url = 'https://api.github.com/users?since=130';
	return axios.get(_url);
}


