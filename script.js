const projectData = {
  carbon: {
    eyebrow: "Tuto Power · UX / LX · 2025",
    title: "Calculadora de huella de carbono",
    intro: "Una experiencia B2B que ayuda a empresas a comprender un dato técnico y convertirlo en una conversación comercial de mayor valor.",
    challenge: "Los usuarios no entendían fácilmente el impacto de sus emisiones y el proceso previo generaba fricción, abandono y prospectos poco calificados.",
    role: "Investigación exploratoria, definición del journey, flujos, microcopy educativo, coordinación con negocio y desarrollo, pruebas de usabilidad e iteración.",
    decision: "Priorizar comprensión sobre sofisticación visual: explicar el propósito de cada dato y revelar la complejidad paso a paso.",
    result: "+15% de leads calificados y −25% en el tiempo de prospección comercial documentados en el caso de estudio.",
    media: '<img src="assets/carbon-calculator.png" alt="Interfaz de resultados de la calculadora de huella de carbono">',
    actions: '<a class="button button-primary" href="nUEVA ETAPA LABORAL/PORTAFOLIO NUEVA ETAPA LABORAL/ESPAÑOL/Caso_Estudio_Calculadora_Huella_De_Carbono.pdf" target="_blank">Ver caso en PDF ↗</a>'
  },
  today: {
    eyebrow: "Producto propio · UX + código · 2026",
    title: "¿Qué toca hoy?",
    intro: "Una checklist diaria pensada para personas neurodivergentes que necesitan estructura sin presión, métricas ni mensajes evaluativos.",
    challenge: "La carga mental no estaba en hacer las tareas, sino en decidir qué tocaba, ordenar los pasos y recordar lo que suele olvidarse.",
    role: "User persona, journey, wireframes, requisitos funcionales, prompt engineering, interfaz responsive y desarrollo del prototipo con almacenamiento local.",
    decision: "Mostrar solo lo necesario para hoy y usar feedback visual —color, checkmarks y completitud— en lugar de motivación forzada.",
    result: "Un MVP funcional, editable y mobile-first que puede usarse directamente en el navegador y conserva la información del usuario.",
    media: document.querySelector('.today-preview')?.outerHTML || '',
    actions: '<a class="button button-primary" href="que toca hoy check list app/index.html" target="_blank">Probar la app ↗</a>'
  },
  thesis: {
    eyebrow: "Producto propio · Mobile-first · 2026",
    title: "Tesis Tracker",
    intro: "Una herramienta responsive para gestionar el avance de una tesis editorial por capítulos, tareas y notas sin perder el contexto.",
    challenge: "Un proyecto académico largo reúne decenas de entregables y decisiones. Las listas planas ocultan el avance y aumentan la sensación de desorden.",
    role: "Arquitectura de información, jerarquía visual, modelo de progreso, interacción de acordeones y construcción completa en HTML, CSS y JavaScript.",
    decision: "Organizar por capítulos y hacer visible el progreso parcial, manteniendo cada tarea y nota cerca del contexto al que pertenece.",
    result: "Una app instalable en celular desde el navegador, con persistencia local y experiencia optimizada para pantallas pequeñas.",
    media: document.querySelector('.thesis-preview')?.outerHTML || '',
    actions: '<a class="button button-primary" href="tesis diseño editorial tracker/index.html" target="_blank">Probar la app ↗</a>'
  },
  tailor: {
    eyebrow: "Bootcamp UX/UI · EdTech · 2024",
    title: "Tailor Talk",
    intro: "Una experiencia de aprendizaje de idiomas diseñada para mejorar la elección de contenido y la continuidad de las sesiones.",
    challenge: "Las personas encontraban fricción al registrarse y elegir materiales adecuados para su nivel, objetivo y contexto de estudio.",
    role: "Entrevistas, mapa de empatía, card sorting, análisis de usabilidad, definición de requerimientos, wireframes y prototipo funcional.",
    decision: "Organizar los materiales por contexto y nivel, con un onboarding que reduce decisiones tempranas y guía sin infantilizar.",
    result: "Mayor claridad observada en pruebas para el registro y selección de contenido, con una propuesta inclusiva y adaptable.",
    media: '<img src="assets/tailor-talk.png" alt="Pantallas y contexto de Tailor Talk">',
    actions: ''
  },
  solar: {
    eyebrow: "Tuto Power · Gamificación · 2024",
    title: "Videojuego de red eléctrica",
    intro: "Una experiencia interactiva para explicar generación solar y distribución eléctrica a audiencias no técnicas.",
    challenge: "Los conceptos de operación eléctrica eran abstractos y difíciles de comunicar en capacitaciones internas tradicionales.",
    role: "Investigación con operaciones, síntesis de conceptos, storyboard, interfaz, narrativa educativa y construcción en Construct 3 con apoyo de IA.",
    decision: "Cambiar la explicación pasiva por decisiones, obstáculos y microinteracciones dentro de un recorrido jugable.",
    result: "Un recurso educativo funcional que hizo más accesible el conocimiento técnico y despertó interés en las capacitaciones.",
    media: '<img src="assets/solar-game.png" alt="Escena del videojuego educativo de energía solar">',
    actions: ''
  },
  ecobici: {
    eyebrow: "Exploración de producto · Movilidad",
    title: "ECOBICI en movimiento",
    intro: "Una exploración de experiencia conectada entre móvil y smartwatch para reducir fricción durante el desbloqueo y trayecto.",
    challenge: "Consultar el teléfono en movimiento interrumpe el viaje y aumenta la carga de atención en momentos críticos del recorrido.",
    role: "Análisis del flujo, identificación de puntos de fricción y diseño conceptual de navegación y feedback distribuido entre dispositivos.",
    decision: "Llevar al reloj las señales breves y oportunas; reservar el teléfono para información de mayor detalle.",
    result: "Una propuesta visual de servicio conectado que prioriza seguridad, rapidez y continuidad del trayecto.",
    media: '<img src="assets/ecobici.png" alt="Propuesta ECOBICI para teléfono y smartwatch">',
    actions: ''
  },
  web: {
    eyebrow: "Tuto Power · B2B · 2022–2025",
    title: "Ecosistema web Tuto Power",
    intro: "Rediseño y evolución de una presencia digital para comunicar servicios energéticos complejos con mayor claridad comercial.",
    challenge: "La experiencia era estática, fragmentada y no guiaba a prospectos industriales hacia información relevante ni siguientes pasos.",
    role: "Análisis de recorridos, trabajo con stakeholders, arquitectura, contenido, wireframes, consistencia visual y coordinación de implementación en WordPress.",
    decision: "Construir recorridos progresivos según necesidades B2B y conectar contenido, herramientas y contacto bajo un mismo sistema.",
    result: "Una base digital más coherente para informar, calificar prospectos y sumar herramientas como la calculadora de huella de carbono.",
    media: '<img src="assets/tuto-power-web.png" alt="Pantalla del ecosistema web de Tuto Power">',
    actions: ''
  }
};

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const nextIndex = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex]);
  });
});

function activateTab(tab) {
  tabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
  panels.forEach(panel => {
    const active = panel.id === `panel-${tab.dataset.tab}`;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
  });
}

const dialog = document.querySelector('.project-dialog');
const dialogClose = document.querySelector('.dialog-close');
const dialogFields = {
  eyebrow: document.querySelector('#dialog-eyebrow'), title: document.querySelector('#dialog-title'), intro: document.querySelector('#dialog-intro'),
  challenge: document.querySelector('#dialog-challenge'), role: document.querySelector('#dialog-role'), decision: document.querySelector('#dialog-decision'), result: document.querySelector('#dialog-result'),
  media: document.querySelector('#dialog-media'), actions: document.querySelector('#dialog-actions')
};

document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
  const item = projectData[button.dataset.project];
  if (!item || !dialog) return;
  Object.entries(dialogFields).forEach(([key, node]) => {
    if (!node) return;
    if (['media', 'actions'].includes(key)) node.innerHTML = item[key];
    else node.textContent = item[key];
  });
  dialog.showModal();
  document.body.classList.add('dialog-open');
}));

function closeDialog() {
  dialog?.close();
  document.body.classList.remove('dialog-open');
}
dialogClose?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

document.querySelector('#year').textContent = new Date().getFullYear();
