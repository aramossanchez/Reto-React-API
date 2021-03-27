import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import axios from 'axios';
import { viendoDatosFalse, viendoBusquedaFalse, viendoInicioTrue, guardarDatosEnEstado, viendoDatosTrue, viendoInicioFalse,
    verPeliculasProximamenteFalse, guardarCastingEnEstado, borrarCastingDeEstado } from '../redux/actions';

/*api key ==> db181fc5219290173c2bab7820f37e39 */

function ProximamenteEnCines(props) {

    const peticionMostrarPelicula = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const datosPelicula = res.data
                props.GuardarInformacionDe1PeliculaParaSerMostrada(datosPelicula);
                quitarBusquedaMostrarPelicula();
                guardarCasting(id);
        });
    }

    const quitarBusquedaMostrarPelicula = async () => {
        await props.BorrarCastingDeEstado();
        await props.MostrarDetallesDePelicula();
        await props.CerramosLaPaginaDeInicio();
        await props.CerramosBusquedaDeProximamenteEnCines();
    }

    const guardarCasting = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const actores = res.data.cast;
                actores.map((actor)=>{
                    props.GuardarActoresDeUnoEnUnoEnEstado(actor);
                })
        });
    }

    return (
        <div className="mostrando-busqueda-header">
        <div className="boton-cerrar-busquedas" onClick={()=>props.CerramosBusquedaDeProximamenteEnCines()}>▲</div>
            {props.state.PeliculasProximamenteCines.map((pelicula)=>{
                return(
                    <div><img src={"https://image.tmdb.org/t/p/w500/" + pelicula.poster_path} alt="Poster" onClick={()=>peticionMostrarPelicula(pelicula.id)}/></div>
                )
            })}
        </div>
    );
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    GuardarInformacionDe1PeliculaParaSerMostrada: guardarDatosEnEstado(dispatch),
    CerrandoResultadoDeBusqueda: viendoBusquedaFalse(dispatch),
    CerrandoDetallesDePelicula: viendoDatosFalse(dispatch),
    MostrarBuscadorDeInicio: viendoInicioTrue(dispatch),
    MostrarDetallesDePelicula: viendoDatosTrue(dispatch),
    CerramosLaPaginaDeInicio: viendoInicioFalse(dispatch),
    CerramosBusquedaDeProximamenteEnCines: verPeliculasProximamenteFalse(dispatch),
    GuardarActoresDeUnoEnUnoEnEstado: guardarCastingEnEstado(dispatch),
    BorrarCastingDeEstado: borrarCastingDeEstado(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(ProximamenteEnCines);

export default connected;