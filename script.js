var aText = [
  "Haiii Faisa Fabiola",
  "Today is the day",
  "Selamat Ulang Tahun, semoga diumur kamu yang sekarang kamu menjadi pribadi yang lebih baik lagi", // <- tambah koma
  "Semua yang kamu impikan semoga tercapai diumur kamu yang sekarang", // <- tambah koma
  "Dan ya aku punya something special buat kamu", // <- tambah koma
  "Aku harap kamu suka", // <- tambah koma
  "Made With Love <3"
];

var iSpeed = 50;
var iIndex = 0;
var iTextPos = 0;
var sContents = '';
var iArrLength = aText[0].length;
var clickCount = 0;

function typewriter() {
  var destination = document.getElementById("typedtext");
  if(!destination) return; // safety biar nggak error kalau id nya nggak ada

  destination.innerHTML = aText[iIndex].substring(0, iTextPos) + "_";

  if (iTextPos++ < iArrLength) {
    setTimeout(typewriter, iSpeed);
  } else {
    destination.innerHTML = aText[iIndex]; // hapus "_" pas selesai
  }
}

function nextText() {
  clickCount++;

  if (clickCount >= 7) {
    window.open("Flowers/index.html", "_blank");
    return;
  }

  iIndex++;
  if (iIndex >= aText.length) {
    iIndex = 0;
  }
  iTextPos = 0;
  iArrLength = aText[iIndex].length;
  typewriter();
}

typewriter()

// Background Bunga
const NUM_PETALS = 30;
const PETAL_CHARS = ['🌸','🌺','🌷','🌼','🌻'];
const LAYER = document.getElementById('petalLayer');

if(LAYER){ // cek dulu biar nggak error kalau id nya nggak ada
  function rand(min, max){
    return Math.random()*(max-min)+min;
  }

  for(let i=0;i<NUM_PETALS;i++){
    const el = document.createElement('div');
    el.className = 'petal';
    el.textContent = PETAL_CHARS[Math.floor(Math.random()*PETAL_CHARS.length)];

    const left = rand(0,100);
    const size = rand(16,48);
    const delay = rand(-20, 0); // dibalik biar bener
    const duration = rand(8, 18);
    const drift = (Math.random() < 0.5? -1 : 1) * rand(40, 300);
    const rot = (Math.random() < 0.5? -1 : 1) * rand(180, 1080);

    el.style.left = left + 'vw';
    el.style.fontSize = size + 'px';
    el.style.top = rand(-20, -5) + 'vh';
    el.style.opacity = rand(0.7, 1);
    el.style.setProperty('--drift', drift + 'px');
    el.style.setProperty('--rot', rot + 'deg');
    el.style.animation = `fall ${duration}s linear infinite`;
    el.style.animationDelay = delay + 's';
    el.style.transform = `rotate(${rand(0,360)}deg)`;

    LAYER.appendChild(el);
  }
}
