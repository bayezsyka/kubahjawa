// ----------------------------------------------------
// Smooth Scrolling for All Internal Links
// ----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ----------------------------------------------------
// Smooth Scroll Specifically for "Pelajari Lebih Lanjut"
// (Opsional, karena kode di atas sudah mencakup semua tautan #)
// ----------------------------------------------------
const learnMoreButton = document.querySelector('.cta-button');
if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector('#latest-news');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// ----------------------------------------------------
// Navbar Scroll Effect
// ----------------------------------------------------
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ----------------------------------------------------
// Modal Pop-up Functionality
// ----------------------------------------------------
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close-button');

// Buka Modal dengan Konten Tertentu
function openModal(title, description, imageSrc) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
}

// Tutup Modal saat tombol "X" diklik
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup Modal saat klik di area luar modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ----------------------------------------------------
// Logo Click: Scroll ke Atas Halaman
// ----------------------------------------------------
const logoLink = document.querySelector('.logo');
logoLink.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
});

// ----------------------------------------------------
// Pastikan Scroll di Posisi Atas Saat Refresh
// ----------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// ----------------------------------------------------
// Modal Pertama Kali Saat Halaman Dimuat
// ----------------------------------------------------
window.addEventListener('load', () => {
    const initialTitle = "Pendaftaran Santri";
    const initialDescription = "Proses pendaftaran santri baru di Pondok Pesantren Al-Anwar Pakijangan telah dibuka. Segera daftarkan diri Anda untuk bergabung dan mendapatkan pendidikan yang berkualitas.";
    const initialImage = "foto_informasi/brosur.png";
    openModal(initialTitle, initialDescription, initialImage);
});

// ----------------------------------------------------
// Klik Kartu Informasi (News Card) untuk Buka Modal
// ----------------------------------------------------
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const imageSrc = card.getAttribute('data-image');
        openModal(title, description, imageSrc);
    });
});
