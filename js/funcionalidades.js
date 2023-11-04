const modal = document.querySelector(".modal"); //representa el div modal
const miniaturas = document.querySelectorAll(".actividades a"); //representa las imagenes pequeñas que estan dentro de los enlaces que hay en el div Actividades
const imgModal = document.querySelector(".contenedor_img img"); //representa la imagen que se muestra en el modal
const flechas = document.querySelectorAll(".flecha"); //representa las flechas que hay en el modal
const cerrar = document.querySelector(".cerrado") //representa el icono de cerrar en el modal
let indiceGeneral = 0; //variable que guarda un número que se utiliza para recordar qué imagen se está viendo actualmente en el modal
let rutasImg = []; //array que registra las rutas de todas las imágenes
let datosImagenes = [{
    img : "",
    titulo : "¡Recorrido por los mejores murales en Madrid!",
    texto : "Visitaremos más de 20 murales al rededor de la ciudad de Madrid honrando así el arte callejero y los cientos de artistas detrás de él.",
    ubicacion : "Ubicación:  Parque El Retiro",
    precio : 19,
    cantidad : 0
    },
    {
        img : "",
        titulo : "¡Prepara coctéles como un experto!",
        texto : "No te puedes perder esta increíble clase con los mejores maestros cocteleros para que aprendas a preparar de todo. ",
        ubicacion : "Ubicación: Macera Club",
        precio : 30,
        cantidad : 0
    },
    {
        img : "",
        titulo : "¡Aprende a tejer como nunca antes!",
        texto : "¿Alguna vez has deseado tener algo super único en tus manos? ¡En este taller, vas a poder hacer desde bolsos hasta ropa! ",
        ubicacion : "Ubicación: Av. Torrejon 34 - 5D",
        precio : 28,
        cantidad : 0
    }
]; //array que tiene información de diferentes actividades que se pueden hacer

const numeroHTML = document.querySelector(".numero h4"); //representa la cantidad de entradas
const botones = document.querySelectorAll(".numero img"); //representa los botones de más y menos
const precio = document.querySelector(".precio h4"); //representa el precio de la actividad
const titulo = document.querySelector(".informacion h3"); //representa el título de cada actividad
const texto = document.querySelector(".informacion p"); //representa la descripción de cada actividad
const ubicacion = document.querySelector(".informacion h5"); //representa la ubicación de cada actividad
let numero = 0; //variable que se utiliza para poder ir cambiando la cantidad

const navegacion = document.querySelector("nav"); //representa la seccion de navegacion de la pagina web
const botonesMenu = document.querySelectorAll(".abrir,.cerrar"); //representa los botones de abrir y cerrar del menu de navegacion

miniaturas.forEach((miniatura,indice) => { //bucle que recorrera las imagenes miniatura y les asignara un indice segun su posicion en la lista
    datosImagenes[indice].img = miniatura.getAttribute("href") //asigna a la propiedad "img" del array datosImagenes lo que este en el href de las miniaturas según el indice
    miniatura.addEventListener("click", (evento) => { //cuando se haga click en las miniaturas
        evento.preventDefault(); //evita que el navegador realice la acción predeterminada que tiene de seguir el enlace
        indiceGeneral = indice; //para registrar cuál miniatura se ha seleccionado
        imgModal.setAttribute("src",datosImagenes[indiceGeneral].img); //para que la imagen de la  miniatura seleccionada se ponga en imgModal
        modal.classList.add("visible"); //hace que el modal sea visible
        numeroHTML.innerHTML = datosImagenes[indiceGeneral].cantidad; //para que el numero se cambie a la cantidad correspondiente segun la miniatura que esta seleccionada
        precio.innerHTML = `${datosImagenes[indiceGeneral].precio * datosImagenes[indiceGeneral].cantidad}€`; //calcula y muestra el precio de la actividad de la miniatura seleccionada, multiplicando el precio unitario por la cantidad
        titulo.innerHTML = datosImagenes[indiceGeneral].titulo;
        texto.innerHTML = datosImagenes[indiceGeneral].texto;
        ubicacion.innerHTML = datosImagenes[indiceGeneral].ubicacion;
    });//las ultimas tres lineas ponen el título, el texto y la ubicación en el modal segun la miniatura que este seleccionada 
});

cerrar.addEventListener("click", function(){ //genera que al hacer click en el boton de cerrar, el modal ya no sea visible
    modal.classList.remove("visible");
});

flechas.forEach((flecha,indice) => { //bucle que recorre las flechas y les asignara un indice segun su posicion en la lista
    flecha.addEventListener("click", (evento) => { //cuando se hace click en las flechas pasa lo siguiente
        evento.stopPropagation(); //evita que el evento de clic se propague a otros elementos
        if(indice == 0){ //sirve para cambiar de imagen en el modal. Como tengo dos flechas, la que tenga el indice 1 es hacia adelante y la que tenga indice 0 es para atras
            indiceGeneral = indiceGeneral > 0 ? indiceGeneral - 1 : miniaturas.length - 1;
        }else{
            indiceGeneral = indiceGeneral < 2 ? indiceGeneral + 1 : 0;
        }
        imgModal.setAttribute("src",datosImagenes[indiceGeneral].img); // las siguientes 6 líneas actualizan la imagen, el número, el precio, el título, el texto y la ubicación en el modal según la flecha seleccionada
        numeroHTML.innerHTML = datosImagenes[indiceGeneral].cantidad;
        precio.innerHTML = `${datosImagenes[indiceGeneral].precio * datosImagenes[indiceGeneral].cantidad}€`;
        titulo.innerHTML = datosImagenes[indiceGeneral].titulo;
        texto.innerHTML = datosImagenes[indiceGeneral].texto;
        ubicacion.innerHTML = datosImagenes[indiceGeneral].ubicacion;
    });
});

botones.forEach((boton,indice) => { //bucle que recorre los botones dentro de la constante seleccionada y les asigna un indice segun su posicion en la lista
    boton.addEventListener("click", () => { //cuando se hace click en los botones pasa lo siguiente
        if(indice == 0){ //si el boton en el que se hizo click es el primero, se disminuye la cantidad en la actividad seleccionada en 1 si la cantidad actual es mayor que 0. Si la cantidad es 0 o menos, se mantiene en 0.
            datosImagenes[indiceGeneral].cantidad = datosImagenes[indiceGeneral].cantidad > 0 ? datosImagenes[indiceGeneral].cantidad - 1 : 0;
        }else{ //si el boton en el que se hizo click no es el primero, se aumenta la cantidad en la actividad seleccionada en 1 si la cantidad actual es menor que 10. Si la cantidad es igual o mayor que 10, se mantiene en 10.
            datosImagenes[indiceGeneral].cantidad = datosImagenes[indiceGeneral].cantidad < 10 ? datosImagenes[indiceGeneral].cantidad + 1 : 10;
        }
        numeroHTML.innerHTML = datosImagenes[imgActual].cantidad; // las siguientes 5 líneas actualizan el número, el precio, el título, el texto y la ubicación en el modal según la actividad seleccionada
        precio.innerHTML = `${datosImagenes[indiceGeneral].precio * datosImagenes[indiceGeneral].cantidad}€`;
        titulo.innerHTML = datosImagenes[indiceGeneral].titulo;
        texto.innerHTML = datosImagenes[indiceGeneral].texto;
        ubicacion.innerHTML = datosImagenes[indiceGeneral].ubicacion;
    });
});

botonesMenu.forEach(boton => { //bucle que recoge los botones del menu de navegacion
    boton.addEventListener("click", () => navegacion.classList.toggle("desplegado")); //cuando se haga click en el boton, el toggle hara que si la clase "desplegado" está presente, se elimine; si no está presente, se agregue.
});