import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { viendoPeliculaFalse, viendoBusquedaFalse, viendoInicioTrue, viendoBusquedaTrue, verBotonVolverFalse } from '../redux/actions';
import buscador from '../images/inicio.png';
import volver from '../images/volver.png';

/*api key ==> db181fc5219290173c2bab7820f37e39 */



function Buscador(props) {

    const mostrarInicio = () => {
        props.CerrandoResultadoDeBusqueda();
        props.CerrandoDetallesDePelicula();
        props.MostrarBuscadorDeInicio();
    }

    const volverBusquedas = () =>{
        props.CerrandoDetallesDePelicula();
        props.MostrarResultadosDeBusquedaAnterior();
        props.OcultarBotonVolver();
    }

    return (
        <header>
            {props.state.VerBotonVolver &&
            <img src={volver} alt="Volver" onClick={()=>volverBusquedas()}/>
            }
            <img src={buscador} alt="Buscador" onClick={()=>mostrarInicio()}/>
        </header>
    );
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    CerrandoResultadoDeBusqueda: viendoBusquedaFalse(dispatch),
    CerrandoDetallesDePelicula: viendoPeliculaFalse(dispatch),
    MostrarBuscadorDeInicio: viendoInicioTrue(dispatch),
    MostrarResultadosDeBusquedaAnterior: viendoBusquedaTrue(dispatch),
    OcultarBotonVolver: verBotonVolverFalse(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(Buscador);

export default connected;