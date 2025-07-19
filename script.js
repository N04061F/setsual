const texto = `Amorcito, te escribo esto porque realmente llegaste a ser alguien muy importante para mi en tan poco tiempo.
Cautivaste mi alma y al mismo tiempo llenaste mi corazón con tus cualidades, tu hermosa sonrisa, tus ojos tan puros y brillantes, tus manos
delicadas y tan suaves que tocaron lo más profundo de mí, ¡¡¡¡¡¡CADA COSA DE TI ES PERFECTA!!!!!!
Tú eres la personificación de "MI CHICA IDEAL", y yo soy la personificación de ser el mayor admirador de todo eso. 
Me sacaste de un lugar del que ni siquiera sabía que estaba metido. Todo a tu lado es perfecto y yo me siento tan afortunado de tenerte a mi lado.
Sacas lo mejor de mí y por eso y muchas cosas más te mereces todo. Espero que podamos estar más tiempo juntos y que esa mirada tuya nunca deje de verme.
TE QUIERO MUCHO ♡`;

const mensajeEl = document.getElementById("mensaje");
const finalDiv = document.getElementById("finalDiv");
let i = 0;

function escribir() {
  if (i < texto.length) {
    mensajeEl.innerHTML += texto[i] === '\n' ? '<br>' : texto[i];
    i++;
    setTimeout(escribir, 35);
  } else {
    finalDiv.classList.remove("oculto");
  }
}
escribir();

const imagenes = ["CHANGO.png", "CHANGO1.jpg", "CHANGO3.jpeg", "CHANGO4.png", "CHANGO5.jpg", "minecraft1.gif"];
function crearFlotante() {
  const fondo = document.querySelector('.fondo');
  const img = document.createElement('img');
  img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
  img.style.left = Math.random() * 100 + 'vw';
  img.style.animationDuration = (4 + Math.random() * 4) + 's';
  fondo.appendChild(img);
  setTimeout(() => fondo.removeChild(img), 8000);
}
setInterval(crearFlotante, 500);

// Iniciar audio al primer clic (política de navegadores móviles)
document.addEventListener('click', () => {
  const audio = document.getElementById('musicaFondo');
  if (audio.paused) {
    audio.play().catch(err => console.log('Error al reproducir:', err));
  }
}, { once: true });

