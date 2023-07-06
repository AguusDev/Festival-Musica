/* Aca mandamos a llamar a la funcion scrollNav con el evento Listener */
document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
})

function navegacionFija(){

    const barra = document.querySelector('.header');

    // Registrar el Intersection Observer
    /* El intersection Observer toma dos funciones 
        1) La creacion de la funcion con la API creandole como se muestra abajo */
    const observer = new IntersectionObserver( function(entries){
        const entry = entries[0]; // La entrada es igual a 0
    
        if(entry.isIntersecting){ // Si la entrada es igual a 0(osea que el objeto es visible) remover la clase fijo
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');// Si la entrada no es igual a 0(osea que el objeto es visible) agregar la clase fijo
        }
    })

    //Elemento a observar

    observer.observe(document.querySelector('.info__video')) // Aca esta observando el elemento target(elemento seleccionado) y funciona para decirnos cuando va a ejecutar el Observer
}

function scrollNav (){
    const enlaces = document.querySelectorAll('.navigator a'); // Seleccionamos todos los enlaces que se encuentran en navigator

    enlaces.forEach(function(enlace){ // Recorremos uno po uno los enlaces
        enlace.addEventListener('click', function(e){ // Creamos un evento click en cada enlace iterado
            e.preventDefault(); // un preventDefault para que no se ejecute la accion por default

            const seccion = document.querySelector(e.target.attributes.href.value); // Aca obtenemos el valor que requerimos para scrollear hasta la seccion que queramos

            seccion.scrollIntoView({// La accion por default de intoView es la normal del navegador
                behavior:'smooth' // Para cambiar la conf por default le pasamos un objeto de conf (behavior: 'smooth')
            });
        })
    })
}
