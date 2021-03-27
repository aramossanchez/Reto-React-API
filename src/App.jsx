import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Inicio from './components/Inicio.jsx';
import VerDatos from './components/VerDatos.jsx';
import ResultadosBusqueda from './components/ResultadosBusqueda.jsx';
import Header from './components/Header.jsx';
import MasValoradas from './components/MasValoradas.jsx';
import MasPopulares from './components/MasPopulares.jsx';
import ActualmenteEmitiendose from './components/ActualmenteEmitiendose.jsx';
import ProximamenteEnCines from './components/ProximamenteEnCines.jsx';
import VerCasting from './components/VerCasting.jsx';

/*api key ==> db181fc5219290173c2bab7820f37e39*/

function App(props) {

    const h = window.outerHeight;

    const estilo = {
        minHeight: h,
    }
    
    return (
        <div className="App" style={estilo}>
            <Header/>
            {props.state.VerPeliculasProximamente &&
                <ProximamenteEnCines/>
            }
            {props.state.VerActualmente &&
                <ActualmenteEmitiendose/>
            }
            {props.state.VerMasPopulares &&
                <MasPopulares/>
            }
            {props.state.VerMasValoradas &&
                <MasValoradas/>
            }
            {props.state.ViendoInicio &&
            <Inicio/>
            }
            {props.state.ViendoBusqueda &&
            <div className="resultados-busqueda">
                <ResultadosBusqueda />
            </div>
            }
            {props.state.ViendoDatos &&
            <div className="viendo-datos">
                <VerDatos/>
                <VerCasting/>
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