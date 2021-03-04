export const guardarPeliculaEnEstado = (dispatch) => (datosPelicula) =>{
    dispatch({
        type:'GUARDAR_PELICULA_EN_ESTADO',
        datosPelicula: datosPelicula,
    })
};

export const guardarPopularesEnEstado = (dispatch) => (datosPelicula) =>{
    dispatch({
        type:'GUARDAR_POPULARES_EN_ESTADO',
        datosPelicula: datosPelicula,
    })
};

export const guardarBusquedaEnEstado = (dispatch) => (datosPelicula) =>{
    dispatch({
        type:'GUARDAR_BUSQUEDA_EN_ESTADO',
        datosPelicula: datosPelicula,
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

export const viendoPeliculaTrue = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_PELICULA_TRUE',
    })
};

export const viendoPeliculaFalse = (dispatch) => () =>{
    dispatch({
        type:'VIENDO_PELICULA_FALSE',
    })
};

export const guardarGenerosEnEstado = (dispatch) => (generos) =>{
    dispatch({
        type:'GUARDAR_GENEROS_PELICULAS',
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

