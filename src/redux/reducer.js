const estadoInicial = {
    PeliculaParaMostrar:{},
    PeliculasPopulares:[],
    BusquedaDePeliculas:"",
    GenerosPeliculas:"",
    ViendoInicio:true,
    ViendoBusqueda:false,
    ViendoPelicula: false,
    VerBotonVolver: false,
};

const statePersistance = () => {
    if(localStorage.getItem('estado')==null){
        return estadoInicial
    }
    return JSON.parse(localStorage.getItem('estado'));
}

function reducer (state = statePersistance(), action){
    switch(action.type){
        case 'GUARDAR_PELICULA_EN_ESTADO':       
            return{
                ...state,
                PeliculaParaMostrar:
                    {
                        title:action.datosPelicula.title,
                        original_title:action.datosPelicula.original_title,
                        overview:action.datosPelicula.overview,
                        release_date:action.datosPelicula.release_date,
                        vote_count:action.datosPelicula.vote_count,
                        genres:action.datosPelicula.genres,
                        poster_path:action.datosPelicula.poster_path,
                        vote_average:action.datosPelicula.vote_average,
                        backdrop_path:action.datosPelicula.backdrop_path,
                    }
            }

        case 'GUARDAR_POPULARES_EN_ESTADO':       
            return{
                ...state,
                PeliculasPopulares:[
                    ...state.PeliculasPopulares,
                    {
                        id: action.datosPelicula.id,
                        title:action.datosPelicula.title,
                        poster_path:action.datosPelicula.poster_path,
                    }
                ] 
            }

        case 'GUARDAR_BUSQUEDA_EN_ESTADO':       
            return{
                ...state,
                BusquedaDePeliculas: action.datosPelicula
            }

        case 'GUARDAR_GENEROS_PELICULAS':
            return{
                ...state,
                GenerosPeliculas: action.generos
            }    



        case 'BORRAR_RESULTADOS_BUSQUEDA_ESTADO':       
            return{
                ...state,
                BusquedaDePeliculas:[] 
            }    

        case 'VIENDO_INICIO_FALSE':       
            return{
                ...state,
                ViendoInicio:false, 
            }

        case 'VIENDO_INICIO_TRUE':       
            return{
                ...state,
                ViendoInicio:true, 
            }

        case 'VIENDO_BUSQUEDA_FALSE':       
            return{
                ...state,
                ViendoBusqueda:false, 
            }

        case 'VIENDO_BUSQUEDA_TRUE':       
            return{
                ...state,
                ViendoBusqueda:true, 
            }

        case 'VIENDO_PELICULA_FALSE':       
            return{
                ...state,
                ViendoPelicula:false, 
            }

        case 'VIENDO_PELICULA_TRUE':       
            return{
                ...state,
                ViendoPelicula:true, 
            }    

        case 'VER_BOTON_VOLVER_TRUE':
            return{
                ...state,
                VerBotonVolver:true,
            }

        case 'VER_BOTON_VOLVER_FALSE':
            return{
                ...state,
                VerBotonVolver:false,
            }
            
        default:
            return state;
    }
};

export default reducer;
