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
