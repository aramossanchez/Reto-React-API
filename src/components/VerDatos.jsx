import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { viendoDatosFalse, viendoBusquedaTrue, verBotonVolverFalse } from '../redux/actions';
import sinImagen from '../images/sin-imagen.jpg';
import volver from '../images/volver.png';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function VerDatos(props) {

    const fondo = {
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${ props.state.DatosParaMostrar.backdrop_path }")`
    }

    const volverBusquedas = () =>{
        props.CerrandoDetalles();
        props.MostrarResultadosDeBusquedaAnterior();
        props.OcultarBotonVolver();
    }

    return (
    <div className="datos">
        {props.state.VerBotonVolver &&
            <img src={volver} alt="Volver" onClick={()=>volverBusquedas()}/>
        }
        <div className="fondo-caratula-pelicula" style={fondo}></div>
        <div className="contenedor-imagen-datos">
            {props.state.DatosParaMostrar.poster_path===null &&
            <img src={sinImagen} alt="Sin Poster"/>
            }
            {props.state.DatosParaMostrar.poster_path!==null &&
            <img src={"https://image.tmdb.org/t/p/w500/" + props.state.DatosParaMostrar.poster_path} alt="Poster"/>
            }
        </div>
        <div className="contenedor-informacion-datos">
            <div className="titulo">
            {props.state.Peliculas &&
            <div>
                {props.state.DatosParaMostrar.title} ({props.state.DatosParaMostrar.original_title})
            </div>
            }
            {props.state.Series &&
            <div>
                {props.state.DatosParaMostrar.name}
            </div>
            }
            </div>
            {props.state.Peliculas &&
            <div>
            {props.state.DatosParaMostrar.release_date!=="" &&
            <div className="fecha-estreno">
                {props.state.DatosParaMostrar.release_date.split("-")[2] + "/" + props.state.DatosParaMostrar.release_date.split("-")[1] + "/" + props.state.DatosParaMostrar.release_date.split("-")[0]}
            </div>
            }
            </div>
            }
            {props.state.DatosParaMostrar.release_date==="" &&
            <div>
                No hay añadida ninguna fecha de estreno
            </div>
            }

            {props.state.DatosParaMostrar.genres.length===0 &&
            <div className="genero">
                No hay añadido ningún género
            </div>
            }

            {props.state.DatosParaMostrar.genres.length!==0 &&
            <div>
            {props.state.DatosParaMostrar.genres!==undefined &&
            <span>
                {props.state.DatosParaMostrar.genres.map((genero)=>{
                        return <span className="genero">{genero.name} </span>
                    })}
            </span>
            }
            </div>
            }

            {props.state.DatosParaMostrar.overview==="" &&
            <div className="sinopsis">
                <span>No hay añadida ninguna sinopsis</span> 
            </div>
            }

            {props.state.DatosParaMostrar.overview!=="" &&
            <div className="sinopsis">
                Sinopsis:
                <br/>
                <span>{props.state.DatosParaMostrar.overview}</span>
            </div>
            }

            

            <div>
                Puntuación: {props.state.DatosParaMostrar.vote_average}            
                <br/>
                Número de votos: {props.state.DatosParaMostrar.vote_count}            
            </div>
        </div>
    </div>            
    );
}

const traerEstado = (state) =>({
  state: state,
});

const accesoEstado = (dispatch) => ({
    CerrandoDetalles: viendoDatosFalse(dispatch),
    MostrarResultadosDeBusquedaAnterior: viendoBusquedaTrue(dispatch),
    OcultarBotonVolver: verBotonVolverFalse(dispatch),
})


const connected = connect (traerEstado,accesoEstado)(VerDatos);

export default connected;