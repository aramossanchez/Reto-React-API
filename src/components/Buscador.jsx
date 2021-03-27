import React from 'react';
import {connect} from 'react-redux';
import '../App.scss';
import { guardarDatosEnEstado, guardarBusquedaEnEstado, borrarResultadosBusquedaEstado, viendoInicioFalse, viendoBusquedaTrue,
    buscarPeliculasTrue, buscarPeliculasFalse, buscarSeriesTrue, buscarSeriesFalse, guardarGenerosEnEstado,
    verMasValoradasFalse, verMasPopularesFalse, verActualmenteFalse, verPeliculasProximamenteFalse } from '../redux/actions';
import axios from 'axios';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function Buscador(props) {

    const criterioBusqueda = React.useRef();

    const activo = {
        backgroundColor: "white",
        color: "#35468c",
    }

    const inactivo = {
        backgroundColor: "#35468c",
        color: "#7FB2F0",
        transform: "scalex(0.5)",
    }

    const cerrarBusquedasHeader = () =>{
        props.CerramosBusquedaDeProximamenteEnCines();
        props.CerramosBusquedaDeActualmente();
        props.CerramosBusquedaDeMasPoPulares();
        props.CerramosBusquedaDeMasValoradas();
    }

    const modoPeliculas = () =>{
        props.ModoPeliculasON();
        props.ModoSerieOFF();
        cerrarBusquedasHeader();
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                props.GuardamosLosGenerosEnEstado(res.data.genres);
            });
    }

    const modoSeries = () =>{
        props.ModoSerieON();
        props.ModoPeliculasOFF();
        cerrarBusquedasHeader();
        axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                props.GuardamosLosGenerosEnEstado(res.data.genres);
            });
    }

    const hacerBusqueda = (e) => {
        if(e.keyCode === 13 && e.target.value.trim()){
            props.OcultarInicio();
            props.VemosResultadoDeBusqueda();
            props.BorramosLaBusquedaAnterior();
            {props.state.Peliculas &&
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=db181fc5219290173c2bab7820f37e39&language=es&query=${e.target.value.trim()}&page=1&include_adult=false`)
            .then(res => {
                guardarBusqueda(res);
            });
            }
            {props.state.Series &&
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1&query=${e.target.value.trim()}&include_adult=false`)
            .then(res => {
                guardarBusqueda(res);
            });
            }
        }
    }

    const hacerBusquedaBoton = () =>{
        if(criterioBusqueda.current.value.trim()){
            props.OcultarInicio();
            props.VemosResultadoDeBusqueda();
            props.BorramosLaBusquedaAnterior();
            {props.state.Peliculas &&
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=db181fc5219290173c2bab7820f37e39&language=es&query=${criterioBusqueda.current.value.trim()}&page=1&include_adult=false`)
            .then(res => {
                guardarBusqueda(res);
            });
            }
            {props.state.Series &&
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=db181fc5219290173c2bab7820f37e39&language=es&page=1&query=${criterioBusqueda.current.value.trim()}&include_adult=false`)
            .then(res => {
                guardarBusqueda(res);
            });
            }
        }
    }

    const guardarBusqueda = async (res) => {
        const busqueda = await res.data
        var datosParaGuardaEnEstado = [];
        for (let i = 0; i < 10; i++) {
            if(busqueda.results[i]!==undefined){
                await datosParaGuardaEnEstado.push(busqueda.results[i]);
            }
        }
        props.GuardamosTodosLosDatosDeLaBusqueda(datosParaGuardaEnEstado);
    }

    return (
        <div>
            <div className="titulo-buscador">
                <div>{props.state.Peliculas ? "¡Prueba a buscar el título de cualquier película!" : "¡Prueba a buscar el título de cualquier serie!"}</div> 
            </div>
            <div className="eleccion-buscador">
                <div onClick={()=>modoPeliculas()} style={props.state.Peliculas ? activo : inactivo}>Peliculas</div>
                <div onClick={()=>modoSeries()} style={props.state.Series ? activo : inactivo}>Series</div>
            </div>
            <div className="contenedor-input">
                <input 
                ref={criterioBusqueda}
                autoFocus
                type="text"
                onKeyUp={(e)=>hacerBusqueda(e)}
                placeholder={props.state.Peliculas ? "🔍 Busca una película..." : "🔍 Busca una serie..."} 
                />
                <div onClick={()=>hacerBusquedaBoton()}>Buscar</div>
            </div>
        </div>
    );
}

const traerEstado = (state) =>({
    state: state,
});

const accesoEstado = (dispatch) => ({
    GuardarInformacionDe1PeliculaParaSerMostrada: guardarDatosEnEstado(dispatch),
    GuardamosTodosLosDatosDeLaBusqueda: guardarBusquedaEnEstado(dispatch),
    BorramosLaBusquedaAnterior: borrarResultadosBusquedaEstado(dispatch),
    OcultarInicio: viendoInicioFalse(dispatch),
    VemosResultadoDeBusqueda: viendoBusquedaTrue(dispatch),
    ModoPeliculasON:buscarPeliculasTrue(dispatch),
    ModoPeliculasOFF: buscarPeliculasFalse(dispatch),
    ModoSerieON: buscarSeriesTrue(dispatch),
    ModoSerieOFF: buscarSeriesFalse(dispatch),
    GuardamosLosGenerosEnEstado: guardarGenerosEnEstado(dispatch),
    CerramosBusquedaDeProximamenteEnCines: verPeliculasProximamenteFalse(dispatch),
    CerramosBusquedaDeActualmente: verActualmenteFalse(dispatch),
    CerramosBusquedaDeMasPoPulares: verMasPopularesFalse(dispatch),
    CerramosBusquedaDeMasValoradas: verMasValoradasFalse(dispatch),
})

const connected = connect (traerEstado,accesoEstado)(Buscador);

export default connected;