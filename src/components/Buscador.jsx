import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { guardarPopularesEnEstado, guardarPeliculaEnEstado, guardarBusquedaEnEstado, borrarResultadosBusquedaEstado, viendoInicioFalse, viendoBusquedaTrue } from '../redux/actions';
import axios from 'axios';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function Buscador(props) {
    const peticionListaPeliculasPopulares = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
            .then(res => {
            const peliculas = res.data;
            for (let i = 0; i < 10; i++) {
                props.Guardamos10PeliculasPopularesEnEstado(peliculas.results[i]);
            }
        })
    }

    const peticionMostrarPelicula = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const datosPelicula = res.data
                props.GuardarInformacionDe1PeliculaParaSerMostrada(datosPelicula);
                console.log(datosPelicula);
        })
    }

    const hacerBusqueda = (e) => {
        if(e.keyCode === 13 && e.target.value.trim()){
            props.OcultarInicio();
            props.VemosResultadoDeBusqueda();
            props.BorramosLaBusquedaAnterior();
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=db181fc5219290173c2bab7820f37e39&language=es&query=${e.target.value.trim()}&page=1&include_adult=false`)
            .then(res => {
                const numeroDePaginas = res.data.total_pages
                console.log(e.target.value.trim() + numeroDePaginas);
                for (let i = 1; i <= numeroDePaginas; i++) {
                    guardarBusqueda(e.target.value.trim(), i);
                }
            });
        }
    }

    const guardarBusqueda = async (criteroDeBusqueda, numeroDePagina) => {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=db181fc5219290173c2bab7820f37e39&language=es&query=${criteroDeBusqueda}&page=${numeroDePagina}&include_adult=false`)
            .then(res => {
            const busquedaDePeliculas = res.data;
            console.log(busquedaDePeliculas);
            console.log(busquedaDePeliculas.results.length);
            for (let i = 0; i < busquedaDePeliculas.results.length; i++) {
                props.GuardamosTodasLasPeliculasDeLaBusqueda(busquedaDePeliculas.results[i]);
            }
            }
        );
    }

    return (
        <div>
            <div>
                <input 
                type="text"
                onKeyUp={(e)=>hacerBusqueda(e)}/>
            </div>
            {props.state.PeliculasPopulares[0] === undefined &&
                <div className="boton" onClick={()=>peticionListaPeliculasPopulares()}>Top 10 Películas más populares</div>
            }
            {props.state.PeliculasPopulares !== undefined &&
                <div className="peliculas-populares">
                    {props.state.PeliculasPopulares.map((pelicula) => {
                        return(
                            <div className="pelicula-popular" onClick={()=>peticionMostrarPelicula(pelicula.id)}>
                                <div>{pelicula.title}</div>
                                <div>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + pelicula.poster_path} alt="Poster"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    Guardamos10PeliculasPopularesEnEstado: guardarPopularesEnEstado(dispatch),
    GuardarInformacionDe1PeliculaParaSerMostrada: guardarPeliculaEnEstado(dispatch),
    GuardamosTodasLasPeliculasDeLaBusqueda: guardarBusquedaEnEstado(dispatch),
    BorramosLaBusquedaAnterior: borrarResultadosBusquedaEstado(dispatch),
    OcultarInicio: viendoInicioFalse(dispatch),
    VemosResultadoDeBusqueda: viendoBusquedaTrue(dispatch,)
})

const connected = connect (traerEstado,accesoEstado)(Buscador);

export default connected;