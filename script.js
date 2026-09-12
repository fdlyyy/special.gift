var aText = [
  "Haiii Faisa Fabiola",
  "Today is the day",
  "Selamat Ulang Tahun, semoga diumur kamu yang sekarang kamu menjadi pribadi yang lebih baik lagi",
  "Semua yang kamu impikan semoga tercapai diumur kamu yang sekarang",
  "Dan ya aku punya something special buat kamu",
  "Aku harap kamu suka",
  "Made With Love <3"
];

var iSpeed = 50;
var iIndex = 0;
var iTextPos = 0;
var iArrLength = aText[0].length;
var clickCount = 0;
var typingTimeout; // buat stop timeout lama

function typewriter() {
  clearTimeout(typingTimeout); // stop animasi lama dulu
  var destination = document.getElementById("typedtext");
  if(!destination) return;

  destination.innerHTML = aText[iIndex].substring(0, iTextPos) + "_";

  if (iTextPos++ < iArrLength) {
    typingTimeout = setTimeout(typewriter, iSpeed);
  } else {
    destination.innerHTML = aText[iIndex]; // hapus kursor "_" pas selesai
  }
}

// Fungsi untuk ganti teks saat tombol ditekan
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
  typewriter(); // jalanin ulang animasi
}

// Jalankan pertama kali pas load
window.onload = function() {
  typewriter();
}
