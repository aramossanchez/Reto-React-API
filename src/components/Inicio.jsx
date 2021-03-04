import React from 'react';
import { connect } from 'react-redux';
import '../App.scss';
import Buscador from './Buscador.jsx';
import cuerda from '../images/cuerda.png';
import axios from 'axios';
import { guardarGenerosEnEstado } from '../redux/actions';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function Inicio(props) {

    React.useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=db181fc5219290173c2bab7820f37e39&language=es`)
            .then(res => {
                props.GuardamosLosGenerosDePeliculasEnEstado(res.data.genres);
            });
    })

    return (
        <div className="inicio">
            <img src={cuerda} alt="Cuerda-izq"/>
            <img src={cuerda} alt="Cuerda-der"/>
            <div className="buscador">
                <Buscador />
            </div>

        </div>
    );
}

const traerEstado = (state) => ({
    state: state,
});

const accesoEstado = (dispatch) => ({
    GuardamosLosGenerosDePeliculasEnEstado: guardarGenerosEnEstado(dispatch),
})

const connected = connect(traerEstado, accesoEstado)(Inicio);

export default connected;