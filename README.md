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

**Todos los cambios que realices en la aplicación se guardarán automaticamente en tu navegador, por lo que nunca perderás los datos guardados (puedes actualizar la página, cerrar la pestaña en donde está abierta la aplicación e incluso cerrar el navegador)**

_Para organizar y gestionar las tareas, uso Tableros, Listas y Tarjetas:_

**TABLEROS**

Es la forma básica de presentar los datos. En ellos es donde se crearán las listas y las tarjetas.
Cada tablero es independiente de los demás.
Los tableros permiten:
* Cambiar el nombre
* Elegir que tablero mostrar entre los que tenemos creados
* Cambiar la imagen de fondo
* Borrar tableros (siempre que no sea el tablero activo)
* Crear tableros nuevos
* Crear listas en ellos

**LISTAS**

Es la forma en la que agrupamos las tarjetas dentro de cada tablero. Podemos agregar tantas listas como queramos en nuestros tableros.
Las listas permiten:
* Cambiar el nombre
* Añadir tarjetas en ellas
* Copiar la lista y todo su contenido
* Cambiar la lista de posición
* Borrar la lista

**TARJETAS**

Es como denominamos a cada tarea. Las tarjetas se crean en las listas.
Las tarjetas permiten:
* Cambiar el nombre
* Cambiar la tarjeta de posición en la lista en la que está creada
* Cambiar la tarjeta de lista
* Borrar la tarjeta
* Añadir descripción
* Cambiar su color

**YA SOLO FALTA QUE EXPLORES POR TODOS LOS BOTONES Y RINCONES DE LA APLICACIÓN PARA DESCUBRIR TODO LO QUE PUEDES HACER**

## -OBSERVACIONES FINALES
Indicar, ya para finalizar, que ha sido el proyecto más entretenido y desafiante de todos los que se me han propuesto en Geeks Hubs Academy hasta la fecha. Ha sido apasionante ir desarrollando paso a paso esta aplicación, e ir descubriendo poco a poco la potencia de react.
