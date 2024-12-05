// Video About Sec
function toggle() {
    var videoSchoolTour = document.querySelector(".video-school-tour");
    var video = document.querySelector("video");

    // Toggle class "active" untuk menampilkan atau menyembunyikan video
    videoSchoolTour.classList.toggle("active");

    // Pause video dan reset waktu ke 0 jika ditutup
    if (!videoSchoolTour.classList.contains("active")) {
        video.pause();
        video.currentTime = 0;
    }
}
// End About

// Kurikulum Sec
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2500; // Animation duration in milliseconds
        const increment = target / (duration / 16); // Assuming ~60 FPS

        const updateCounter = () => {
            const currentValue = +counter.innerText;
            if (currentValue < target) {
                counter.innerText = Math.ceil(currentValue + increment);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target; // Set final value
            }
        };

        updateCounter();
    });
});
// End Kurikulum

// IDN Hebat sec
// Ambil elemen yang dibutuhkan
const cardsContainer = document.querySelector('.cards'); // Kontainer kartu
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.card-idnhebat'); // Semua kartu


// Variabel untuk melacak posisi
let currentIndex = 0;


// Ukuran kartu
const cardWidth = cards[0].offsetWidth + 20; // Tambahkan margin


// Hitung jumlah kartu yang terlihat di layar
const visibleCards = Math.floor(document.querySelector('.carousel-container').offsetWidth / cardWidth);


// Fungsi untuk menggeser kartu
function updateCarouselPosition() {
    const offset = -currentIndex * cardWidth; // Geser berdasarkan indeks
    cardsContainer.style.transform = `translateX(${offset}px)`;
}


// Tombol panah kiri
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Pindah ke kartu sebelumnya
        updateCarouselPosition();
    }
});


// Tombol panah kanan
rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards) {
        currentIndex++; // Pindah ke kartu berikutnya
        updateCarouselPosition();
    }
});


// Tambahkan transisi untuk animasi
cardsContainer.style.transition = 'transform 0.5s ease-in-out';
// END IDN Hebat

// Testimonials
// Menambahkan duplikasi secara dinamis jika belum ada
window.addEventListener("DOMContentLoaded", () => {
    const originalTitle = document.querySelector(".main-title:not(.duplicate)");
    if (originalTitle) {
        const duplicateTitle = originalTitle.cloneNode(true);
        duplicateTitle.classList.add("duplicate");
        duplicateTitle.style.color = "rgba(255, 255, 255, 0.3)";
        duplicateTitle.style.position = "absolute";
        duplicateTitle.style.top = "8px";
        duplicateTitle.style.left = "8px";
        duplicateTitle.style.zIndex = "0";
        originalTitle.parentNode.appendChild(duplicateTitle);
    }
});


// Animasi untuk menggandakan teks "Apa Kata Mereka?"
const textLayers = document.querySelectorAll(".text-layer");


setInterval(() => {
    textLayers.forEach((layer) => {
        layer.classList.toggle("active");
    });
}, 1000);
//  END Testimonials

