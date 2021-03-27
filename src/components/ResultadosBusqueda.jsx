import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { guardarDatosEnEstado, viendoDatosTrue, viendoBusquedaFalse, verBotonVolverTrue, guardarCastingEnEstado, borrarCastingDeEstado  } from '../redux/actions';
import axios from 'axios';
import sinImagen from '../images/sin-imagen.jpg';


function ResultadosBusqueda(props) {

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
        await props.QuitamosLosResultadosDeLaBusqueda();
        await props.MostrarDatos();
        await props.MostramosBotonDeVolverResultadosBusqueda();
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
        <div className="contenedor-busquedas">
            {props.state.Busqueda.length === 0 &&
                <div className="busqueda-sin-resultado">No hemos encontrado nada 🥺<br/>
                ¡Prueba a buscar otra cosa!</div>
            }
            {props.state.Busqueda.sort((a,b) => b.popularity - a.popularity).map((datos) => {
            return(
                <div className="busqueda-individual" onClick={()=>peticionMostrarInformacion(datos.id)}>
                    <div className="busqueda-con-imagen">
                        {datos.poster_path===null &&
                        <div className="contenedor-imagen-busqueda-individual">
                            <img src={sinImagen} alt="Sin Poster"/>
                        </div>
                        }
                        {datos.poster_path!==null &&
                        <div className="contenedor-imagen-busqueda-individual">
                            <img src={"https://image.tmdb.org/t/p/w500/" + datos.poster_path} alt="Poster"/>
                        </div>
                        }
                        <div className="contenedor-texto-busqueda-individual">
                            {props.state.Peliculas &&
                            <div className="busqueda-titulo">{datos.title} ({datos.original_title})</div>
                            }
                            {props.state.Series &&
                            <div className="busqueda-titulo">{datos.name}</div>
                            }
                            <div className="busqueda-genero">
                                {props.state.Generos.map((genero)=>{
                                    var genre = ""
                                    datos.genre_ids.map((id)=>{
                                        if(genero.id === id){
                                            genre=genero.name;
                                        }
                                    })
                                    if(genre!==""){
                                        return <span>{genre}</span>
                                    }
                                    
                                })}
                            </div>
                            <div className="busqueda-overview">{datos.overview}</div>
                            <div className="contenedor-popularidad">
                                <div>Popularidad: {datos.popularity}</div>
                            </div>
                        </div>
                        
                    </div>
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
    GuardarInformacionDe1PeliculaParaSerMostrada: guardarDatosEnEstado(dispatch),
    GuardarInformacionDe1SerieParaSerMostrada: guardarDatosEnEstado(dispatch),
    MostrarDatos: viendoDatosTrue(dispatch),
    QuitamosLosResultadosDeLaBusqueda: viendoBusquedaFalse(dispatch),
    MostramosBotonDeVolverResultadosBusqueda: verBotonVolverTrue(dispatch),
    GuardarActoresDeUnoEnUnoEnEstado: guardarCastingEnEstado(dispatch),
    BorrarCastingDeEstado: borrarCastingDeEstado(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(ResultadosBusqueda);

export default connected;