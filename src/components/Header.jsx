import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import axios from 'axios';
import { viendoDatosFalse, viendoBusquedaFalse, viendoInicioTrue, 
    verMasValoradasTrue, verMasValoradasFalse, guardarMasValoradasEstado, borrarMasValoradasFalse, 
    verMasPopularesTrue, verMasPopularesFalse, guardarMasPopularesEstado, borrarMasPopularesFalse,
    verActualmenteTrue, verActualmenteFalse, guardarActualmenteEstado, borrarActualmenteFalse,
    verPeliculasProximamenteTrue, verPeliculasProximamenteFalse, guardarPeliculasProximamenteEstado, borrarPeliculasProximamenteFalse,
    borrarResultadosBusquedaEstado, verBotonVolverFalse } from '../redux/actions';
import buscador from '../images/inicio.png';

/*api key ==> db181fc5219290173c2bab7820f37e39 */



function Buscador(props) {

    const mostrarInicio = () => {
        props.CerrandoResultadoDeBusqueda();
        props.CerrandoDetalles();
        props.MostrarBuscadorDeInicio();
        props.BorrarResultadosDeBusqueda();
        props.OcultarBotonVolver();
    }

    //PROXIMAMENTE EN CINES//
    const buscarPeliculasProximamenteEnCines = async () => {
        props.BorramosElListadoDePeliculasProximamenteEnCinesGuardado()
        await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1&region=es`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosPeliculasProximamenteEnCinesEnEstadoUnaAUna(res.data.results[i]);
            }
            
        });
        mostrarPeliculasProximamenteEnCines();
    }

    const mostrarPeliculasProximamenteEnCines = async () =>{
        await props.MostramosListadoDePeliculasProximamenteEnCines();
        await props.QuitamosBusquedaDeActualmente();
        await props.QuitamosBusquedaDeMasPopulares();
        await props.QuitamosBusquedaDeMasValoradas();
    }

    //ACTUALMENTE//
    const buscarActualmente = async () => {
        props.BorramosElListadoDeActualmenteGuardado()
        if(props.state.Peliculas){
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1&region=es`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosActualmenteEnEstadoUnaAUna(res.data.results[i]);
            }
        });
        }
        if (props.state.Series){
        await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosActualmenteEnEstadoUnaAUna(res.data.results[i]);
            }
        });
        }
        mostrarActualmente();
    }

    const mostrarActualmente = async () =>{
        await props.QuitamosBusquedaDePeliculasProximamenteEnCines();
        await props.MostramosListadoDeActualmente();
        await props.QuitamosBusquedaDeMasPopulares();
        await props.QuitamosBusquedaDeMasValoradas();
    }

    //MAS POPULARES//
    const buscarMasPopulares = async () => {
        props.BorramosElListadoDeMasPopularesGuardado()
        if(props.state.Peliculas){
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosMasPopularesEnEstadoUnaAUna(res.data.results[i]);
            }
            
        });
        }
        if (props.state.Series){
        await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosMasPopularesEnEstadoUnaAUna(res.data.results[i]);
            }
            
        });
        }
        mostrarMasPopulares();
    }

    const mostrarMasPopulares = async () =>{
        await props.QuitamosBusquedaDePeliculasProximamenteEnCines();
        await props.QuitamosBusquedaDeActualmente();
        await props.MostramosListadoDeMasPopulares();
        await props.QuitamosBusquedaDeMasValoradas();
    }

    //MAS VALORADAS//
    const buscarMasValoradas = async () => {
        props.BorramosElListadoDeMasValoradasGuardado()
        if(props.state.Peliculas){
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosMasValoradasEnEstadoUnaAUna(res.data.results[i]);
            }            
        });
        }
        if(props.state.Series){
        await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1`)
        .then(res => {
            for (let i = 0; i < 15; i++) {
                props.GuardamosMasValoradasEnEstadoUnaAUna(res.data.results[i]);
            }            
        });
        }
        mostrarMasValoradas();
    }

    const mostrarMasValoradas = async () =>{
        await props.QuitamosBusquedaDePeliculasProximamenteEnCines();
        await props.QuitamosBusquedaDeActualmente();
        await props.QuitamosBusquedaDeMasPopulares();
        await props.MostramosListadoDeMasValoradas();
    }

    return (
        <header>
            <div className="contenedor-header">
                {!props.state.ViendoInicio &&
                <div className="contenedor-imagen-buscador-header">
                    <img src={buscador} alt="Buscador" onClick={()=>mostrarInicio()}/>
                </div>
                }
                {props.state.ViendoInicio &&
                <div className="contenedor-busqueda-header">
                    {props.state.Peliculas &&
                    <div className="busqueda-header" onClick={()=>buscarPeliculasProximamenteEnCines()}>Próximamente en cines</div>
                    }
                    <div className="busqueda-header" onClick={()=>buscarActualmente()}>{props.state.Peliculas ? "Películas actualmente en cines" : "Series emitiéndose actualmente"}</div>
                    <div className="busqueda-header" onClick={()=>buscarMasPopulares()}>{props.state.Peliculas ? "Películas más populares" : "Series más populares"}</div>
                    <div className="busqueda-header" onClick={()=>buscarMasValoradas()}>{props.state.Peliculas ? "Películas más valoradas" : "Series más valoradas"}</div>
                </div>
                }
            </div>
        </header>
    );
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    CerrandoResultadoDeBusqueda: viendoBusquedaFalse(dispatch),
    CerrandoDetalles: viendoDatosFalse(dispatch),
    MostrarBuscadorDeInicio: viendoInicioTrue(dispatch),
    BorrarResultadosDeBusqueda: borrarResultadosBusquedaEstado(dispatch),
    OcultarBotonVolver: verBotonVolverFalse(dispatch),
    
    //PROXIMAMENTE EN CINES//
    MostramosListadoDePeliculasProximamenteEnCines: verPeliculasProximamenteTrue(dispatch),
    GuardamosPeliculasProximamenteEnCinesEnEstadoUnaAUna: guardarPeliculasProximamenteEstado(dispatch),
    BorramosElListadoDePeliculasProximamenteEnCinesGuardado: borrarPeliculasProximamenteFalse(dispatch),
    QuitamosBusquedaDePeliculasProximamenteEnCines: verPeliculasProximamenteFalse(dispatch),

    //ACTUALMENTE//
    MostramosListadoDeActualmente: verActualmenteTrue(dispatch),
    GuardamosActualmenteEnEstadoUnaAUna: guardarActualmenteEstado(dispatch),
    BorramosElListadoDeActualmenteGuardado: borrarActualmenteFalse(dispatch),
    QuitamosBusquedaDeActualmente: verActualmenteFalse(dispatch),

    //MAS POPULARES//
    MostramosListadoDeMasPopulares: verMasPopularesTrue(dispatch),
    GuardamosMasPopularesEnEstadoUnaAUna: guardarMasPopularesEstado(dispatch),
    BorramosElListadoDeMasPopularesGuardado: borrarMasPopularesFalse(dispatch),
    QuitamosBusquedaDeMasPopulares: verMasPopularesFalse(dispatch),

    //MAS VALORADAS//
    MostramosListadoDeMasValoradas: verMasValoradasTrue(dispatch),
    GuardamosMasValoradasEnEstadoUnaAUna: guardarMasValoradasEstado(dispatch),
    BorramosElListadoDeMasValoradasGuardado: borrarMasValoradasFalse(dispatch),
    QuitamosBusquedaDeMasValoradas: verMasValoradasFalse(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(Buscador);

export default connected;