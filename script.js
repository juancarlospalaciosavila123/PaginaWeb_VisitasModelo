// Manda con el círculo y flecha al div de opciones
function irAContenido() {
    document.querySelector('.contenido').scrollIntoView({
        behavior: 'smooth'
    });
}

// Manejo de los formularios de visita
document.addEventListener('DOMContentLoaded', function () {
    const opciones = document.querySelectorAll('.opcionVisita');
    const contenedor = document.getElementById('contenedorFormulario');
    const iframe = document.getElementById('iframeFormulario');
    const contenidoVidrio = document.querySelector('.contenidoVidrio');
    const btnAtras = document.getElementById('btnAtras');
    const loader = document.getElementById('loader');

    opciones.forEach(opcion => {
        opcion.addEventListener('click', function () {
            const urlForm = this.getAttribute('data-form');
            if (urlForm) {
                // Oculta opciones
                contenidoVidrio.style.display = 'none';
                // Carga y muestra el formulario
                iframe.src = urlForm;
                contenedor.style.display = 'block';
                contenedor.scrollIntoView({ behavior: 'smooth' });

                // Mostrar loader (simulación)
                loader.style.display = 'flex';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000); // Ajusta según necesidad
            }
        });
    });

    // Botón Atrás
    btnAtras.addEventListener('click', e => {
        e.preventDefault();
        iframe.src = '';
        contenedor.style.display = 'none';
        contenidoVidrio.style.display = 'flex';
        contenidoVidrio.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal de subida de archivo
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalSubida");
    const cerrarModal = document.querySelector(".cerrar");
    const inputArchivo = document.getElementById("inputArchivo");
    const btnSubir = document.getElementById("btnSubir");
    const tituloModal = document.getElementById("tituloModal");
    const btnSeleccionarArchivo = document.getElementById("btnSeleccionarArchivo");
    const nombreArchivo = document.getElementById("nombreArchivo");
    const iconoEstadoArchivo = document.getElementById("iconoEstadoArchivo");

    // Abrir modal
    document.querySelectorAll(".circuloDocumento").forEach(circulo => {
        circulo.addEventListener("click", function () {
            const documentoActual = this.parentElement.querySelector(".nameDocumento").innerText.trim();
            tituloModal.innerText = `Subir ${documentoActual}`;
            inputArchivo.value = "";
            modal.style.display = "block";
        });
    });

    // Cerrar modal
    cerrarModal.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

    // Seleccionar archivo
    btnSeleccionarArchivo.addEventListener("click", () => inputArchivo.click());

    // Mostrar nombre de archivo y validar tipo
    inputArchivo.addEventListener("change", function () {
        if (this.files.length) {
            const archivo = this.files[0];
            const ext = archivo.name.split('.').pop().toLowerCase();
            if (["jpg","jpeg","pdf"].includes(ext)) {
                nombreArchivo.innerText = archivo.name;
                iconoEstadoArchivo.src = "Resources/archivo_si.png";
            } else {
                alert("Formato no válido. Solo .jpg, .jpeg o .pdf");
                inputArchivo.value = "";
                nombreArchivo.innerText = "Sin archivo seleccionado";
                iconoEstadoArchivo.src = "Resources/archivo_no.png";
            }
        } else {
            nombreArchivo.innerText = "Sin archivo seleccionado";
            iconoEstadoArchivo.src = "Resources/archivo_no.png";
        }
    });

    // Subir archivo (simulación)
    btnSubir.addEventListener("click", () => {
        if (!inputArchivo.files.length) {
            alert("Por favor, selecciona un archivo.");
            return;
        }
        Swal.fire({
            title: "Archivo subido y validado correctamente",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            modal.style.display = "none";
        });
    });
});
