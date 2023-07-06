


document.addEventListener('DOMContentLoaded', ()=>{
    crearGaleria();
})


function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');

        imagen.dataset.imagenId = i; /* Dataset sirve para crear atributos personalizados que se van a ver reflejados en el html */
        /* Mostrando Imagen*/ 
        imagen.onclick = mostrarImagen;

        imagen.src = `build/img/thumb/${i}.webp`; /* Esto es para darle esa ruta(src) a la imagen */
        
        const lista = document.createElement('LI'); 
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId)/* target nos nombra a que parte del html le dimos click*/
    
    /* Generar la Imagen */
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay')

    /* Boton para cerrar la imagen */

    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

   
    
    /* Mostrar en el html */

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

    /* Eliminar la clase fijar-body */

     /* Cuando se presiona la X para cerrar la imagen */

     cerrarImagen.onclick = function(){
        overlay.remove(); 
        body.classList.remove('fijar-body')
     }
     
     /* Cuando se da click fuera de la imagen cerrar igualmente */
 
     overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body')
        
     }
}
