import { useEffect, useState } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import './home.css';

//URL da API: /movie/now_playing?api_key=2790b0af17c99f764a36b8023811a8e7&language=pt-BR


function Home(){

const [Filmes, setFilmes] = useState([])
const [loading, setLoading] = useState([true]);

useEffect(() => {

    async function loadFilmes(){
       const response = await api.get("movie/now_playing", {
        params:{
            api_key: "2790b0af17c99f764a36b8023811a8e7",
            language: "pt-BR",
            page: "1"
        }
       })

       setFilmes(response.data.results.slice(0, 10))
       setLoading(false)
    };

    loadFilmes();

}, [])

if(loading){
    return(
    <div className='loading'>
        <h2>Carregando...</h2>
    </div>
    )
}
    
    return(
        <div className='container'>
              <div className='lista-filmes'>
                {Filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
              </div>
        </div>
    )
}

export default Home;