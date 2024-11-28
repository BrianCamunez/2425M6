1. Creo la carpeta sesion3ExamenBrian
2. Inicio el proyecto abriendo la terminal y poniendo npm init
3. Creo el .gitignore para que no se suba al repositorio la carpeta node_modules
4. Instalo lite-server con el comando npm install lite-server
5. Voy a la documentacion de lite-server y añado el script dev em eñ archivo package.json
6. Creo el bs-config.json y le añado para ubicar los archivos en la carpeta src
7. Creo la carpeta src y dentro creo la carpeta components y index.html
8. En el index.html pongo lo de la pagina home y le añado el cdn de bootstrap y añado el index.js con el type module que sirve para las importaciones y exportaciones
9. En logo.js creo y exporto la funcion logo que devuelve una imagen
10. En menu.js importo la funcion logo y creo la funcion exportada menu que devuelve un nav de bootstrap
11. En index.js importo la funcion menu y creo la funcion header que devuelve el menu, al final hago un document.querySelector para ponerlo en el html
12. Creo las vistas about y partidas
13. En about hago lo mismo que en home
14. En partidas creo 2 div uno para el menu y otro para la partida
15. Creo el componente array.js para exportar la array a otro componente
16. Creo el compotente crearTabla.js, importo la array y creo con la funcion pintarTabla. Una vez hecha la exporto
17. En el index.js importo la funcion pintarTabla y creo la funcion cargarTabla para que devuelva el resultado de pintarTabla y hago el innerHTML
18. En el componente crearTabla.js creo la funcion nuevoDato que hace un push a la array con una partida y la saca por consola y llama a la funcion pintarTabla para que vuevla a cargar la tabla con el dato del push
19. Creo el boton push para que pregunte mediante un confirm si quiero añadir el dato antes hecho
