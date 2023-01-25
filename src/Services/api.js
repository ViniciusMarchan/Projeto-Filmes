import axios from 'axios'

//Base da URL: https://api.themoviedb.org/3/

//URL da API: /movie/now_playing?api_key=2790b0af17c99f764a36b8023811a8e7&language=pt-BR

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});

export default api;