export const buscarPeliculasTrue = (dispatch) => () =>{
    dispatch({
        type:'BUSCAR_PELICULAS_TRUE',
    })
};

export const buscarPeliculasFalse = (dispatch) => () =>{
    dispatch({
        type:'BUSCAR_PELICULAS_FALSE',
    })
};

export const buscarSeriesTrue = (dispatch) => () =>{
    dispatch({
        type:'BUSCAR_SERIES_TRUE',
    })
};

export const buscarSeriesFalse = (dispatch) => () =>{
    dispatch({
        type:'BUSCAR_SERIES_FALSE',
    })
};

export const guardarDatosEnEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDAR_DATOS_EN_ESTADO',
        datos: datos,
    })
};

export const guardarCastingEnEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDAR_CASTING_EN_ESTADO',
        datos: datos,
    })
};

export const borrarCastingDeEstado = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_CASTING_DE_ESTADO',
    })
};

export const guardarBusquedaEnEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDAR_BUSQUEDA_EN_ESTADO',
        datos: datos,
    })
};

export const borrarResultadosBusquedaEstado = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_RESULTADOS_BUSQUEDA_ESTADO',
    })
};

export const viendoInicioTrue = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_INICIO_TRUE',
    })
};

export const viendoInicioFalse = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_INICIO_FALSE',
    })
};

export const viendoBusquedaTrue = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_BUSQUEDA_TRUE',
    })
};

export const viendoBusquedaFalse = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_BUSQUEDA_FALSE',
    })
};

export const viendoDatosTrue = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_DATOS_TRUE',
    })
};

export const viendoDatosFalse = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_DATOS_FALSE',
    })
};

export const guardarGenerosEnEstado = (dispatch) => (generos) =>{
    dispatch({
        type:'GUARDAR_GENEROS',
        generos: generos,
    })
};

export const verBotonVolverTrue = (dispatch) => () =>{
    dispatch({
        type:'VER_BOTON_VOLVER_TRUE',
    })
};

export const verBotonVolverFalse = (dispatch) => () =>{
    dispatch({
        type:'VER_BOTON_VOLVER_FALSE',
    })
};

//MAS VALORADAS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const verMasValoradasTrue = (dispatch) => () =>{
    dispatch({
        type:'VER_MAS_VALORADAS_TRUE',
    })
};

export const verMasValoradasFalse = (dispatch) => () =>{
    dispatch({
        type:'VER_MAS_VALORADAS_FALSE',
    })
};

export const guardarMasValoradasEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDA_MAS_VALORADAS',
        datos: datos,
    })
};

export const borrarMasValoradasFalse = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_MAS_VALORADAS',
    })
};

//MAS POPULARES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const verMasPopularesTrue = (dispatch) => () =>{
    dispatch({
        type:'VER_MAS_POPULARES_TRUE',
    })
};

export const verMasPopularesFalse = (dispatch) => () =>{
    dispatch({
        type:'VER_MAS_POPULARES_FALSE',
    })
};

export const guardarMasPopularesEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDA_MAS_POPULARES',
        datos: datos,
    })
};

export const borrarMasPopularesFalse = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_MAS_POPULARES',
    })
};

//ACTUALMENTE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const verActualmenteTrue = (dispatch) => () =>{
    dispatch({
        type:'VER_ACTUALMENTE_TRUE',
    })
};

export const verActualmenteFalse = (dispatch) => () =>{
    dispatch({
        type:'VER_ACTUALMENTE_FALSE',
    })
};

export const guardarActualmenteEstado = (dispatch) => (datos) =>{
    dispatch({
        type:'GUARDA_ACTUALMENTE',
        datos: datos,
    })
};

export const borrarActualmenteFalse = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_ACTUALMENTE',
    })
};

//PROXIMAMENTE EN CINES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const verPeliculasProximamenteTrue = (dispatch) => () =>{
    dispatch({
        type:'VER_PELICULAS_PROXIMAMENTE_TRUE',
    })
};

export const verPeliculasProximamenteFalse = (dispatch) => () =>{
    dispatch({
        type:'VER_PELICULAS_PROXIMAMENTE_FALSE',
    })
};

export const guardarPeliculasProximamenteEstado = (dispatch) => (datosPelicula) =>{
    dispatch({
        type:'GUARDA_PELICULAS_PROXIMAMENTE',
        datosPelicula: datosPelicula,
    })
};

export const borrarPeliculasProximamenteFalse = (dispatch) => () =>{
    dispatch({
        type:'BORRAR_PELICULAS_PROXIMAMENTE',
    })
};

