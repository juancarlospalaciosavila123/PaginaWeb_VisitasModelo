// Manda con el circulo y felcha al div de los opciones
function irAContenido() {
    document.querySelector('.contenido').scrollIntoView({
        behavior: 'smooth'
    });
}

// Llama con a los diferentes formularios de visita
document.addEventListener('DOMContentLoaded', function () {
    const opciones = document.querySelectorAll('.opcionVisita');
    const contenedor = document.getElementById('contenedorFormulario');
    const iframe = document.getElementById('iframeFormulario');

    opciones.forEach(opcion => {
        opcion.addEventListener('click', function () {
            const urlForm = this.getAttribute('data-form');
            if (urlForm) {
                iframe.src = urlForm;
                contenedor.style.display = 'block';
                contenedor.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//Ocultar, mostrar las opciones de envio a formularios
document.addEventListener('DOMContentLoaded', () => {
  const contenidoVidrio = document.querySelector('.contenidoVidrio');
  const contenedorFormulario = document.getElementById('contenedorFormulario');
  const iframeFormulario = document.getElementById('iframeFormulario');
  const btnAtras = document.getElementById('btnAtras');
  const btnSiguiente = document.getElementById('btnSiguiente');
  const contenedorArchivos = document.getElementById('contenedorArchivos');

  document.querySelectorAll('.opcionVisita').forEach(opcion => {
    opcion.addEventListener('click', () => {
      const urlForm = opcion.getAttribute('data-form');
      if (urlForm) {
        // Oculta todo el contenidoVidrio
        contenidoVidrio.style.display = 'none';

        // Carga y muestra el formulario
        iframeFormulario.src = urlForm;
        contenedorFormulario.style.display = 'block';
        contenedorFormulario.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  btnAtras.addEventListener('click', e => {
    e.preventDefault();
    // Limpia iframe
    iframeFormulario.src = '';
    // Oculta formulario
    contenedorFormulario.style.display = 'none';
    // Muestra contenidoVidrio de nuevo
    contenidoVidrio.style.display = 'block';
    contenidoVidrio.scrollIntoView({ behavior: 'smooth' });
  });

    btnSiguiente.addEventListener('click', e => {
    e.preventDefault();
    // Limpia iframe
    iframeFormulario.src = '';
    // Oculta formulario
    contenedorFormulario.style.display = 'none';
    // Muestra contenidoVidrio de nuevo
    contenedorArchivos.style.display = 'block';
    contenedorArchivos.scrollIntoView({ behavior: 'smooth' });
  });
});

//Mustra el pedir papeles depende si es Nacional o Internacional
document.addEventListener('DOMContentLoaded', function() {
    const tipoPersona = document.getElementById('tipoPersona');
    const extranjeroDiv = document.getElementById('camposExtranjero');
    const nacionalDiv = document.getElementById('camposNacional');

    tipoPersona.addEventListener('change', function() {
        const valor = this.value;
        if (valor === 'extranjero') {
            extranjeroDiv.style.display = 'flex';
            nacionalDiv.style.display = 'none';
        } else if (valor === 'nacional') {
            nacionalDiv.style.display = 'flex';
            extranjeroDiv.style.display = 'none';
        } else {
            extranjeroDiv.style.display = 'none';
            nacionalDiv.style.display = 'none';
        }
    });
});

// Abrir el modal, cerrar 
// Abrir el modal, cerrar 
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalSubida");
    const cerrarModal = document.querySelector(".cerrar");
    const inputArchivo = document.getElementById("inputArchivo");
    const btnSubir = document.getElementById("btnSubir");
    const tituloModal = document.getElementById("tituloModal");

    const divVideo = document.querySelector(".Video");
    const divArchivos = document.querySelector(".contenedorArchivos");

    let documentoActual = "";

    // Abrir modal al hacer clic en un circuloDocumento
    document.querySelectorAll(".circuloDocumento").forEach(circulo => {
        circulo.addEventListener("click", function () {
            documentoActual = this.parentElement.querySelector(".nameDocumento").innerText.trim();
            tituloModal.innerText = `Subir ${documentoActual}`;
            inputArchivo.value = ""; // Limpia archivo anterior
            modal.style.display = "block";
        });
    });

    // Cerrar modal con la X
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar modal haciendo clic fuera del contenido
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Subir archivo
    btnSubir.addEventListener("click", function () {
        if (!inputArchivo.files.length) {
            alert("Por favor, selecciona un archivo.");
            return;
        }

        const archivo = inputArchivo.files[0];
        const extPermitidas = ["image/jpeg", "application/pdf"];

        if (!extPermitidas.includes(archivo.type)) {
            alert("Formato no permitido. Solo se aceptan JPG o PDF.");
            return;
        }

        // Simulación de validación del documento (puedes cambiarlo por tu API real)
        const documentoValido = Math.random() > 0.5; // Ejemplo: 50% de probabilidad

        if (documentoValido) {
            Swal.fire({
                title: `Archivo de ${documentoActual} subido y validado correctamente.`,
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(() => {
                // Una vez que el usuario cierre la alerta
                divVideo.style.display = "block"; // Mostrar el video
                divArchivos.style.display = "none"; // Ocultar los archivos
                modal.style.display = "none"; // Cerrar el modal
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "El documento no fue validado con éxito. Intenta otra vez.",
                icon: "error",
                confirmButtonText: "Reintentar"
            });
        }

    });
});


// Pone el archivo texto e icono entre titulo y boton
document.addEventListener("DOMContentLoaded", function () {
    const btnSeleccionarArchivo = document.getElementById("btnSeleccionarArchivo");
    const nombreArchivo = document.getElementById("nombreArchivo");
    const inputArchivo = document.getElementById("inputArchivo");
    const iconoEstadoArchivo = document.getElementById("iconoEstadoArchivo");

    btnSeleccionarArchivo.addEventListener("click", function () {
        inputArchivo.click();
    });

    inputArchivo.addEventListener("change", function () {
        if (this.files.length) {
            let archivo = this.files[0];
            let extension = archivo.name.split('.').pop().toLowerCase();

            if (["jpg", "jpeg", "pdf"].includes(extension)) {
                nombreArchivo.innerText = archivo.name;
                iconoEstadoArchivo.src = "Resources/archivo_si.png"; // ✅
            } else {
                alert("Formato no válido. Solo se permiten .jpg, .jpeg o .pdf");
                inputArchivo.value = ""; // reset
                nombreArchivo.innerText = "Sin archivo seleccionado";
                iconoEstadoArchivo.src = "Resources/archivo_no.png"; // ❌
            }
        } else {
            nombreArchivo.innerText = "Sin archivo seleccionado";
            iconoEstadoArchivo.src = "Resources/archivo_no.png"; // ❌
        }
    });
});



