import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import sinImagen from '../images/sin-imagen.jpg';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function VerDatosPelicula(props) {

    const fondoPelicula = {
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${ props.state.PeliculaParaMostrar.backdrop_path }")`
    }

    return (
    <div className="datos-pelicula">
        <div className="fondo-caratula-pelicula" style={fondoPelicula}></div>
        <div className="contenedor-imagen-datos-pelicula">
            {props.state.PeliculaParaMostrar.poster_path===null &&
            <img src={sinImagen} alt="Sin Poster"/>
            }
            {props.state.PeliculaParaMostrar.poster_path!==null &&
            <img src={"https://image.tmdb.org/t/p/w500/" + props.state.PeliculaParaMostrar.poster_path} alt="Poster"/>
            }
        </div>
        <div className="contenedor-informacion-datos-pelicula">
            <div className="titulo">
            {props.state.PeliculaParaMostrar.title} ({props.state.PeliculaParaMostrar.original_title})
            </div>
            {props.state.PeliculaParaMostrar.release_date!=="" &&
            <div className="fecha-estreno">
                {props.state.PeliculaParaMostrar.release_date.split("-")[2] + "/" + props.state.PeliculaParaMostrar.release_date.split("-")[1] + "/" + props.state.PeliculaParaMostrar.release_date.split("-")[0]}
            </div>
            }

            {props.state.PeliculaParaMostrar.release_date==="" &&
            <div>
                No hay añadida ninguna fecha de estreno
            </div>
            }

            {props.state.PeliculaParaMostrar.genres.length===0 &&
            <div className="genero">
                No hay añadido ningún género
            </div>
            }

            {props.state.PeliculaParaMostrar.genres.length!==0 &&
            <div>
            {props.state.PeliculaParaMostrar.genres!==undefined &&
            <span>
                {props.state.PeliculaParaMostrar.genres.map((genero)=>{
                        return <span className="genero">{genero.name} </span>
                    })}
            </span>
            }
            </div>
            }

            {props.state.PeliculaParaMostrar.overview==="" &&
            <div className="sinopsis">
                <span>No hay añadida ninguna sinopsis</span> 
            </div>
            }

            {props.state.PeliculaParaMostrar.overview!=="" &&
            <div className="sinopsis">
                Sinopsis:
                <br/>
                <span>{props.state.PeliculaParaMostrar.overview}</span>
            </div>
            }

            

            <div>
                Puntuación: {props.state.PeliculaParaMostrar.vote_average}            
                <br/>
                Número de votos: {props.state.PeliculaParaMostrar.vote_count}            
            </div>
        </div>
    </div>            
    );
}

const traerEstado = (state) =>({
  state: state,
});


const connected = connect (traerEstado,null)(VerDatosPelicula);

export default connected;