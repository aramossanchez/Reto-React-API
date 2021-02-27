import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import axios from 'axios';
import { guardarPeliculaEnEstado } from './redux/actions';
import VerDatosPelicula from './components/verDatosPelicula.jsx';
import Buscador from './components/Buscador.jsx';
import ResultadosBusqueda from './components/ResultadosBusqueda.jsx';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function App(props) {
  /*
    React.useEffect(()=>{
        localStorage.setItem('estado',JSON.stringify(props.state));
    },[props.state]);
*/
    return (
        <div className="App">
            <header>

            </header>
            {props.state.ViendoInicio &&
            <div className="inicio">
                <div className="buscador">
                    <Buscador />
                </div>
                
            </div>
            }
            {props.state.ViendoBusqueda &&
            <div className="resultados-busqueda">
                <ResultadosBusqueda />
            </div>
            }
            {props.state.ViendoPelicula &&
            <div className="viendo-pelicula">
                <VerDatosPelicula />
            </div>
            }
        </div>
    );
}

const traerEstado = (state) => ({
  state: state,
});


const accesoEstado = (dispatch) => ({
})


const connected = connect(traerEstado, accesoEstado)(App);

export default connected;