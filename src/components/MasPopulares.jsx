import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import axios from 'axios';
import { viendoDatosFalse, viendoBusquedaFalse, viendoInicioTrue, guardarDatosEnEstado, viendoDatosTrue, viendoInicioFalse,
    verMasPopularesFalse,guardarCastingEnEstado, borrarCastingDeEstado  } from '../redux/actions';

/*api key ==> db181fc5219290173c2bab7820f37e39 */



function MasPopulares(props) {

    const peticionMostrarInformacion = (id) => {
        {props.state.Peliculas &&
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const informacion = res.data
                props.GuardarInformacionDe1PeliculaParaSerMostrada(informacion);
                quitarBusqueda();
                guardarCasting(id);
        });
        }
        {props.state.Series &&
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const informacion = res.data
                props.GuardarInformacionDe1SerieParaSerMostrada(informacion);
                quitarBusqueda();
                guardarCasting(id);
        });
        }
    }

    const quitarBusqueda = async () => {
        await props.BorrarCastingDeEstado();
        await props.MostrarDetalles();
        await props.CerramosLaPaginaDeInicio();
        await props.CerramosLaBusquedaDeMasPopulares();
    }

    const guardarCasting = (id) => {
        {props.state.Peliculas &&
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const actores = res.data.cast;
                actores.map((actor)=>{
                    props.GuardarActoresDeUnoEnUnoEnEstado(actor);
                })
        });
        }
        {props.state.Series &&
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                const actores = res.data.cast;
                actores.map((actor)=>{
                    props.GuardarActoresDeUnoEnUnoEnEstado(actor);
                })
        });
        }
    }

    return (
        <div className="mostrando-busqueda-header">
        <div className="boton-cerrar-busquedas" onClick={()=>props.CerramosLaBusquedaDeMasPopulares()}>▲</div>
            {props.state.MasPopulares.map((datos)=>{
                return(
                    <div><img src={"https://image.tmdb.org/t/p/w500/" + datos.poster_path} alt="Poster" onClick={()=>peticionMostrarInformacion(datos.id)}/></div>
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
    GuardarInformacionDe1SerieParaSerMostrada: guardarDatosEnEstado(dispatch),
    CerrandoResultadoDeBusqueda: viendoBusquedaFalse(dispatch),
    CerrandoDetalles: viendoDatosFalse(dispatch),
    MostrarBuscadorDeInicio: viendoInicioTrue(dispatch),
    MostrarDetalles: viendoDatosTrue(dispatch),
    CerramosLaPaginaDeInicio: viendoInicioFalse(dispatch),
    CerramosLaBusquedaDeMasPopulares: verMasPopularesFalse(dispatch),
    GuardarActoresDeUnoEnUnoEnEstado: guardarCastingEnEstado(dispatch),
    BorrarCastingDeEstado: borrarCastingDeEstado(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(MasPopulares);

export default connected;