// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Tambahkan toggle kelas 'active' pada menu-toggle
});

// Hide mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active'); // Pastikan toggle kelas 'active' dihapus
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formObject);
    
    // Reset form
    contactForm.reset();
    
    // Show success message (you can customize this)
    alert('Terima kasih! Pesan Anda telah terkirim.');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal Pop-up Functionality
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close-button');

// Menampilkan modal saat halaman dimuat
window.addEventListener('load', () => {
    // Atur isi modal dengan informasi pendaftaran santri
    modalImage.src = "foto_informasi/brosur.png";
    modalTitle.textContent = "Pendaftaran Santri";
    modalDescription.textContent = "Proses pendaftaran santri baru di Pondok Pesantren Al-Anwar Pakijangan telah dibuka. Segera daftarkan diri Anda untuk bergabung dan mendapatkan pendidikan yang berkualitas.";
    
    modal.style.display = 'flex';
});

// Menutup modal ketika tombol close diklik
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Menutup modal ketika area di luar modal-content diklik
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
