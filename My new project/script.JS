// --- MENÚ HAMBURGUESA ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// --- FILTROS CON BOTONES ---
const botones = document.querySelectorAll(".filtros button");
const items = document.querySelectorAll(".look");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("filtro-activo"));
    boton.classList.add("filtro-activo");

    const categoria = boton.dataset.categoria;

    items.forEach(item => {
      item.style.display = (categoria === "todos" || item.classList.contains(categoria)) ? "block" : "none";
    });
  });
});

// --- FILTRO CON SELECT ---
document.getElementById("filtro").addEventListener("change", function () {
  const valor = this.value;
  document.querySelectorAll(".look").forEach(look => {
    look.style.display = (valor === "todo" || look.classList.contains(valor)) ? "block" : "none";
  });
});

// --- SCROLL HEADER/VIDEO ---
const hero = document.querySelector('.video-hero');
const header = document.querySelector('.site-header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 150 && scrollTop > lastScrollTop) {
    hero.classList.add('hidden');
    header.classList.remove('hidden');
  } else if (scrollTop < lastScrollTop) {
    hero.classList.remove('hidden');
    header.classList.add('hidden');
  }

  lastScrollTop = Math.max(0, scrollTop);
});

// --- FRASE DEL DÍA, LOOK DESTACADO Y HISTORIA ---
const frases = [
  "“La moda pasa, el estilo permanece.” — Coco Chanel",
  "“Vístete como si fueras a conocer a tu peor enemigo hoy.”",
  "“Tu estilo debería contar quién eres, sin tener que hablar.”"
];
const historia = [
  "🕰️ En 1947, Dior presentó el 'New Look', revolucionando la moda femenina.",
  "🧥 En los 80s, el power suit se volvió símbolo del empoderamiento femenino.",
  "👗 En los 60s, Mary Quant popularizó la minifalda."
];
const looks = [
  "Look monocromático en tonos neutros",
  "Conjunto denim total",
  "Estilo boho con falda maxi",
  "Minimalismo elegante con blazer oversize"
];

document.getElementById("frase-del-dia").textContent = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("historia-hoy").textContent = historia[Math.floor(Math.random() * historia.length)];
document.getElementById("look-dia").textContent = looks[Math.floor(Math.random() * looks.length)];

// --- TEMPORADA ACTUAL ---
const temporada = document.getElementById("temporada");
const mes = new Date().getMonth();

if (mes >= 2 && mes <= 4) {
  temporada.textContent = "🌸 Primavera: descubre colores pasteles y texturas livianas";
} else if (mes >= 5 && mes <= 7) {
  temporada.textContent = "☀️ Verano: tops frescos y lino en tendencia";
} else if (mes >= 8 && mes <= 10) {
  temporada.textContent = "🍂 Otoño: tonos tierra, capas y botas";
} else {
  temporada.textContent = "❄️ Invierno: abrigos estructurados y texturas cálidas";
}

// --- MODALES ---
function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'block';
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';

  const video = modal.querySelector('video');
  if (video) video.pause();
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      const video = modal.querySelector('video');
      if (video) video.pause();
    }
  });
};
const input = document.getElementById('lunabot-input');
const send = document.getElementById('lunabot-send');
const chat = document.getElementById('lunabot-chat');

function appendMessage(role, message) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${role === 'user' ? 'Tú' : 'LunaBot'}:</strong> ${message}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

send.addEventListener('click', async () => {
  const question = input.value.trim();
  if (!question) return;
  appendMessage('user', question);
  input.value = '';

  // --- Simulación (reemplazar con llamada a la API de OpenAI) ---
  appendMessage('assistant', 'Estoy pensando en el outfit perfecto para ti... 👗');
  // --- FIN simulación ---

  // --- Para producción, usa algo como esto ---
  /*
  const response = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TU_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Eres LunaBot, una experta en moda que da consejos sobre outfits y datos históricos de moda. Hablas con elegancia y precisión.' },
        { role: 'user', content: question }
      ]
    })
  });
  const data = await response.json();
  const answer = data.choices[0].message.content;
  appendMessage('assistant', answer);
  */
});
window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup-bienvenida");
    popup.classList.add("mostrar");
  
    setTimeout(() => {
      popup.classList.remove("mostrar");
    }, 5000);
  });
  