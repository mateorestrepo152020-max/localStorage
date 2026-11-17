const claveNombre = "localstorage_explicacion_nombre";

const fromGuardar = document.getElementById("fromGuardar");
const nombreGuardar= document.getElementById("nombreguardar");
const resultadoGuardar = document.getElementById("resultadoGuardar");

fromGuardar.addEventListener("submit",function (evento){
    evento.preventDefault();

    const nombre = nombreGuardar.ariaValueMax.trim();
    if (nombre === ""){
        resultadoGuardar.textcontent = "Escribe su nombre antes de guardar";
        return;    
    }

    localStorage.setItem(claveNombre,nombre);
    resultadoGuardar.textcontent = "nombre guardado correctamente.";
    fromGuardar.reset();
});

const fromMostrar = document.getElementById("fromMostrar");
const resultadoMostrar = document.getElementById("resultadoMostrar");

fromMostrar.addEventListener("submit",function(evento) {
    evento.preventDefault();
    const nombreGuardado = localStorage.getItem(claveNombre);
    
    
    
    resultadoMostrar.textContent = nombreGuardado === null

        ? "no hay un nombre gardado."

        : "Nombre guardado: " + nombreGuardado;
});

const fromEditar = document.getElementById("fromEditar");
const nombreEditar = Document.getElementById(nombreEditar)
 const resultadoEditar = document.getElementById("resultadoEditar");

fromEditar.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nuevoNombre = nombreEditar.value.trim();
    if (nuevoNombre === "") {
        resultadoEditar.textcontent = "escibe el nuevo nombre";
        return;
    }

    localStorage.setItem(claveNombre, nuevoNombre);
    resultadoEditar.textContent = "Nombre actualizado correctamente.";
    fromEditar.reset();

});

const fromEliminar = document.getElementById("fromElimminar")
const resultadoEliminar = document.getElementById("resultadoEliminar");

fromEliminar.addEventListener("submit", function(evento){ 
    evento.perventDefault();

    localStorage.removeItem(claveNombre);
    resultadoEliminar.textcontent ="Nombre eliminado.";

});

const fromMascota = document.getElementById("fromMascota");


fromMostrar.addEventListener("submit", (event) => {
    event.default();

    const mascota = {
        nombre : document.getElementById("mascota").value,
        raza : document.getElementById("raza").value,
        edad : Number(document.getElementById("edad").value)

    };
    localStorage.setItem("mascota", JSON.stringify(mascota));

});
