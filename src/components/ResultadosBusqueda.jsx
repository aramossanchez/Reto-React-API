import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { guardarPeliculaEnEstado, viendoPeliculaTrue, viendoBusquedaFalse  } from '../redux/actions';
import axios from 'axios';
import sinImagen from '../images/sin-imagen.jpg';

function ResultadosBusqueda(props) {

    const peticionMostrarPelicula = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const datosPelicula = res.data
                props.GuardarInformacionDe1PeliculaParaSerMostrada(datosPelicula);
                console.log(datosPelicula);
                quitarBusquedaMostrarPelicula();
        });
        
    }

    const quitarBusquedaMostrarPelicula = async () => {
        await props.QuitamosLosResultadosDeLaBusqueda();
        await props.MostrarDetallesDePelicula();
    }

    return (
        <div className="contenedor-busquedas">
            {props.state.BusquedaDePeliculas.map((pelicula) => {
            return(
                <div className="busqueda-peliculas-individual" onClick={()=>peticionMostrarPelicula(pelicula.id)}>
                    {pelicula.poster_path===null &&
                    <div className="busqueda-con-imagen">
                        <div className="contenedor-imagen-busqueda-individual">
                        <img src={sinImagen} alt="Sin Poster"/>
                        </div>
                        <div className="contenedor-texto-busqueda-individual">
                            <div class="busqueda-titulo-pelicula">{pelicula.title} <br/>({pelicula.original_title})</div>
                            <div>{pelicula.overview}</div>
                        </div>
                    </div>
                    }
                    {pelicula.poster_path!==null &&
                    <div className="busqueda-con-imagen">
                        <div className="contenedor-imagen-busqueda-individual">
                            <img src={"https://image.tmdb.org/t/p/w500/" + pelicula.poster_path} alt="Poster"/>
                        </div>
                        <div className="contenedor-texto-busqueda-individual">
                            <div className="busqueda-titulo-pelicula">{pelicula.title} <br/>({pelicula.original_title})</div>
                            <div>{pelicula.overview}</div>
                        </div>
                    </div>
                    }
                </div>
            )
        })}
        </div>
    ) 
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    GuardarInformacionDe1PeliculaParaSerMostrada: guardarPeliculaEnEstado(dispatch),
    MostrarDetallesDePelicula: viendoPeliculaTrue(dispatch),
    QuitamosLosResultadosDeLaBusqueda: viendoBusquedaFalse(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(ResultadosBusqueda);

export default connected;