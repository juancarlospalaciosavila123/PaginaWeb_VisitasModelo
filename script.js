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


const translations = {
    es: {
        titulo1: "Cerveceria del Centro",
        titulo2: "Modelo Apan",
        seleccionar: "Seleccione su tipo de visita",
        opcion1: "Visita de Comunidad",
        opcion2: "Visita de Proveedores",
        opcion3: "Visita de Corporativo",
        opcion4: "Capacitación Interplantas",
        opcion5: "Juntas o Levantamientos",
        opcion6: "Servicio Medico",
        opcion7: "Colaboradores",
        conocer: "Conócenos"
    },
    en: {
        titulo1: "Central Brewery",
        titulo2: "Modelo Apan",
        seleccionar: "Select your visit type",
        opcion1: "Community Visit",
        opcion2: "Suppliers Visit",
        opcion3: "Corporate Visit",
        opcion4: "Interplant Training",
        opcion5: "Meetings or Surveys",
        opcion6: "Medical Service",
        opcion7: "Employees",
        conocer: "Get to know us"
    },
    fr: {
        titulo1: "Brasserie du Centre",
        titulo2: "Modelo Apan",
        seleccionar: "Sélectionnez votre type de visite",
        opcion1: "Visite Communautaire",
        opcion2: "Visite des Fournisseurs",
        opcion3: "Visite d’Entreprise",
        opcion4: "Formation Inter-usines",
        opcion5: "Réunions ou Relevés",
        opcion6: "Service Médical",
        opcion7: "Employés",
        conocer: "Découvrez-nous"
    },
    pt: {
        titulo1: "Cervejaria Central",
        titulo2: "Modelo Apan",
        seleccionar: "Selecione o tipo de visita",
        opcion1: "Visita Comunitária",
        opcion2: "Visita de Fornecedores",
        opcion3: "Visita Corporativa",
        opcion4: "Treinamento Interplantas",
        opcion5: "Reuniões ou Levantamentos",
        opcion6: "Serviço Médico",
        opcion7: "Colaboradores",
        conocer: "Conheça-nos"
    },
    nah: {
        titulo1: "Cuauhpantlān Chīchīhuātlān",
        titulo2: "Modelo Apan",
        seleccionar: "Ticpehualtia in tipoxochītl tlānēxtiliztli",
        opcion1: "Calpulli Tlāhuīz",
        opcion2: "Tlānamacani Tlāhuīz",
        opcion3: "Tlāltikpak Tlāhuīz",
        opcion4: "Tlamachtilli Tlāltikpak",
        opcion5: "Huehuetlahtolli o Tlālilīzpan",
        opcion6: "Tlāpānaliztli",
        opcion7: "Tlācaliztli",
        conocer: "Xitechixmatika"
    },
    de: {
        titulo1: "Zentralbrauerei",
        titulo2: "Modelo Apan",
        seleccionar: "Wählen Sie Ihren Besuchstyp",
        opcion1: "Gemeindebesuch",
        opcion2: "Lieferantenbesuch",
        opcion3: "Firmenbesuch",
        opcion4: "Werksübergreifende Schulung",
        opcion5: "Besprechungen oder Erhebungen",
        opcion6: "Medizinischer Dienst",
        opcion7: "Mitarbeiter",
        conocer: "Lernen Sie uns kennen"
    },
    zh: {
        titulo1: "中央啤酒厂",
        titulo2: "Modelo Apan",
        seleccionar: "请选择您的访问类型",
        opcion1: "社区参观",
        opcion2: "供应商参观",
        opcion3: "公司参观",
        opcion4: "跨工厂培训",
        opcion5: "会议或调研",
        opcion6: "医疗服务",
        opcion7: "员工",
        conocer: "了解我们"
    },
    ja: {
        titulo1: "中央ブルワリー",
        titulo2: "Modelo Apan",
        seleccionar: "訪問の種類を選択してください",
        opcion1: "地域訪問",
        opcion2: "サプライヤー訪問",
        opcion3: "企業訪問",
        opcion4: "工場間研修",
        opcion5: "会議または調査",
        opcion6: "医療サービス",
        opcion7: "従業員",
        conocer: "私たちについて"
    }
};


// Función para cambiar idioma
function changeLanguage(lang) {
    if (!translations[lang]) return; // Si el idioma no existe, no hace nada

    document.querySelector(".titulo1 h1").textContent = translations[lang].titulo1;
    document.querySelector(".titulo2 h1").textContent = translations[lang].titulo2;
    document.querySelector(".contenidoVidrio h1").textContent = translations[lang].seleccionar;

    const opciones = document.querySelectorAll(".opcionVisita p");
    if (opciones.length >= 7) { // Previene errores si faltan elementos
        opciones[0].textContent = translations[lang].opcion1;
        opciones[1].textContent = translations[lang].opcion2;
        opciones[2].textContent = translations[lang].opcion3;
        opciones[3].textContent = translations[lang].opcion4;
        opciones[4].textContent = translations[lang].opcion5;
        opciones[5].textContent = translations[lang].opcion6;
        opciones[6].textContent = translations[lang].opcion7;
    }

    document.querySelector(".tituloPie").textContent = translations[lang].conocer;
}

// Listener al selector
document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("languageSwitcher");
    if (selector) {
        // Aplica el idioma inicial según el valor del <select>
        changeLanguage(selector.value);

        // Cambia idioma cuando el usuario seleccione
        selector.addEventListener("change", function() {
            changeLanguage(this.value);
        });
    }
});
