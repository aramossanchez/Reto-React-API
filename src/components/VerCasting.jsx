import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import sinImagen from '../images/sin-imagen.jpg';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function VerCasting(props) {
    
    return (
        <div>
            <div className="titulo-casting">{props.state.CastingParaMostrar.length === 0 ? "Sin datos del casting" : "Casting"}</div> 
            <div className="casting">
                {props.state.CastingParaMostrar.map((casting)=>{
                    return(
                        <div className="datos-actores">
                            {casting.profile_path!==null &&
                            <img src={"https://image.tmdb.org/t/p/w500/" + casting.profile_path} alt="Poster"/>
                            }
                            {casting.profile_path===null &&
                            <img src={sinImagen} alt="Sin Poster"/>
                            }
                            <div className="nombres">
                                Nombre: <br/>
                                <span>{casting.original_name}</span><br/>
                                Personaje: <br/>
                                {casting.character!=="" &&
                                <span>{casting.character}</span>
                                }
                                {casting.character==="" &&
                                <span>Sin datos</span>
                                }
                            </div>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    );
}

const traerEstado = (state) =>({
  state: state,
});

const accesoEstado = (dispatch) => ({
    
})


const connected = connect (traerEstado,accesoEstado)(VerCasting);

export default connected;