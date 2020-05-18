import axios from 'axios';
const API_URL = 'http://localhost:8080';

export class APIService{
    constructor(){
    }
    getProdutos() {

        const url = `${API_URL}/produtos/`;
        
        return axios.get(url).then(response => response.data);
        }
        getTodo(id) {
        
        const url = `${API_URL}/produtos/${id}`;
        
        return axios.get(url).then(response => response.data);
    }
}