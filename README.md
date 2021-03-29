# Reto-React-API

_APP capaz de interactuar con los endpoints de la API proporcionada por themoviedb_

## -TECNOLOGÍAS UTILIZADAS

* HTML5/CSS3/SCSS/GRIDLAYOUT
* REACT
* REDUX
* ES6
* API
* GIT

## -PASOS PARA HACER FUNCIONAR LA APLICACIÓN

_Esto es lo que tienes que hacer para poder poner a funcionar la aplicación en tu equipo_

### -PRE-REQUISITOS

_Necesitas tener instalado NODEJS_

_Necesitas tener habilitada la ejecución de scripts en tu sistema (Windows). Para ello, ejecutamos como administrador la aplicación PowerShell, y escribimos el siguiente comando:_ 

```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```
_e indicamos que "Sí" ante la pregunta que nos muestra el PowerShell_
  
### -INSTALACIÓN

_Instalamos Yarn:_
```
npm install --global yarn
```
_Instalamos react:_
```
npx create-react-app reto-trello
```

_Accedemos al directorio recién creado y proseguimos con la instalación de componentes:_

_Instalamos react router:_
```
yarn add react-router-dom axios
```
_Instalamos scss:_
```
yarn add node-sass@4.14.1
```
_Instalamos redux:_
```
npm install --save redux react-redux
```

### -DESCARGA

_Sustituimos las carpetas "src" y "public" del directorio donde acabamos de crear el proyecto de react por las carpetas "src" y "public" de este repositorio_


## -FUNCIONAMIENTO DE LA APLICACION

**PODEMOS BUSCAR TANTO PELICULAS COMO SERIES**

_La aplicación nos permite buscar por título, y en esa búsqueda nos mostrará:_

* Nombre
* Nombre original
* Género
* Fragmento de sinopsis
* Popularidad

_Podemos pulsar en cualquiera de los elementos que nos muestra la búsqueda, y podremos ver la siguiente información:_

* Nombre
* Nombre original
* Fecha de estreno
* Género
* Sinopsis completa
* Puntuación
* Cantidad de votos
* Casting que participó

_También podremos acceder a búsquedas ya predeterminadas, en el header de la aplicación:_

**PELICULAS**

_En el caso de las películas, podemos acceder a las siguientes búsquedas predeterminadas:_

* Próximamente en cines
* Películas actualmente en cines
* Películas más populares
* Películas más valoradas

**SERIES**

_En el caso de las series, podemos acceder a las siguientes búsquedas predeterminadas:_

* Series emitiéndose actualmente
* Series más populares
* Series más valoradas

**NAVEGACIÓN**
 * Desde cualquier parte de la APP (que no sea la pantalla de inicio) podrás acceder al buscador (icono de casa en el header de la APP)
 * Cuando haces una búsqueda desde el buscador y ves los detalles de algún resultado de la búsqueda pulsando en él, puedes acceder de nuevo a los resultados de la búsqueda pulsando la fecha blanca que aparece en la parte superior izquierda de la APP
 * Puedes cerrar las búsquedas predeterminadas pulsando la flecha negra que aparece en los resultados mostrados en esas búsquedas

## -OBSERVACIONES FINALES
Reto muy interesante de desarrollar, ya que se profundiza en el conocimiento y uso de la programación asíncrona así como en el funcionamiento de las API.
