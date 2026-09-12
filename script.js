var aText = [
  "Haiii Faisa Fabiola", 
  "Today is the day",
  "Selamat Ulang Tahun, semoga diumur kamu yang sekarang kamu menjadi pribadi yang lebih baik lagi"
  "Semua yang kamu impikan semoga tercapai diumur kamu yang sekarang"
  "Dan ya aku punya something special buat kamu"
  "Aku harap kamu suka"
  "Made With Love <3"
];

var iSpeed = 50;      // kecepatan ketik
var iIndex = 0;       // index array teks
var iTextPos = 0;     // posisi karakter
var sContents = '';   // isi sementara
var iArrLength = aText[0].length; 
var clickCount = 0;   // hitung klik tombol

function typewriter() {
  var destination = document.getElementById("typedtext");
  destination.innerHTML = aText[iIndex].substring(0, iTextPos) + "_";
  
  if (iTextPos++ < iArrLength) {
    setTimeout(typewriter, iSpeed);
  }
}

// Fungsi untuk ganti teks saat tombol ditekan
function nextText() {
  clickCount++; // tambah hitungan klik

  if (clickCount >= 7) {
    window.open("Flowers/index.html", "_blank"); // buka di tab baru
    return;
  }

  iIndex++;
  if (iIndex >= aText.length) {
    iIndex = 0; // balik lagi ke awal kalau sudah habis
  }
  iTextPos = 0;
  iArrLength = aText[iIndex].length;
  typewriter();
}

// Jalankan pertama kali
typewriter()


// Background

const NUM_PETALS = 30;          // jumlah bunga/kelopak
    const PETAL_CHARS = ['🌸','🌺','🌷','🌼','🌻']; // emoji bunga (ganti kalau mau)
    const LAYER = document.getElementById('petalLayer');

    function rand(min, max){
      return Math.random()*(max-min)+min;
    }

    for(let i=0;i<NUM_PETALS;i++){
      const el = document.createElement('div');
      el.className = 'petal';
      el.textContent = PETAL_CHARS[Math.floor(Math.random()*PETAL_CHARS.length)];

      // acak posisi horizontal, ukuran, delay, durasi, drift (ke samping), dan rotasi akhir
      const left = rand(0,100); // persen
      const size = rand(16,48); // px font-size
      const delay = rand(0, -20); // mulai sebelum/ketika load; negatif agar ada yang sudah turun
      const duration = rand(8, 18); // detik
      const drift = (Math.random() < 0.5 ? -1 : 1) * rand(40, 300); // drift ke kiri/kanan
      const rot = (Math.random() < 0.5 ? -1 : 1) * rand(180, 1080); // putaran

      el.style.left = left + 'vw';
      el.style.fontSize = size + 'px';
      el.style.top = rand(-20, -5) + 'vh';
      el.style.opacity = rand(0.7, 1);
      el.style.setProperty('--drift', drift + 'px');
      el.style.setProperty('--rot', rot + 'deg');

      // Terapkan animasi dengan variasi durasi & delay
      el.style.animation = `fall ${duration}s linear infinite`;
      el.style.animationDelay = delay + 's';

      // sedikit rotasi/scale acak saat jatuh (tambahan)
      el.style.transform = `rotate(${rand(0,360)}deg)`;

      // Untuk memberi variasi horizontal (sway), gunakan keyframe inline via transition on transform tidak diperlukan;
      // cukup variasikan --drift & --rot di keyframe fall.

      LAYER.appendChild(el);
    }
