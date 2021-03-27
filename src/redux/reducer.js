const estadoInicial = {
    Peliculas:true,
    Series: false,
    DatosParaMostrar:{},
    CastingParaMostrar: [],
    MasPopulares:[],
    MasValoradas: [],
    Actualmente: [],
    PeliculasProximamenteCines: [],
    Busqueda:"",
    Generos:"",
    ViendoInicio:true,
    ViendoBusqueda:false,
    ViendoDatos: false,
    VerBotonVolver: false,
    VerMasValoradas: false,
    VerMasPopulares: false,
    VerActualmente: false,
    VerPeliculasProximamente: false,
};

function reducer (state = estadoInicial, action){
    switch(action.type){

        case 'BUSCAR_PELICULAS_TRUE':
            return{
                ...state,
                Peliculas:true
            }

        case 'BUSCAR_PELICULAS_FALSE':
            return{
                ...state,
                Peliculas:false
            }

        case 'BUSCAR_SERIES_TRUE':
            return{
                ...state,
                Series:true
            }

        case 'BUSCAR_SERIES_FALSE':
            return{
                ...state,
                Series:false
            }

        case 'GUARDAR_DATOS_EN_ESTADO':       
            return{
                ...state,
                DatosParaMostrar: action.datos
            }

        case 'GUARDAR_CASTING_EN_ESTADO':       
            return{
                ...state,
                CastingParaMostrar:[
                    ...state.CastingParaMostrar,
                    {
                        original_name:action.datos.original_name,
                        profile_path:action.datos.profile_path,
                        character:action.datos.character,
                    }
                ]
            }

        case 'BORRAR_CASTING_DE_ESTADO':       
            return{
                ...state,
                CastingParaMostrar:[]
            }

        case 'GUARDAR_BUSQUEDA_EN_ESTADO':       
            return{
                ...state,
                Busqueda: action.datos
            }

        case 'GUARDAR_GENEROS':
            return{
                ...state,
                Generos: action.generos
            }    



        case 'BORRAR_RESULTADOS_BUSQUEDA_ESTADO':       
            return{
                ...state,
                Busqueda:[]
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

        case 'VIENDO_DATOS_FALSE':       
            return{
                ...state,
                ViendoDatos:false, 
            }

        case 'VIENDO_DATOS_TRUE':       
            return{
                ...state,
                ViendoDatos:true, 
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

//MAS VALORADAS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        case 'VER_MAS_VALORADAS_TRUE':
            return{
                ...state,
                VerMasValoradas:true
            }

        case 'VER_MAS_VALORADAS_FALSE':
            return{
                ...state,
                VerMasValoradas:false
            }

        case 'GUARDA_MAS_VALORADAS':
            return{
                ...state,
                MasValoradas:[
                    ...state.MasValoradas,
                    {
                        id:action.datos.id,
                        title:action.datos.title,
                        poster_path:action.datos.poster_path,
                    }
                ]
            }

        case 'BORRAR_MAS_VALORADAS':
            return{
                ...state,
                MasValoradas:[]
            }

//MAS POPULARES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        case 'VER_MAS_POPULARES_TRUE':
            return{
                ...state,
                VerMasPopulares:true
            }

        case 'VER_MAS_POPULARES_FALSE':
            return{
                ...state,
                VerMasPopulares:false
            }

        case 'GUARDA_MAS_POPULARES':
            return{
                ...state,
                MasPopulares:[
                    ...state.MasPopulares,
                    {
                        id:action.datos.id,
                        title:action.datos.title,
                        poster_path:action.datos.poster_path,
                    }
                ]
            }

        case 'BORRAR_MAS_POPULARES':
            return{
                ...state,
                MasPopulares:[]
            }

//ACTUALMENTE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        case 'VER_ACTUALMENTE_TRUE':
            return {
                ...state,
                VerActualmente: true
            }

        case 'VER_ACTUALMENTE_FALSE':
            return {
                ...state,
                VerActualmente: false
            }

        case 'GUARDA_ACTUALMENTE':
            return {
                ...state,
                Actualmente: [
                    ...state.Actualmente,
                    {
                        id: action.datos.id,
                        title: action.datos.title,
                        poster_path: action.datos.poster_path,
                    }
                ]
            }

        case 'BORRAR_ACTUALMENTE':
            return {
                ...state,
                Actualmente: []
            }

//PROXIMAMENTE EN CINES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        case 'VER_PELICULAS_PROXIMAMENTE_TRUE':
            return {
                ...state,
                VerPeliculasProximamente: true
            }

        case 'VER_PELICULAS_PROXIMAMENTE_FALSE':
            return {
                ...state,
                VerPeliculasProximamente: false
            }

        case 'GUARDA_PELICULAS_PROXIMAMENTE':
            return {
                ...state,
                PeliculasProximamenteCines: [
                    ...state.PeliculasProximamenteCines,
                    {
                        id: action.datosPelicula.id,
                        title: action.datosPelicula.title,
                        poster_path: action.datosPelicula.poster_path,
                    }
                ]
            }

        case 'BORRAR_PELICULAS_PROXIMAMENTE':
            return {
                ...state,
                PeliculasProximamenteCines: []
            }

        default:
            return state;
    }
};

export default reducer;
